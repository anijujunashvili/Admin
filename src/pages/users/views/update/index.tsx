import { useParams } from "react-router-dom";
import EditUser from "../../components/update/index.tsx";
import UsersUpdateFormSkeleton from "../../components/update/skeleton.tsx";
import { useGetSingleUserInfo } from "../../../../react-query/query/users";
import { mapUsersForAdmin } from "../../../../supabase/admin/users/utils";

const EditUserView = () => {
  const params = useParams();

  const { data, isPending } = useGetSingleUserInfo({
    queryOptions: { select: mapUsersForAdmin },
    id: params.id as string,
  });

  return (
    <div>
      {isPending ? (
        <UsersUpdateFormSkeleton />
      ) : (
        <EditUser initialValues={data} />
      )}
    </div>
  );
};

export default EditUserView;
