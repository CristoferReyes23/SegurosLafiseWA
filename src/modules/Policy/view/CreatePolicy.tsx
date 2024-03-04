import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import CreatePolicyHelper from "@/modules/Policy/view/CreatePolicy.helper";
import NavigationButtons from "@/modules/Policy/components/NavigationButtons";
import TabWizard from "@/modules/Policy/components/TabWizard/TabWizard";
import { useMemo } from "react";
import "./CreatePolicy.css";
import VerifyForm from "@/modules/Policy/components/Steps/VerifyForm";
import { Formik } from "formik";
import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";
import { customValidation } from "@/modules/Policy/utils/customValidationForm";

const CreatePolicy = () => {
  const {
    goBack,
    onClickTab,
    currentIndex,
    loadingRef,
    alertRef,
    validationSchema,
    handleSubmit,
    initialValues,
    coverageResponse,
  } = CreatePolicyHelper();

  const pages = useMemo(() => [PlanPolicy, ClientForm, VerifyForm], []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validate={(values) => customValidation(values, currentIndex)}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {(form) => {
          return (
            <>
              <TabWizard
                currentPage={currentIndex}
                onClick={onClickTab}
                tabs={["Datos del vehículo", "Datos Personales", "Comprobar"]}
              />
              {pages.map((Component, index) => (
                <section key={index} className={`${index != currentIndex && "d-none"}`}>
                  <Component form={form} alertRef={alertRef} covertures={coverageResponse} />
                </section>
              ))}

              <NavigationButtons pageLength={pages.length} onClickPrevious={goBack} currentPage={currentIndex} />
            </>
          );
        }}
      </Formik>
      <LoadingSpinner childRef={loadingRef} />
    </div>
  );
};

export default CreatePolicy;
