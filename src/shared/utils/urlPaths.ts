export type TypeUrlTo = "LAFISE" | "BACKEND";

export type TypesUrlPath = "catalogs/plans" | "catalogs/plans/{planId}/models";

export enum EnumUrlCatalogsPaths {
  plans = "catalogs/plans",
  brands = "catalogs/plans/{planId}/brands",
  models = "catalogs/plans/{planId}/brands/{marcaId}/models",
}
