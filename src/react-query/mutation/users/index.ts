import { USER_MUTATION_KEYS } from "./enum";
import { useMutation } from "@tanstack/react-query";
import { addUser, UpdateUserInAdmin } from "../../../supabase/admin/users";

export const useCreateUser = () => {
  return useMutation({
    mutationKey: [USER_MUTATION_KEYS.ADD],
    mutationFn: addUser,
  });
};

export const useUpdateUserInAdmin = () => {
  return useMutation({
    mutationKey: [USER_MUTATION_KEYS.UPDATE],
    mutationFn: UpdateUserInAdmin,
  });
};
