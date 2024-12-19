import { supabase } from "../..";
import { mapUsersListForAdmin } from "./utils.ts";

export const getUsersList = async () => {
  try {
    const result = await supabase.auth.admin.listUsers();

    return mapUsersListForAdmin(result.data.users as User[]);
  } catch (error) {
    console.log("Error during get users list", error);
  }
};

export const UpdateUserInAdmin = async (
  id: string,
  payload: { email: string; phone: string }
) => {
  try {
    return await supabase.auth.admin.updateUserById(id, payload);
  } catch (error) {
    console.log("Error during get user update", error);
  }
};

export const addUser = async (payload: { email: string; phone: string }) => {
  try {
    return await supabase.auth.admin.createUser(payload);
  } catch (error) {
    console.log("Error during create user", error);
  }
};

export const getUserInfo = async (id: string) => {
  try {
    const result = await supabase.auth.admin.getUserById(id);
    return result.data.user;
  } catch (error) {
    console.log("Error during get user update", error);
  }
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
