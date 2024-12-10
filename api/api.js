import axios from "axios";

const baseURL = "https://filterr.net/admin/informatinal/api";

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer 76|0wIx25k2iRZuM2x7fIQ4uaZ6M8LSc3umYUjcMHQz9f301fd6`,
    "Content-Type": "multipart/form-data",
  },
});

export const fetchDataApi = async (endpoint) => {
  const response = await api.get(`/${endpoint}`);

  return response.data;
};
