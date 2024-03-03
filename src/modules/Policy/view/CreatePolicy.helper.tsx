import { stepsCreatePolicy } from "@/modules/Policy/utils/policyForm.schema";
import { TypeStep, generateInitialValues } from "@/modules/Policy/utils/multiStepFormUtils";
import { FormikValues, useFormik } from "formik";
import { useEffect, useMemo, useRef, useState } from "react";
import { useHeaderLayout } from "@/views/ProtectedLayout/ProtectedLayout";
import { useNavigate } from "react-router-dom";
import { customValidation } from "@/modules/Policy/utils/customValidationForm";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { IAlertTemplate } from "@/shared/components/AlertTemplate/AlertTemplate";
import { QuoteService } from "@/shared/services/quote.service";
import { MESSAGES } from "@/shared/utils/formMessages";

const CreatePolicyHelper = () => {
  // wizard state values and form props
  const [steps] = useState<TypeStep[]>(stepsCreatePolicy);
  const [initialValues] = useState<any>(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const [validationSchema, setValidationSchema] = useState<any>(undefined);

  // component ref
  const loadingRef = useRef<any>(null);
  const alertRef = useRef<IAlertTemplate>(null);

  // dashboard context
  const { setTitleHeader } = useHeaderLayout();

  // navigation, components refs and saving data
  const navigate = useNavigate();
  const [coverageResponse, setCoverages] = useState<QuoteResponseModel | null>(null);

  // update title header into dashboard context and update validation schema if index page changes
  useEffect(() => {
    setTitleHeader(steps[currentIndex].titleHeaderStep ?? "");
    setValidationSchema(steps[currentIndex].validationSchema);
  }, [currentIndex]);

  const handleSubmit = (values: FormikValues) => {
    console.log(values);

    navigate("/policy/successful", {
      replace: true,
      state: {
        policyId: "123123",
        message: "testing message",
        client: "test",
      },
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validate: customValidation,
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  //#region tabs events
  const onClickTab = (index: number) => {
    formik.validateForm();
    if (!formik.isValid) return;

    if (currentIndex == EnumIndexPages.quote) {
      getCoveragesData().then((isOk) => {
        if (isOk) setCurrentIndex(index);
      });
    } else {
      setCurrentIndex(index);
    }
  };

  const goBack = () => setCurrentIndex((pre) => pre - 1);
  const goNext = () => {
    if (currentIndex == EnumIndexPages.quote) {
      getCoveragesData().then((isOk) => {
        console.log("ok", isOk);
        if (isOk) updateStateWizard();
      });
    } else {
      updateStateWizard();
    }
  };

  const updateStateWizard = () => {
    setCurrentIndex((pre) => pre + 1);
    setStepNumber((pre) => {
      return currentIndex + 1 > pre ? currentIndex + 1 : pre;
    });
  };
  //#endregion

  const getCoveragesData = async () => {
    let isOk = false;

    try {
      loadingRef.current?.show(true);

      const data = await QuoteService.queryCoverages(formik.values);
      setCoverages(data);
      isOk = true;
    } catch (err: any) {
      alertRef.current?.show(true, { message: err.type ? err.message : MESSAGES.unexpectedError });
      setCoverages(null);
    }
    loadingRef.current?.show(false);
    return isOk;
  };

  return {
    steps,
    goBack,
    goNext,
    formik,
    alertRef,
    onClickTab,
    loadingRef,
    stepNumber,
    currentIndex,
    handleSubmit,
    initialValues,
    coverageResponse,
    validationSchema,
  };
};

export default CreatePolicyHelper;

enum EnumIndexPages {
  quote = 0,
  client = 1,
  verify = 2,
}
