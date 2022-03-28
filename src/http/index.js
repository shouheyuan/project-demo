import apiRequest from "@/utils/api.request.js";

const baseUrl = "";
const axios = new apiRequest(baseUrl);

export const demo = (data) => {
  return axios.request({
    method: "POST",
    url: "",
    data,
  });
};
