import React from "react";
import { FeedPhotoItem } from "./FeedPhotoItem";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import { Error } from "../Helpers/Error";
import { Loading } from "../Helpers/Loading";
import styles from "./FeedPhotos.module.css";

export const FeedPhoto = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};
