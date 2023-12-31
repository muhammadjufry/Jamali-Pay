import { config } from "./config";

/**
 * This is the configuration you should consume through 'Amplify.configure'
 */
const amplifyConfig = {
  Auth: {
    mandatorySignIn: true,
    region: config.REGION,
    userPoolId: config.USER_POOL_ID,
    identityPoolId: config.IDENTITY_POOL_ID,
    userPoolWebClientId: config.USER_POOL_CLIENT_ID,
    oauth: {
      domain: "jamalipay.auth.eu-west-1.amazoncognito.com",
      redirectSignIn: "https://main.dm1cyo2jikuuk.amplifyapp.com/",
      redirectSignOut: "https://main.dm1cyo2jikuuk.amplifyapp.com/signout",
      scope: ["email", "openid", "profile"],
      responseType: "token",
    },
  },
  aws_appsync_graphqlEndpoint: config.GRAPHQL_ENDPOINT,
  aws_appsync_region: config.REGION,
  aws_appsync_authenticationType: config.AUTHENTICATION_TYPE,
  federationTarget: "COGNITO_USER_POOLS",
};

export default amplifyConfig;
