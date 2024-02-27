import { PolicyListModel } from "@/shared/models/policyListResponse.model";

interface Props {
  dataSource: PolicyListModel[] | undefined;
  onClickPrint: (...args: any[]) => void;
}

const TablePolicy = ({ dataSource, onClickPrint }: Props) => {
  return (
    <table className="table table-response">
      <thead>
        <tr>
          {TABLE_POLICY.map((i) => (
            <th className="" scope="col" key={i.key}>
              {i.header}
            </th>
          ))}
          <th key={"print-header"}></th>
        </tr>
      </thead>
      <tbody className="">
        {dataSource ? (
          dataSource.map((row) => (
            <tr key={row.id}>
              {TABLE_POLICY.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
              <td key={"print"}>
                <button type="button" className="btn btn-success" onClick={() => onClickPrint(row.id)}>
                  <span className="me-3">
                    <i className="fa-solid fa-print"></i>
                  </span>
                  Imprimir
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center text-muted" colSpan={6}>
              No hay datos que mostrar
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TablePolicy;

const TABLE_POLICY = [
  { header: "N° Póliza", key: "id" },
  { header: "Placa", key: "placa" },
  { header: "Marca", key: "brand" },
  { header: "Modelo", key: "model" },
  { header: "Año", key: "year" },
  { header: "Fecha creación", key: "createdAt" },
];
