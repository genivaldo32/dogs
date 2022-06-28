import React from "react";
import { Link } from "react-router-dom";
import { PhotoComents } from "./PhotoComents";
import styles from "./PhotoContent.module.css";
export const PhotoContent = ({ data }) => {
  const { photo, coments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.datalhes}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.peso} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComents id={photo.id} comments={coments} />
    </div>
  );
};
