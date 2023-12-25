import axios from "./axios";

export const searchApi = async (
  name,
  email,
  passwordCurrent,
  password,
  appType
) => {
  const response = await axios.patch(
    "/user/updateMyPassword",
    {
      name,
      email,
      passwordCurrent,
      password,
      appType,
    }
    // {
    //   headers: {
    //     projectID: "f104bi07c490",
    //     Authorization: `Bearer ${authToken}`,
    //   },
    // }
  );
  return response.data;
};
