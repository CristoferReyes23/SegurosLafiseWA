import { Coverage } from "@/shared/models/quoteResponse.model";

interface Props {
  coverages: Coverage[];
}

const TableResponse = ({ coverages }: Props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headerKeys.map((i) => (
            <th scope="col" key={i.key}>
              {i.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {coverages.map((coverage) => (
          <tr key={coverage.id}>
            {headerKeys.map((header, indexHead) => (
              //@ts-ignore
              <td key={indexHead}>{coverage[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableResponse;

const headerKeys = [
  { key: "id", title: "#" },
  { key: "coberturaId", title: "ID Cobertura" },
  { key: "nombre", title: "Nombre" },
  { key: "orden", title: "Orden" },
  { key: "prima", title: "Prima" },
  { key: "coaseguro", title: "Coaseguro" },
  { key: "deducible", title: "Deducible" },
  { key: "descuento", title: "Descuento" },
  { key: "sumaAsegurada", title: "Aseguradora" },
  { key: "total", title: "Total" },
];
