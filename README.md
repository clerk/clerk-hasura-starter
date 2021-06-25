# Clerk - Hasura starter repo

<img src="./docs/logo.png" />

This repo shows an example use case for how you can authenticate your Hasura GraphQL service requests using [Clerk](https://clerk.dev) as an authentication provider.

## Where the magic happens

The integration works by using Clerk as the authorization server providing a JWT structure which can be used to [authenticate requests](https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt.html) on Hasura utilizing a custom header convention `x-hasura-*`. The minimal setup required can be viewed at the Apollo [client configuration file](./lib/apolloClient.js).

To get a better understanding of the integration, you can check out our [documentation](https://docs.clerk.dev/frontend/integrations/hasura) on the integration.

## Running the starter

To run the example locally you need to:

1. Sign up for a Clerk account at http://clerk.dev/.
2. Turn on and [configure the integration](https://docs.clerk.dev/frontend/integrations/hasura) on your Clerk dashboard.
3. Setup the required Clerk Frontend API variable from your Clerk project and the Hasura GraphQL endpoint as shown at [the example env file](./.env.local.sample).
4. `yarn` to install the required dependencies.
5. `yarn dev` and you are good to go.

## Contact

If you have any specific use case or anything you would like to ask, please reach out!
