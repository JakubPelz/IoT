import axios from "axios";
import { getBasePath } from "../components/utils/pathHelper";

const getMethod = (path, headers) => axios.get(getBasePath() + path, { headers });
const postMethod = (path, payload, headers) => axios.post(getBasePath() + path, payload, { headers });
const deleteMethod = (path, headers) => axios.delete(getBasePath() + path, { headers });
const putMethod = (path, payload, headers) => axios.put(getBasePath() + path, payload, { headers });

const getAuthHeaders = (auth) =>
    auth
        ? {
              "Content-type": "application/json",
              Authorization: `Bearer ${auth.userToken.access_token}`,
          }
        : null;

const ApiClient = {
    getProfile: async (auth) => getMethod("/profile", getAuthHeaders(auth)),
    getUser: async (id, auth) => getMethod(`/users/${id}`, getAuthHeaders(auth)),
    getUsers: async (auth) => getMethod("/users", getAuthHeaders(auth)),
    editUser: async (id, user, auth) => putMethod(`/users/${id}`, user, getAuthHeaders(auth)),
    deleteUser: async (id, auth) => deleteMethod(`/users/${id}`, getAuthHeaders(auth)),
    addUser: async (user, auth) => postMethod("/users", user, getAuthHeaders(auth)),
    login: async (credentials) => postMethod("/auth/login", credentials),
};

export default ApiClient;
