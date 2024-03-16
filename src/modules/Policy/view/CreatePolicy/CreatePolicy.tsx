import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import CreatePolicyHelper from "@/modules/Policy/view/CreatePolicy/CreatePolicy.helper";
import NavigationButtons from "@/modules/Policy/components/NavigationButtons";
import TabWizard from "@/modules/Policy/components/TabWizard/TabWizard";
import "./CreatePolicy.css";
import VerifyForm from "@/modules/Policy/components/Steps/VerifyForm";
import { FormikProvider } from "formik";
import { EnumIndexPages } from "@/modules/Policy/utils/enumPages";
import ModalBadRequest from "@/modules/Policy/components/ModalBadRequest";

const CreatePolicy = () => {
  const { formik, goBack, goNext, alertRef, onClickTab, currentIndex, coverageResponse, errorModal, hideModalError } =
    CreatePolicyHelper();

  return (
    <div>
      <FormikProvider value={formik}>
        <TabWizard
          currentPage={currentIndex}
          onClick={onClickTab}
          tabs={["Datos del vehículo", "Datos Personales", "Comprobar"]}
        />
        <section key={"vehicle"} className={`${currentIndex != EnumIndexPages.quote && "d-none"}`}>
          <PlanPolicy form={formik} alertRef={alertRef} />
        </section>

        <section key={"vehicle"} className={`${currentIndex != EnumIndexPages.client && "d-none"}`}>
          <ClientForm form={formik} />
        </section>

        <section key={"vehicle"} className={`${currentIndex != EnumIndexPages.verify && "d-none"}`}>
          <VerifyForm form={formik} coverages={coverageResponse} />
        </section>

        <NavigationButtons pageLength={3} onClickPrevious={goBack} currentPage={currentIndex} onClickNext={goNext} />
      </FormikProvider>
      <ModalBadRequest
        isVisible={errorModal.isVisibleModal}
        message={errorModal.message}
        hideModalEvent={hideModalError}
      />
    </div>
  );
};

export default CreatePolicy;
