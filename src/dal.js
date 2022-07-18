const apiHost = "http://127.0.0.1:3000"

const apiLogin = ({email, password}) => {
  return fetch(`${apiHost}/account/login/${email}/${password}`);
};
const apiCreateAccount = ({name, email, password}) => {
  return fetch(`${apiHost}/account/create/${name}/${email}/${password}`);
};
const apiBalance = ({email, balance}) => {
  return fetch(`${apiHost}/account/balance/${email}/${balance}`);
};
const apiAllData = ({UserContext}) => {
  return fetch(`${apiHost}/account/alldata/${UserContext}`);
};

export {
  apiLogin,
  apiCreateAccount,
  apiBalance,
  apiAllData
};
