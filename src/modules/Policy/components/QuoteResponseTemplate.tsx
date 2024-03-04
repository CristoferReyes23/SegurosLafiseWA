import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";

export interface Props {
  covertures: QuoteResponseModel;
}

const QuoteTable = ({ covertures }: Props) => {
  return (
    <div>
      <table className="table table-response table-quote">
        <thead>
          <tr>
            <th>Coberturas</th>
            <th>Suma Asegurada</th>
          </tr>
        </thead>
        <tbody>
          {covertures.coberturas.map((i, index) => (
            <tr key={index.toString()}>
              <td>{i.nombre}</td>
              <td>US$ {i.sumaAsegurada}</td>
            </tr>
          ))}
          <tr>
            <th>Prima total</th>
            <td>US$ {covertures.prima}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteTable;

const data = [
  { title: "a. Muerte o lesiones causadas a una persona", value: "2500" },
  { title: "b. Muerte o lesiones causadas a dos o más personas", value: "5000" },
  { title: "c. Daños materiales causados a terceras personas", value: "2500" },
];
