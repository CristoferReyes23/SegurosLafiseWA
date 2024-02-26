import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";

export interface ResponseGetPoliciesViewModel {
  isOk: boolean;
  response?: PolicyListResponseModel;
  errorMessage?: string;
}
