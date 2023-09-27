"use client";
import { Amplify } from "aws-amplify";
import { createAppSyncClient } from "../appsync/AppSyncClient";
import amplifyConfig from "../deployment/amplify-config";
import { ApolloProvider } from "@apollo/client";

Amplify.configure(amplifyConfig);
export default function ApolloProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={createAppSyncClient()}>{children}</ApolloProvider>
  );
}
