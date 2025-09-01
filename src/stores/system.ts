import type { ISystemStore } from "@/interfaces/system";
import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
  state: (): ISystemStore => ({
    colorScheme: "light",
  }),
  getters: {
    logoPath: (state) =>
      state.colorScheme === "dark" ? "/dark-logo.webp" : "/logo.webp",
    mobileLogoPath: (state) =>
      state.colorScheme === "dark" ? "/dark-logo-mobile.webp" : "/logo-mobile.webp",
  },
  actions: {
    toggleColorScheme() {
      this.colorScheme = this.colorScheme === "light" ? "dark" : "light";
      localStorage.setItem("@iRemember:color-scheme", this.colorScheme);
      this.applyColorScheme();
    },
    loadColorScheme() {
      const savedScheme = localStorage.getItem("@iRemember:color-scheme");
      if (savedScheme === "light" || savedScheme === "dark") {
        this.colorScheme = savedScheme;
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        this.colorScheme = prefersDark ? "dark" : "light";
        localStorage.setItem("@iRemember:color-scheme", this.colorScheme);
      }
      this.applyColorScheme();
    },
    applyColorScheme() {
      this.colorScheme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    },
  },
});
