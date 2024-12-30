import axios from "axios"

const baseURL = "https://filterr.net/admin/informatinal/api"

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer 95|TzlzYStUdqPGubIYQ93XUFrFARmXxT08vmJerCSafc6e1738`,
    "Content-Type": "multipart/form-data",
  },
})

export const fetchDataApi = async (endpoint) => {
  const response = await api.get(`/${endpoint}`)

  return response.data
}

export const addNewData = async (endpoint, newItem) => {
  const response = await api.post(`/${endpoint}`, newItem)

  return response.data
}
