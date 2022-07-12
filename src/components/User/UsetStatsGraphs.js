import React from "react";
import styles from "./UserStatsGraphs.module.css";

export const UsetStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );
    console.log(data);
  }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};
