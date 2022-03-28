import Cookies from "js-cookie";

// 数据
export const getToken = () => {
  const token = Cookies.get("TOKEN_KEY");
  return token ? token : undefined;
};

export const setToken = (token) => {
  Cookies.set("TOKEN_KEY", token);
};
