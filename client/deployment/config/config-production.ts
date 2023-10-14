/**
 * Add your live production URL here
 */
// const HOSTED_URL = "https://main.dm1cyo2jikuuk.amplifyapp.com/";
const HOSTED_URL = "http://localhost:3000";

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
  USER_POOL_CLIENT_ID: "1qb1b4c5gl6ado94kcar39kauf",
  USER_POOL_ID: "eu-west-1_1c5QU6mld",
  IDENTITY_POOL_ID: "eu-west-1:cf1c500d-f1f0-4cc3-94c6-9af3026f844a",
  GRAPHQL_ENDPOINT:
    "https://55x75ffb2nfkxiwujw5u725nxi.appsync-api.eu-west-1.amazonaws.com/graphql",
};

export default configProduction;
