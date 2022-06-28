import React from "react";
import styles from "./FeedModal.module.css";
import { useFetch } from "../../Hooks/useFetch";
import { Error } from "../Helpers/Error";
import { PHOTO_GET } from "../../api";
import { Loading } from "../Helpers/Loading";
import { PhotoContent } from "../Photo/PhotoContent";

export const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
