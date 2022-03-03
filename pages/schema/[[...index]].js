import { useQuery } from "../../hooks";

const Schema = () => {
  const { data } = useQuery(`query { __schema { types { name } } }`);

  return <h2 style={{ textAlign: 'center' }}>GraphQL schema has {data?.__schema.types.length} types</h2>
};

export default Schema;
