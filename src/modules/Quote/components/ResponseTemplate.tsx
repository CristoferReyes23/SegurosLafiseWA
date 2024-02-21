import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";

interface Props {
  response: QuoteResponseModel;
}

const ResponseTemplate = ({ response }: Props) => {
  return (
    <div className="mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((i) => (
              <th scope="col" key={i}>
                {i}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {response.coberturas.map((i) => (
            <tr key={i.id}>
              {headers.map((j, indexJ) => (
                //@ts-ignore
                <td key={indexJ.toString()}>{i[j]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseTemplate;

const headers = [
  "id",
  "nombre",
  "orden",
  "coberturaId",
  "prima",
  "sumaAsegurada",
  "coaseguro",
  "deducible",
  "descuento",
  "total",
];
