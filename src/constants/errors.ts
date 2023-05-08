export enum FrontendErrors {
  AccessDenied = "AccessDenied",
  ResourceNotFound = "ResourceNotFound",
  UserWithTheSameEmailAlreadyExists = "UserWithTheSameEmailAlreadyExists",
}

export const FrontendErrorsStatus: Record<FrontendErrors, number> = {
  AccessDenied: 401,
  ResourceNotFound: 404,
  UserWithTheSameEmailAlreadyExists: 409,
};

export enum BackendErrors {
  InternalServerError = "InternalServerError", // непредвиденная ошибка
  BadGateway = "BadGateway",
}

export const BackendErrorsStatus: Record<BackendErrors, number> = {
  InternalServerError: 500,
  BadGateway: 503,
};
