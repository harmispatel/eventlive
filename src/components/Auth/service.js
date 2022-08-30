const logout = () => {
  localStorage.removeItem("token");
};

const user = () => {
  // return Call({
  //   path: "auth/me",
  //   method: "get",
  // });
};

export default {
  logout,
  user,
};
