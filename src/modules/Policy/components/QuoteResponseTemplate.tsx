import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";

export interface Props {
  coverages: QuoteResponseModel;
}

const QuoteTable = ({ coverages }: Props) => {
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
          {coverages.coberturas.map((i, index) => (
            <tr key={index.toString()}>
              <td>{i.nombre}</td>
              <td>US$ {i.sumaAsegurada}</td>
            </tr>
          ))}
          <tr>
            <th>Prima total</th>
            <td>US$ {coverages.prima}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteTable;
