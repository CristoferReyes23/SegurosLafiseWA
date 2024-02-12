import { stepsCreatePolicy } from "@/modules/Policy/utils/createPolicySteps";
import {
  TypeStep,
  generateInitialValues,
} from "@/shared/utils/multiStepFormUtils";
import { FormikProps, FormikValues } from "formik";
import { useState } from "react";

const CreatePolicyHelper = () => {
  const [steps] = useState<TypeStep[]>(stepsCreatePolicy);
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);

  const goNext = () => {
    console.log("this si it");

    setCurrentIndex((pre) => pre + 1);

    setStepNumber((pre) => {
      return currentIndex + 1 > pre ? currentIndex + 1 : pre;
    });
  };

  const goBack = () => setCurrentIndex((pre) => pre - 1);
  const onClickTab = (index: number) => setCurrentIndex(index);

  const renderCurrentStep = (form: FormikProps<FormikValues>) => {
    const step = steps[currentIndex];
    const commonProps = {
      name: step.name,
      form,
    };

    const StepComponent = step.component;
    return <StepComponent {...commonProps} />;
  };

  const handleSubmit = (values: FormikValues) => {
    console.log("submit from formik", values);
  };

  return {
    steps,
    goBack,
    goNext,
    onClickTab,
    stepNumber,
    currentIndex,
    handleSubmit,
    initialValues,
    renderCurrentStep,
  };
};

export default CreatePolicyHelper;
