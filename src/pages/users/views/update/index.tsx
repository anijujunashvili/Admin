import { useParams } from "react-router-dom";
import EditUser from "../../components/update/index.tsx";
import UsersUpdateFormSkeleton from "../../components/update/skeleton.tsx";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../../../supabase/admin/users/index.ts";

export const EditUserView = () => {
  const params = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["getUser", params.id],
    queryFn: () => getUserInfo(params.id as string),
  });

  const initialValues = {
    email: data ? data["email"] || "" : "",
    phone: data ? data["phone"] || "" : "",
  };
  return (
    <div>
      {isPending ? (
        <UsersUpdateFormSkeleton />
      ) : (
        <EditUser initialValues={initialValues} />
      )}
    </div>
  );
};
