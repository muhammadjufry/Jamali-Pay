import { TokenSet } from "next-auth";
import NextAuth from "next-auth/next";
import { Provider } from "next-auth/providers/index";

type TProvider = "Amazon" | "Apple" | "Google" | "Facebook";

function getProvider(provider: TProvider): Provider {
  return {
    id: `cognito:${provider.toLowerCase()}`,
    name: `Cognito${provider}`,
    type: "oauth",
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    wellKnown: `https://cognito-idp.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID}/.well-known/openid-configuration`,
    authorization: {
      url: `${process.env.COGNITO_DOMAIN}/oauth2/authorize`,
      params: {
        response_type: "code",
        client_id: process.env.GOOGLE_CLIENT_ID,
        identity_provider: provider,
        redirect_uri: `${
          process.env.NEXTAUTH_URL
        }/api/auth/callback/cognito_${provider.toLowerCase()}`,
      },
    },
    token: {
      url: `${process.env.COGNITO_DOMAIN}/oauth2/token`,
      params: {
        grant_type: "authorization_code",
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${
          process.env.NEXTAUTH_URL
        }/api/auth/callback/cognito_${provider.toLowerCase()}`,
      },
    },

    userinfo: {
      url: `${process.env.COGNITO_DOMAIN}/oauth2/userInfo`,
    },
    profile: function (profile) {
      return {
        id: profile.sub,
        ...profile,
      };
    },
  };
}

export const authOptions = {
  providers: [
    ...["Amazon", "Apple", "Google", "Facebook"].map((provider: any) =>
      getProvider(provider)
    ),
  ],

  callbacks: {
    async signIn({ user, account, profile }: any) {
      return true;
    },
    async redirect({ url, baseUrl }: any) {
      // Return the url to redirect to after successful sign in.
      return baseUrl;
    },
    async jwt({ token, account, profile, user }: any) {
      if (account) {
        // This is an initial login, set JWT tokens.
        return {
          ...token,
          accessToken: account.access_token,
          idToken: account.id_token,
          refreshToken: account.refresh_token,
          expiresAt: account.expires_at,
          tokenType: "Bearer",
        };
      }
      if (Date.now() < token.expiresAt) {
        // Access/Id token are still valid, return them as is.
        return token;
      }
      // Access/Id tokens have expired, retrieve new tokens using the
      // refresh token
      try {
        const response = await fetch(
          `${process.env.COGNITO_DOMAIN}/oauth2/token`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: process.env.GOOGLE_CLIENT_ID || "",
              client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
              grant_type: "refresh_token",
              refresh_token: token.refreshToken,
            }),
            method: "POST",
          }
        );

        const tokens: TokenSet = await response.json();

        if (!response.ok) throw tokens;

        return {
          ...token,
          accessToken: tokens.access_token,
          idToken: tokens.id_token,
          expiresAt: Date.now() + Number(tokens.expires_in) * 1000,
        };
      } catch (error) {
        // Could not refresh tokens, return error
        console.error("Error refreshing access and id tokens: ", error);
        return { ...token, error: "RefreshTokensError" as const };
      }
    },
    async session({ session, token }: any) {
      /* 
          Forward tokens to client in case you need to make authorized API      
          calls to an AWS service directly from the front end.
        */
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      /* 
          If there is an error when refreshing tokens, include it so it can 
          be forwarded to the front end.
        */
      session.error = token.error;
      return session;
    },
  },
};

export default NextAuth(authOptions);
