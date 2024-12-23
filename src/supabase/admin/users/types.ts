export type UserInfo = {
  email: string;
  phone: string;
};

export type editUserType = {
  payload: {
    id: string;
    values: UserInfo;
  };
};
