"use client";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import { createAppSyncClient } from "../appsync/AppSyncClient";
import amplifyConfig from "../deployment/amplify-config";
import { redirect } from "next/navigation";

Amplify.configure(amplifyConfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const validateUserSession = async () => {
    try {
      await Auth.currentSession();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserSession = async () => {
    try {
      await Auth.currentSession();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={createAppSyncClient(validateUserSession)}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
