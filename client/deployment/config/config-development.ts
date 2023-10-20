/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = "http://localhost:3000";

const configDevelopment = {
  HOSTED_URL,
  MODE: "DEVELOPMENT",
  REGION: "eu-west-1",
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout`,
  AUTHENTICATION_TYPE: "AWS_IAM" as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: "2l71n59rqopaf0utedslde3sc0",
  USER_POOL_ID: "eu-west-1_jOvcIoFJ8",
  IDENTITY_POOL_ID: "eu-west-1:5997dd9b-68b1-4e03-9c5b-bd1acb2dced9",
  GRAPHQL_ENDPOINT:
    "https://6uxjv5tn6vesda6fy5s6pd73je.appsync-api.eu-west-1.amazonaws.com/graphql",
};

export default configDevelopment;
