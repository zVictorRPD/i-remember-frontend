import type { IUser } from "@/interfaces/user";
import type {
  TLoginUserFormValues,
  TRegisterUserFormValues,
} from "../forms/user";

export async function loginUserService(
  user: TLoginUserFormValues
): Promise<IUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...user, id: Math.random().toString(36).substr(2, 9), name: "John Doe", createdAt: new Date().toISOString() });
    }, 1500);
  });
}

export async function registerUserService(
  user: TRegisterUserFormValues
): Promise<IUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...user, id: Math.random().toString(36).substr(2, 9), createdAt: new Date().toISOString() });
    }, 1500);
  });
}
