import developmentConfig from "./config-development";
const HOSTED_URL = "https://main.dm1cyo2jikuuk.amplifyapp.com/";

const configLocal = {
  ...developmentConfig,
  HOSTED_URL,
  MODE: "LOCAL",
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout`,
};

export default configLocal;
