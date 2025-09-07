import type { IUser } from "@/interfaces/user";
import type {
  TLoginUserFormValues,
  TRegisterUserFormValues,
} from "../forms/user";
import { api, type IApiResponse } from "./api";

export async function loginUserService(user: TLoginUserFormValues) {
  try {
    const response = await api<IApiResponse<IUser>>(`/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function registerUserService(user: TRegisterUserFormValues) {
  try {
    const response = await api<IApiResponse<IUser>>(`/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response;
  } catch (error) {
    throw error;
  }
}
