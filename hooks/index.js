import { request } from "graphql-request";
import { useSession } from "@clerk/nextjs";
import useSWR from "swr";

/**
 * Make authenticated GraphQL query request
 * @param {string} query GraphQL query or mutation
 * @param {string} variables GraphQL Document variables
 * @param {boolean} blockRequest Request blocked if true
 * @returns useSWR object (data, error, isValidating, mutate)
 */
 export const useQuery = (query, variables, blockRequest) => {
  if (!query) {
    throw Error("No query provided to `useQuery`");
  }
  const { getToken } = useSession();
  const endpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API;
  const fetcher = async () =>
    request(endpoint, query, variables, {
      authorization: `Bearer ${await getToken({ template: "your-template-name" })}`
    });

  return useSWR(query, blockRequest ? () => {} : fetcher);
};
