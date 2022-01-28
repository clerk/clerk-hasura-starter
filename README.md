# Clerk + Hasura Starter

<img alt="Clerk and Hasura logos" src="./docs/logo.png" width="550" />

This repo shows an example use case for how you can authenticate your Hasura GraphQL service requests using [Clerk](https://clerk.dev) as an authentication provider.

---

**Clerk is Hiring!**

Would you like to work on Open Source software and help maintain this repository? [Apply today](https://apply.workable.com/clerk-dev/)

---

## Where the magic happens

The integration works by using Clerk to generate a JWT token to [authenticate requests](https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt.html) with Hasura. A token with the necessary claims can be created using the Hasura [JWT template](https://docs.clerk.dev/popular-guides/jwt-templates) from your Clerk dashboard and then set as a Bearer token in the `Authorization` header of requests to your GraphQL endpoint.

To get a better understanding of the integration, you can check out our [documentation](https://docs.clerk.dev/integrations/hasura) on the integration.

## Running the starter

To run the example locally you need to:

1. Sign up for a Clerk account at https://clerk.dev/.
2. Create a Hasura token from your Clerk dashboard and [configure the integration](https://docs.clerk.dev/integrations/hasura).
3. Set the required Frontend API variable from your Clerk project and the Hasura GraphQL endpoint as shown in [the example env file](./.env.local.sample).
4. Set the name of your Hasura JWT template in the [`useQuery` hook](./hooks/index.js#L20)
5. `npm install` the required dependencies.
6. `npm run dev` and you are good to go.

## Validating the Hasura integration
After setting the Hasura token and starting the dev server, visit http://localhost:3000/schema

If you see the number of GraphQL schema types, the authenticated request to Hasura has been made successfully. If not, check your browser console and network logs for errors.

## Contact

If you need support or have anything you would like to ask, please reach out in our [Discord channel](https://discord.com/invite/b5rXHjAg7A). We'd love to chat!
