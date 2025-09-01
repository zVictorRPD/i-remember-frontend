export interface IUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface IUserStore {
  user: IUser | null;
}