import { Cookies } from "react-cookie";

/* eslint-disable import/no-anonymous-default-export */
class TokenModule {
  public cookies: Cookies = new Cookies();

  public save(token: string, options?: any) {
    this.destroy();
    this.cookies.set("token", token, { ...options });
    location.reload();
  }

  public getToken(): string {
    return this.cookies.get("token");
  }

  public isExists(): boolean {
    const token = this.cookies.get("token");
    return token !== "undefined" && token !== "" && token !== null;
  }

  public destroy() {
    this.cookies.remove("token");
  }
}

export default new TokenModule();
