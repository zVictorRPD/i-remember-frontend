import type { IUser, IUserStore } from "@/interfaces/user";
import {
  loginUserInitialValues,
  registerUserInitialValues,
} from "@/utils/forms/user";
import { defineStore } from "pinia";
import Cookies from "universal-cookie";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", {
  state: (): IUserStore => ({
    user: null,
    loginUser: loginUserInitialValues,
    newUser: registerUserInitialValues,
  }),
  actions: {
    async loadUser() {
      const cookies = new Cookies(null, { path: "/" });
      const userCookie = cookies.get("@iRemember:user");
      const router = useRouter();
      if (userCookie) {
        this.user = userCookie;
        router.push("/");
      } else {
        this.user = null;
      }
    },
    setUser(user: IUser) {
      const cookies = new Cookies(null, { path: "/" });
      cookies.set("@iRemember:user", JSON.stringify(user), {
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60,
      });
      this.user = user;
    },
  },
});
