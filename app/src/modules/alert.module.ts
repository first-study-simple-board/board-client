import Swal, { SweetAlertIcon, SweetAlertInput } from "sweetalert2";

interface IConfirmOptions {
  title: string;
  callback: any;
  confirm?: string;
  cancel?: string;
  cancelAction?: any;
  icon?: SweetAlertIcon;
}

interface IPromptOptions {
  title: string;
  text?: string;
  inputType: SweetAlertInput;
  showCancel?: boolean;
  showDeny?: boolean;
  placeholder?: string;
  confirm?: string;
  cancel?: string;
  deny?: string;
  callback?: any;
  error?: string;
  validation?: any;
  defaultValue?: string | number | File | FileList;
  denyColor?: string;
  confirmColor?: string;
  icon?: SweetAlertIcon;
}

interface ISelectorOptions {
  title: string;
  input:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "range"
    | "textarea"
    | "select"
    | "radio";
  options: any;
  inputValue?: any;
  error?: string;
  className?: string;
  confirm?: string;
  cancel?: string;
  showCancel?: boolean;
  callback: (value) => void;
  icon?: SweetAlertIcon;
}

interface IFreeOptions {
  title: string;
  html: string;
  confirm?: string;
  cancel?: string;
  placeholder?: string;
  icon?: SweetAlertIcon;
  callback: (value) => {};
}

export const Alert = {
  alert: alert,
  confirm: confirm,
  prompt: prompt,
  selector: selector,
  freeFormat: freeFormat,
};

function alert(
  message: string,
  icon?: SweetAlertIcon,
  callback?: any,
  closeModalOption: boolean = true,
  className?: string
) {
  return Swal.fire({
    title: message,
    confirmButtonText: "확인",
    allowOutsideClick: closeModalOption,
    allowEscapeKey: closeModalOption,
    allowEnterKey: closeModalOption,
    customClass: className,
    icon: icon,
  }).then(callback);
}

function confirm(options: IConfirmOptions) {
  return Swal.fire({
    title: options.title,
    confirmButtonText: options.confirm ?? "확인",
    cancelButtonText: options.cancel ?? "취소",
    showConfirmButton: true,
    showCancelButton: true,
    reverseButtons: true,
    icon: options.icon,
  }).then((result) => {
    if (result.isConfirmed) {
      options.callback();
    } else {
      if (typeof options.cancelAction !== "undefined") {
        options.cancelAction();
      }
    }
  });
}

function prompt(options: IPromptOptions) {
  return Swal.fire({
    title: options.title,
    text: options.text ?? "",
    input: options.inputType,
    icon: options.icon,
    inputValue: options.defaultValue,
    inputPlaceholder: options.placeholder,
    confirmButtonText: options.confirm ?? "확인",
    cancelButtonText: options.cancel ?? "취소",
    validationMessage: options.error ?? "에러발생",
    inputAttributes: {
      autocapitalize: "off",
    },
    showConfirmButton: true,
    showCancelButton: options.showCancel ? true : false,
    showDenyButton: options.showDeny ? true : false,
    denyButtonText: options.deny,
    denyButtonColor: options.denyColor,
    confirmButtonColor: options.confirmColor,
    reverseButtons: true,
    inputValidator: (value) => {
      if (options.validation) {
        return new Promise((resolve: (error?: string) => void) => {
          options.validation(value, resolve);
        });
      }
    },
  }).then((result) => {
    if (options.callback) {
      if (options.showDeny)
        return options.callback({ ...result, value: Swal.getInput().value });
      if (result.isConfirmed) return options.callback(result.value);
    }
  });
}

function selector(options: ISelectorOptions) {
  return Swal.fire({
    title: options.title,
    icon: options.icon,
    input: options.input,
    inputValue: options.inputValue,
    inputOptions: options.options,
    customClass: options.className,
    confirmButtonText: options.confirm ?? "확인",
    cancelButtonText: options.cancel ?? "취소",
    showCancelButton: options.showCancel ? true : false,
    reverseButtons: true,
    inputValidator: (value) => {
      if (!value) {
        return options.error;
      }
    },
  }).then((result) => {
    if (options.callback && result.isConfirmed) {
      options.callback(result.value);
    }
  });
}

function freeFormat(options: IFreeOptions) {
  return Swal.fire({
    title: options.title,
    html: options.html,
    icon: options.icon,
    showCancelButton: true,
    confirmButtonText: options.confirm ?? "확인",
    cancelButtonText: options.cancel ?? "취소",
    focusConfirm: false,
    reverseButtons: true,
    preConfirm: options.callback,
  });
}
