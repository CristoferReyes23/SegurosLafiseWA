import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import CreatePolicyHelper from "@/modules/Policy/view/CreatePolicy/CreatePolicy.helper";
import NavigationButtons from "@/modules/Policy/components/NavigationButtons";
import TabWizard from "@/modules/Policy/components/TabWizard/TabWizard";
import { useMemo } from "react";
import "./CreatePolicy.css";
import VerifyForm from "@/modules/Policy/components/Steps/VerifyForm";
import { FormikProvider } from "formik";
import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";

const CreatePolicy = () => {
  const { formik, goBack, goNext, alertRef, loadingRef, onClickTab, currentIndex, coverageResponse } =
    CreatePolicyHelper();

  const pages = useMemo(() => [PlanPolicy, ClientForm, VerifyForm], []);

  return (
    <div>
      <FormikProvider value={formik}>
        <TabWizard
          currentPage={currentIndex}
          onClick={onClickTab}
          tabs={["Datos del vehículo", "Datos Personales", "Comprobar"]}
        />
        {pages.map((Component, index) => (
          <section key={index} className={`${index != currentIndex && "d-none"}`}>
            <Component form={formik} alertRef={alertRef} covertures={coverageResponse} />
          </section>
        ))}

        <NavigationButtons
          pageLength={pages.length}
          onClickPrevious={goBack}
          currentPage={currentIndex}
          onClickNext={goNext}
        />
      </FormikProvider>
      <LoadingSpinner childRef={loadingRef} />
    </div>
  );
};

export default CreatePolicy;
