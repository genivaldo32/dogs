import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GETID } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import { Error } from "../Helpers/Error";
import { Head } from "../Helpers/Head";
import { Loading } from "../Helpers/Loading";
import { PhotoContent } from "./PhotoContent";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GETID(id);

    request(url, options);
  }, [request, id]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  return null;
};
