import type { TLoginUserFormValues, TRegisterUserFormValues } from "@/utils/forms/user";

export interface IUser {
  id: number;
  name: string;
  email: string;
  token: string;
  createdAt: string;
}

export interface IUserStore {
  user: IUser | null;
  loginUser: TLoginUserFormValues;
  newUser: TRegisterUserFormValues;
}
