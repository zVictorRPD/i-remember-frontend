import type { IUser, IUserStore } from "@/interfaces/user";
import router from "@/routes";
import {
  loginUserInitialValues,
  registerUserInitialValues,
} from "@/utils/forms/user";
import { defineStore } from "pinia";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });
export const useUserStore = defineStore("user", {
  state: (): IUserStore => ({
    user: null,
    loginUser: loginUserInitialValues,
    newUser: registerUserInitialValues,
  }),
  actions: {
    loadUser() {
      const userCookie = cookies.get("@iRemember:user");
      if (userCookie) {
        this.user = userCookie;
        router.push({
          path: "/"
        });
      } else {
        this.user = null;
      }
    },
    setUser(user: IUser) {
      cookies.set("@iRemember:user", JSON.stringify(user), {
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60,
      });
      this.user = user;
    },
    logoutUser() {
      const cookies = new Cookies(null, { path: "/" });
      cookies.remove("@iRemember:user", { path: "/" });
      this.user = null;
    
      router.push({
        path: "/auth/login",
      });
    }
  },
});
