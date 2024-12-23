import { AUTH_KEYS } from "./enum";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../supabase/auth";

export const useSignIn = () => {
  return useMutation({
    mutationKey: [AUTH_KEYS.LOGIN],
    mutationFn: login,
  });
};
