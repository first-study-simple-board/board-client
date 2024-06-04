/**
 * API Method Type
 */
export const ApiFunctionType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
} as const;
export type ApiFunctionType =
  (typeof ApiFunctionType)[keyof typeof ApiFunctionType];
