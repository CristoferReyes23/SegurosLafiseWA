import { stepsCreatePolicy } from "@/modules/Policy/utils/policyForm.schema";
import { TypeStep, generateInitialValues } from "@/modules/Policy/utils/multiStepFormUtils";
import { FormikValues } from "formik";
import { useEffect, useRef, useState } from "react";
import { useHeaderLayout } from "@/views/ProtectedLayout/ProtectedLayout";
import { useNavigate } from "react-router-dom";
import { IAlertTemplate } from "@/shared/components/AlertTemplate/AlertTemplate";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { MESSAGES } from "@/shared/utils/formMessages";
import { EnumIndexPages } from "@/modules/Policy/utils/enumPages";

const CreatePolicyHelper = () => {
  // wizard state values and form props
  const [steps] = useState<TypeStep[]>(stepsCreatePolicy);
  const [initialValues] = useState<any>(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const validationSchema = steps[currentIndex].validationSchema;

  // component ref
  const loadingRef = useRef<any>(null);
  const alertRef = useRef<IAlertTemplate>(null);

  // dashboard context
  const { setTitleHeader } = useHeaderLayout();

  // navigation, components refs and saving data
  const navigate = useNavigate();
  const [coverageResponse, setCoverages] = useState<QuoteResponseModel | null>(null);

  // update context dashboard title
  useEffect(() => {
    setTitleHeader(steps[currentIndex].titleHeaderStep ?? "");
  }, [currentIndex]);

  const handleSubmit = (values: FormikValues) => {
    loadingRef.current?.show(true);
    handlerEventSubmit(values)
      .then((res) => {
        console.log("res", res);
        if (res) updateWizardSteps(false);
      })
      .finally(() => loadingRef.current?.show(false));
  };

  const handlerEventSubmit = async (values: any) => {
    switch (currentIndex) {
      case EnumIndexPages.quote:
        return await nextStepQuote(values);

      case EnumIndexPages.client:
        return true;

      case EnumIndexPages.verify:
        navigate("/policy/successful", {
          replace: true,
          state: {
            policyId: "123123",
            message: "testing message",
            client: "test",
          },
        });
        break;

      default:
        break;
    }
  };

  const nextStepQuote = async (values: any) => {
    let isOk = false;
    try {
      const data = await QuoteService.queryCoverages(values);
      setCoverages(data);
      isOk = true;
    } catch (err: any) {
      alertRef.current?.show(true, { message: err.type ? err.message : MESSAGES.unexpectedError });
      setCoverages(null);
    }
    return isOk;
  };

  const updateWizardSteps = (goBack: boolean) => {
    if (goBack) {
      setCurrentIndex((pre) => pre - 1);
      return;
    }

    if (currentIndex != EnumIndexPages.verify) {
      setCurrentIndex((pre) => pre + 1);
      return;
    }
  };

  //#region tabs events
  const onClickTab = (index: number) => {
    setCurrentIndex(index);
  };

  const goBack = () => {
    updateWizardSteps(true);
  };
  //#endregion

  return {
    steps,
    goBack,
    alertRef,
    onClickTab,
    loadingRef,
    currentIndex,
    handleSubmit,
    initialValues,
    validationSchema,
    coverageResponse,
  };
};

export default CreatePolicyHelper;
