import { action, makeObservable, observable, runInAction } from "mobx";

export interface SpinnerProps {
  spinnerViewModel?: SpinnerViewModel;
}

export default class SpinnerViewModel {
  public spinnerCount: number = 0;

  constructor() {
    makeObservable(this, {
      spinnerCount: observable,

      handleSpinner: action,
    });
  }

  public handleSpinner = (type: "plus" | "minus") => {
    runInAction(() => {
      if (type === "plus") {
        this.spinnerCount = this.spinnerCount + 1;
      } else {
        this.spinnerCount = this.spinnerCount - 1;
      }
    });
  };
}
