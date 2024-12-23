import { supabase } from "../..";
import { UserInfo, editUserType } from "./types";

export const getUsersList = async () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return res.data.users as User[];
  });
};

export const UpdateUserInAdmin = async ({ payload }: editUserType) => {
  return await supabase.auth.admin.updateUserById(payload.id, payload.values);
};

export const addUser = async (payload: { email: string; phone: string }) => {
  return supabase.auth.admin.createUser(payload).then((result) => {
    return result;
  });
};

export const getUserInfo = async (id: string) => {
  return supabase.auth.admin.getUserById(id).then((result) => {
    return result.data.user as UserInfo;
  });
};

export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: [string];
  };
  user_metadata: object;
  identities: null;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
