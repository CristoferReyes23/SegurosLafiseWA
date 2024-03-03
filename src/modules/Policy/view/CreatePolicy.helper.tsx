import { stepsCreatePolicy } from "@/modules/Policy/utils/policyForm.schema";
import { TypeStep, generateInitialValues } from "@/modules/Policy/utils/multiStepFormUtils";
import { FormikValues } from "formik";
import { useEffect, useState } from "react";
import { useHeaderLayout } from "@/views/ProtectedLayout/ProtectedLayout";
import { useNavigate } from "react-router-dom";

const CreatePolicyHelper = () => {
  const [steps] = useState<TypeStep[]>(stepsCreatePolicy);
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepNumber, setStepNumber] = useState(0);
  const { setTitleHeader } = useHeaderLayout();
  const navigate = useNavigate();
  const [validationSchema, setValidationSchema] = useState<any>(undefined);

  useEffect(() => {
    setTitleHeader(steps[currentIndex].titleHeaderStep ?? "");
    setValidationSchema(steps[currentIndex].validationSchema);
  }, [currentIndex]);

  const goNext = () => {
    setCurrentIndex((pre) => pre + 1);

    setStepNumber((pre) => {
      return currentIndex + 1 > pre ? currentIndex + 1 : pre;
    });
  };

  const goBack = () => setCurrentIndex((pre) => pre - 1);
  const onClickTab = (index: number) => setCurrentIndex(index);

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

  return {
    steps,
    goBack,
    goNext,
    onClickTab,
    stepNumber,
    currentIndex,
    handleSubmit,
    initialValues,
    validationSchema,
  };
};

export default CreatePolicyHelper;
