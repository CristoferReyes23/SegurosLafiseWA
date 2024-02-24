import { TABLE_COVERAGES } from "@/modules/Quote/utils/const";
import { Coverage } from "@/shared/models/quoteResponse.model";

interface Props {
  coverages: Coverage[];
}

const TableResponse = ({ coverages }: Props) => {
  return (
    <table className="table table-responsive table">
      <thead>
        <tr>
          {TABLE_COVERAGES.map((i) => (
            <th className="" scope="col" key={i.key}>
              {i.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {coverages.map((coverage) => (
          <tr key={coverage.id}>
            {TABLE_COVERAGES.map((header, indexHead) => (
              <td key={indexHead} style={{ maxWidth: header.maxWidth }}>
                {coverage[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableResponse;
