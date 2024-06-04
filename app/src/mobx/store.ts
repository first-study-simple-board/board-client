import { configure } from "mobx";
import { NextRouter } from "next/router";
import DefaultViewModel from "src/viewModels/default.viewModel";
import PostViewModel from "src/viewModels/post/post.viewModel";
import SpinnerViewModel from "src/viewModels/spinner/spinner.viewModel";

const isServer = typeof window === "undefined";

export interface IDefaultProps {
  router: NextRouter;
  spinnerViewModel?: SpinnerViewModel;
}

let store: any = null;
configure({ enforceActions: "observed" });

export class RootStore {
  public defaultViewModel: DefaultViewModel;
  public spinnerViewModel: SpinnerViewModel;
  public postViewModel: PostViewModel;

  constructor(initialData: IDefaultProps) {
    this.spinnerViewModel = new SpinnerViewModel();

    const initData = Object.assign(initialData, {
      indicatorViewModel: this.spinnerViewModel,
    });
    this.defaultViewModel = new DefaultViewModel(initData);
    this.postViewModel = new PostViewModel(initData);
  }
}

export default function initializeStore(initData: IDefaultProps) {
  if (isServer) {
    return new RootStore(initData);
  }
  if (store === null) {
    store = new RootStore(initData);
  }

  return store;
}
