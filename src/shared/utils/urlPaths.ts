export type TypeProviderApi = "LAFISE" | "BACKEND";

export type TypesUrlPath = "catalogs/plans" | "catalogs/plans/{planId}/models";

export enum EnumUrlCatalogsPaths {
  plans = "catalogs/plans",
  brands = "catalogs/plans/{planId}/brands",
  models = "catalogs/plans/{planId}/brands/{marcaId}/models",
  years = "catalogs/plans/{planId}/brands/{marcaId}/models/{modeloId}/lastyears/{topAnio}",
  typeId = "catalogs/id-types",
  sex = "catalogs/sex",
  countriesOrigin = "catalogs/source-country",
  department = "catalogs/paises/{paisOrigen}/departamentos",
  cities = "catalogs/paises/{paisOrigen}/departamentos/{departamentoId}/ciudades",
  districts = "catalogs/paises/{paisOrigen}/departamentos/{departamentoId}/ciudades/{ciudadId}/distritos",
  uses = "catalogs/vehicles/uses",
  profession = "catalogs/profesion",

  coverages = "rates/{planId}/coverages",
  lafiseAuth = "auth",

  getPolicies = "",
}
