import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  Exchange,
  fetchExchange,
  Operation,
  Provider,
} from "urql";
import { fromPromise, fromValue, map, mergeMap, pipe } from "wonka";

interface AuthorizedUrqlProviderProps {
  children: React.ReactNode;
}

const AuthorizedUrqlProvider: React.FC<AuthorizedUrqlProviderProps> = ({
  children,
}) => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchOptionsExchange =
    (fn: any): Exchange =>
    ({ forward }) =>
    (ops$) => {
      return pipe(
        ops$,
        mergeMap((operation: Operation) => {
          const result = fn(operation.context.fetchOptions);
          return pipe(
            (typeof result.then === "function"
              ? fromPromise(result)
              : fromValue(result)) as any,
            map((fetchOptions: RequestInit | (() => RequestInit)) => ({
              ...operation,
              context: { ...operation.context, fetchOptions },
            }))
          );
        }),
        forward
      );
    };

  const client = createClient({
    url: "http://localhost:7000/graphql",
    exchanges: [
      dedupExchange,
      cacheExchange,
      fetchOptionsExchange(async (fetchOptions: any) => {
        const token = await getAccessTokenSilently({
          audience: `https://example-authentication-app-server`,
        });

        return Promise.resolve({
          ...fetchOptions,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
      }),
      fetchExchange,
    ],
  });

  return <Provider value={client}>{children}</Provider>;
};

export default AuthorizedUrqlProvider;
