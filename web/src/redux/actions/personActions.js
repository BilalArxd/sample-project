import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getPersons = () => {
  return axios.get(`${baseUrl}/person`).then((data) => {
    return data.data;
  });
};
export const addPerson = (name) => {
  return axios.post(`${baseUrl}/person`, { name: name }).then((data) => {
    return data.data;
  });
};
