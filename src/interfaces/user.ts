import type { TLoginUserFormValues, TRegisterUserFormValues } from "@/utils/forms/user";

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface IUserStore {
  user: IUser | null;
  loginUser: TLoginUserFormValues;
  newUser: TRegisterUserFormValues;
}
