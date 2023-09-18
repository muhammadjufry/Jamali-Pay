/**
 * Add your live production URL here
 */
const HOSTED_URL = "https://main.dm1cyo2jikuuk.amplifyapp.com/";

const configProduction = {
  HOSTED_URL,
  MODE: "PRODUCTION",
  REGION: "eu-west-1",
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: "AWS_IAM" as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: "79s0l6pmgvvi2467qfqvv3khpd",
  USER_POOL_ID: "eu-west-1_UQ6VlQbYe",
  IDENTITY_POOL_ID: "eu-west-1:f0884440-6a1a-47db-80d6-0ce1180aac6d",
  GRAPHQL_ENDPOINT:
    "https://fgphmm3upbcorkwv73zmtkev2e.appsync-api.eu-west-1.amazonaws.com/graphql",
};

export default configProduction;
