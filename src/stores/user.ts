import type { IUserStore } from "@/interfaces/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: (): IUserStore => ({
    user: null,
  }),
});
