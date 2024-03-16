import AlertTemplate from "@/modules/Printer/components/Alert";
import FormSearchClient from "@/modules/Printer/components/FormSearchClient";
import TablePolicy from "@/modules/Printer/components/TablePolicy";
import ViewModalPdf from "@/modules/Printer/components/ViewModalPdf";
import PrinterHelper from "@/modules/Printer/views/Printer.helper";
import FormCard from "@/shared/components/FormCard";
import ModalAlerts from "@/shared/components/ModalAlerts";

const Printer = () => {
  const {
    formik,
    responseData,
    isVisibleAlert,
    setIsVisibleAlert,
    onClickPrint,
    urlPdf,
    hidePdf,
    isVisiblePdf,
    modalRef,
  } = PrinterHelper();

  return (
    <div>
      <div className="vstack gap-3">
        <FormSearchClient form={formik} />

        <FormCard title="Pólizas">
          {isVisibleAlert && <AlertTemplate message={responseData?.message ?? ""} setVisible={setIsVisibleAlert} />}
          <TablePolicy dataSource={responseData?.response?.data} onClickPrint={onClickPrint} />

          <ViewModalPdf urlPdf={urlPdf} title="Póliza" hideModal={hidePdf} isVisiblePdf={isVisiblePdf} />
        </FormCard>
      </div>

      <ModalAlerts modalRef={modalRef} />
    </div>
  );
};
export default Printer;
