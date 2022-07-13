import React from "react";
import { STATS_GET } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import { Head } from "../Helpers/Head";
import { Loading } from "../Helpers/Loading";
import { Error } from "../Helpers/Error";
const UsetStatsGraphs = React.lazy(() => import("./UsetStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UsetStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
