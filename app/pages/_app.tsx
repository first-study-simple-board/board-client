import Footer from "components/layout/footer";
import { Provider } from "mobx-react";
import App from "next/app";
import { NextRouter, withRouter } from "next/router";
import "reflect-metadata";
import initializeStore, { IDefaultProps, RootStore } from "src/mobx/store";
import "styles/globals.css";

// export const myFont = localFont({
//   src: [
//     { path: "../public/fonts/100.ttf", weight: "100", style: "normal" },
//     { path: "../public/fonts/200.ttf", weight: "200", style: "normal" },
//     { path: "../public/fonts/300.ttf", weight: "300", style: "normal" },
//     { path: "../public/fonts/400.ttf", weight: "400", style: "normal" },
//     { path: "../public/fonts/500.ttf", weight: "500", style: "normal" },
//     { path: "../public/fonts/600.ttf", weight: "600", style: "normal" },
//     { path: "../public/fonts/700.ttf", weight: "700", style: "normal" },
//     { path: "../public/fonts/800.ttf", weight: "800", style: "normal" },
//     { path: "../public/fonts/900.ttf", weight: "900", style: "normal" },
//   ],
//   display: "swap",
// });

class MyApp extends App<any, any, any> {
  public mobxStore: RootStore;
  public router: NextRouter;

  constructor(props: IDefaultProps) {
    super(props);
    this.router = props.router;
    this.mobxStore = initializeStore({ router: props.router });
  }

  render() {
    const { Component } = this.props;

    return (
      // <div className={myFont.className}>
      <Provider {...this.mobxStore}>
        {/* <LoadingSpinner /> */}
        <div className="flex flex-col">
          <Component />
          <Footer />
        </div>
      </Provider>
      // </div>
    );
  }
}

export default withRouter(MyApp);
