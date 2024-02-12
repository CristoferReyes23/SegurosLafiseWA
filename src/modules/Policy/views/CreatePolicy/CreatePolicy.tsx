import CreatePolicyHelper from "@/modules/Policy/views/CreatePolicy/CreatePolicy.helper";
import NavigationButtons from "@/shared/components/Forms/NavigationButtons/NavigationButtons";
import TabWizard from "@/shared/components/Forms/TabWizard/TabWizard";
import { getStepSchema } from "@/shared/utils/multiStepFormUtils";
import { Formik } from "formik";

const CreatePolicy = () => {
  const {
    steps,
    goBack,
    goNext,
    onClickTab,
    stepNumber,
    currentIndex,
    handleSubmit,
    initialValues,
    renderCurrentStep,
  } = CreatePolicyHelper();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getStepSchema(currentIndex, steps)}
        validateOnMount
      >
        {(form) => {
          return (
            <>
              <TabWizard
                stepNumber={stepNumber}
                currentPage={currentIndex}
                onClick={onClickTab}
                tabs={["Cotizar", "Datos del vehículo", "Datos Personales"]}
              />

              {renderCurrentStep(form)}

              <NavigationButtons
                pageLength={3}
                onClickPrevious={goBack}
                currentPage={currentIndex}
                onClickNext={goNext}
              />
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreatePolicy;
