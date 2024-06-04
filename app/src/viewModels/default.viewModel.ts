import { makeObservable } from "mobx";
import { NextRouter } from "next/router";
import { IDefaultProps } from "src/mobx/store";
import { ApiModule } from "src/modules/api.module";
import SpinnerViewModel from "./spinner/spinner.viewModel";

export default class DefaultViewModel {
  protected api: ApiModule;
  public router: NextRouter;
  public spinnerViewModel: SpinnerViewModel;

  constructor(props: IDefaultProps) {
    this.router = props.router;
    this.spinnerViewModel = props.spinnerViewModel;
    this.api = ApiModule.getInstance(this.spinnerViewModel);

    makeObservable(this, {});
  }
}
