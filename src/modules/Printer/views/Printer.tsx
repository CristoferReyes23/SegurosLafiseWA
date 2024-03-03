import AlertTemplate from "@/modules/Printer/components/Alert";
import FormSearchClient from "@/modules/Printer/components/FormSearchClient";
import TablePolicy from "@/modules/Printer/components/TablePolicy";
import ViewModalPdf from "@/modules/Printer/components/ViewModalPdf";
import PrinterHelper from "@/modules/Printer/views/Printer.helper";
import FormCard from "@/shared/components/FormCard";
import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";

export const Printer = () => {
  const {
    formik,
    responseData,
    isVisibleAlert,
    setIsVisibleAlert,
    onClickPrint,
    urlPdf,
    hidePdf,
    isVisiblePdf,
    loadingRef,
  } = PrinterHelper();

  return (
    <div>
      <div className="vstack gap-3">
        <FormSearchClient form={formik} />

        <FormCard title="Pólizas">
          {isVisibleAlert && <AlertTemplate message={responseData?.message ?? ""} setVisible={setIsVisibleAlert} />}
          <TablePolicy dataSource={responseData?.response?.data} onClickPrint={onClickPrint} />

          <ViewModalPdf urlPdf={urlPdf} hideModal={hidePdf} isVisiblePdf={isVisiblePdf} />
        </FormCard>
      </div>

      <LoadingSpinner childRef={loadingRef} />
    </div>
  );
};
