import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { Brand } from "@/modules/Policy/models/models";
import {
  FormikComponentProps,
  getFormikErrorField,
  getFormikProps,
} from "@/modules/Policy/utils/getFormikProps";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

const BrandSelect = ({ form }: FormikComponentProps) => {
  const { data, isDisabled } = useLoadSelect<Brand[]>({
    dependencyField: "planId",
    form,
    name: "marcaId",
    pathApi: EnumUrlCatalogsPaths.brands,
    use: "LAFISE",
  });

  return (
    <FormGroupTemplate label={"marcaId"} name={"marcaId"}>
      <FormSelectTemplate
        data={data?.map((i) => ({ title: i.text, value: i.id })) ?? []}
        firstOption={{ title: "Seleccione una marca", value: "" }}
        errorMessage={getFormikErrorField(form, "marcaId")}
        {...getFormikProps(form, "marcaId")}
        disabled={isDisabled}
      />
    </FormGroupTemplate>
  );
};

export default BrandSelect;

// const [data, setData] = useState<SelectDataTemplate[]>([]);
// const [isDisabled, setIsDisabled] = useState(true);

// useEffect(() => {
//   if (form.values.planId) {
//     fetchCall<Brand[]>({
//       use: "LAFISE",
//       path: EnumUrlCatalogsPaths.brands.replace(
//         "{planId}",
//         form.values.planId
//       ),
//     }).then((data) => {
//       setData(data.map((i) => ({ title: i.text, value: i.id })));
//     });
//   }

//   setIsDisabled(form.values.planId == null);
// }, [form.values.planId]);
