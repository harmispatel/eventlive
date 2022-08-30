import Call from "./Call";

const login = async (data) => {
  let d = await Call({
    path: "business/login",
    method: "post",
    data,
  });
  return d;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiry");
  localStorage.removeItem("id");
  window.location.href="/login";
};

const getCurrentUser = () => {
  let d = JSON.parse(localStorage.getItem('user'));
  return d;
}

export default {
  login,
  logout,
  getCurrentUser
};
