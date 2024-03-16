import { stepsCreatePolicy } from "@/modules/Policy/utils/policyForm.schema";
import { TypeStep, generateInitialValues } from "@/modules/Policy/utils/multiStepFormUtils";
import { FormikValues, useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useHeaderLayout } from "@/views/ProtectedLayout/ProtectedLayout";
import { useNavigate } from "react-router-dom";
import { IAlertTemplate } from "@/shared/components/AlertTemplate/AlertTemplate";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { MESSAGES } from "@/shared/utils/formMessages";
import { EnumIndexPages } from "@/modules/Policy/utils/enumPages";
import { customValidation } from "@/modules/Policy/utils/customValidationForm";
import { PolicyService } from "@/shared/services/policy.service";
import { useLoading } from "@/shared/contexts/LoadingWrapper";

const CreatePolicyHelper = () => {
  // wizard state values and form props
  const [steps] = useState<TypeStep[]>(stepsCreatePolicy);
  const [initialValues] = useState<any>(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const validationSchema = steps[currentIndex].validationSchema;

  // component ref
  const loading = useLoading();
  const alertRef = useRef<IAlertTemplate>(null);
  const modalAlertsRef = useRef<any>(null);

  // dashboard context
  const { setTitleHeader } = useHeaderLayout();

  const navigate = useNavigate();
  const [coverageResponse, setCoverages] = useState<QuoteResponseModel | null>(null);

  // update context dashboard title
  useEffect(() => {
    setTitleHeader(steps[currentIndex].titleHeaderStep ?? "");
  }, [currentIndex]);

  const handleSubmit = (values: FormikValues) => {
    loading.show();
    handlerEventSubmit(values)
      .then((res) => {
        if (res) updateWizardSteps(false);
      })
      .finally(() => loading.hide());
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validateOnMount: true,
    validationSchema,
    initialTouched: {
      tipoId: true,
      documentoIdentificacion: true,
    },
    validate: (values) => customValidation(values, currentIndex),
  });

  const handlerEventSubmit = async (values: any) => {
    switch (currentIndex) {
      case EnumIndexPages.quote:
        return await getCoverages(values);

      case EnumIndexPages.client:
        return true;

      case EnumIndexPages.verify:
        return await createPolicy(values);

      default:
        return;
    }
  };

  const createPolicy = async (values: any) => {
    try {
      const response = await PolicyService.createPolicy(values);

      if (response.success) {
        navigate("/policy/successful", {
          replace: true,
          state: response,
        });
      }
    } catch (err: any) {
      modalAlertsRef.current?.show(true, { message: err?.message ?? MESSAGES.unexpectedError, title: "Error" });
    }
  };

  const getCoverages = async (values: any) => {
    let isOk = false;
    try {
      const data = await QuoteService.queryCoverages(values);
      setCoverages(data.coverages);
      alertRef.current?.show(false);

      formik.setFieldValue("cate", data.dataSheet.auCategoria);
      formik.setFieldValue("nasiento", data.dataSheet.auNumPasajeros);
      formik.setFieldValue("valn", data.dataSheet.auValorNuevo);

      isOk = true;
    } catch (err: any) {
      alertRef.current?.show(true, { message: err.type ? err.message : MESSAGES.unexpectedError });
      setCoverages(null);
    }
    return isOk;
  };

  //#region tabs events
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

  const onClickTab = (index: number) => {
    setCurrentIndex(index);
  };

  const goBack = () => {
    updateWizardSteps(true);
  };

  const goNext = () => {
    loading.show();
    handlerEventSubmit(formik.values)
      .then((res) => {
        if (res) updateWizardSteps(false);
      })
      .finally(() => {
        console.log("asdaskldj");

        loading.hide();
      });
  };
  //#endregion

  return {
    steps,
    formik,
    goBack,
    goNext,
    alertRef,
    onClickTab,
    currentIndex,
    handleSubmit,
    initialValues,
    modalAlertsRef,
    validationSchema,
    coverageResponse,
  };
};

export default CreatePolicyHelper;
