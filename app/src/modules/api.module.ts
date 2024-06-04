import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { plainToInstance } from "class-transformer";
import { ApiFunctionType } from "config/constants";
import ErrorDto from "src/dto/error.dto";
import TokenDto from "src/dto/token.dto";
import SpinnerViewModel from "src/viewModels/spinner/spinner.viewModel";
import tokenModule from "./token.module";

interface ExistingRequests<T> {
  type: ApiFunctionType;
  url: string;
  params?: T;
  config?: AxiosRequestConfig;
}

export default interface ServerResponse<T = {}> {
  code: string;
  message: string;
  status: number;
  data?: T;
}

export class ApiModule {
  private static instance: ApiModule;
  private axios: AxiosInstance;
  private tokenType: string = "Bearer";
  private spinnerViewModel: SpinnerViewModel;
  private token: string = "";
  private baseURL: string = "";
  private commonHeader;

  constructor(spinnerViewModel?: SpinnerViewModel) {
    this.spinnerViewModel = spinnerViewModel;
    this.baseURL = process.env.NEXT_PUBLIC_API_URL;
    this.commonHeader = {
      "Content-Type": "application/json",
    };
  }

  private setToken(): void {
    this.token = `${this.tokenType} ${tokenModule.getToken()}`;
    this.commonHeader.Authorization = this.token;
  }

  private setAxiosInstance() {
    this.setToken();
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: this.commonHeader,
      responseType: "json",
      withCredentials: true,
    });

    if (typeof this.spinnerViewModel !== "undefined") {
      this.spinnerViewModel.handleSpinner("plus");
    }

    // 응답 인터셉터
    this.axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(spinnerViewModel?: SpinnerViewModel): ApiModule {
    return this.instance || (this.instance = new this(spinnerViewModel));
  }

  async get<T>(url: string, params?: T) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .get(url, {
        params: params,
      })
      .then(this.handleSuccess)
      .catch((error: AxiosError) =>
        this.handleError(error, {
          type: ApiFunctionType.GET,
          url: url,
          params: params,
        })
      );
  }

  async post<T>(url: string, params?: T, config?: AxiosRequestConfig) {
    let data = params;

    this.setAxiosInstance();
    return await this.axios
      .post(url, data, config)
      .then(this.handleSuccess)
      .catch((error: AxiosError) =>
        this.handleError(error, {
          type: ApiFunctionType.POST,
          url: url,
          params: params,
          config: config,
        })
      );
  }

  async put<T>(url: string, params?: T) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .put(url, params)
      .then(this.handleSuccess)
      .catch((error: AxiosError) =>
        this.handleError(error, {
          type: ApiFunctionType.PUT,
          url: url,
          params: params,
        })
      );
  }

  async patch<T>(url: string, params?: T) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .patch(url, params)
      .then(this.handleSuccess)
      .catch((error: AxiosError) =>
        this.handleError(error, {
          type: ApiFunctionType.PATCH,
          url: url,
          params: params,
        })
      );
  }

  async delete(url: string) {
    this.commonHeader["Content-Type"] = "application/json";
    this.setAxiosInstance();
    return await this.axios
      .delete(url)
      .then(this.handleSuccess)
      .catch((error: AxiosError) =>
        this.handleError(error, {
          type: ApiFunctionType.DELETE,
          url: url,
        })
      );
  }

  private handleSuccess = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
    if (typeof this.spinnerViewModel !== "undefined") {
      this.spinnerViewModel.handleSpinner("minus");
    }
    return response;
  };

  private handleError = <T>(
    error: AxiosError,
    request: ExistingRequests<T>
  ) => {
    const data = plainToInstance(ErrorDto, error.response.data);

    if (typeof this.spinnerViewModel !== "undefined") {
      this.spinnerViewModel.handleSpinner("minus");
    }

    switch (data.code) {
      case "F0006":
        return this.refreshAccessToken(request);

      default:
        throw data;
    }
  };

  public async refreshAccessToken<T>(request: ExistingRequests<T>) {
    this.setAxiosInstance();
    return await this.axios
      .post("/refresh")
      .then((response: AxiosResponse) => {
        const data = plainToInstance(TokenDto, response.data.data);
        tokenModule.save(data.accessToken);
        return this[request.type](request.url, request.params, request.config);
      })
      .catch((error: AxiosError<ErrorDto>) => {
        const { code } = error.response.data;
        if (code === "F1005") {
          tokenModule.destroy();
          window.location.replace("/admin/login");
        }
        throw new Error(error.message);
      });
  }
}
