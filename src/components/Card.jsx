import cardData from "../data/data.js";
import Header from "./Header.jsx";
import styles from "./Card.module.css";
export default function Card() {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        {cardData.map((eachElement, index) => (
          <div className={styles.mainCardContainer} key={index}>
            <div>
              <img src={eachElement.imageUrl} alt={eachElement.title} />
            </div>
            <div>
              <div className={styles.location}>
                <div className={styles.locationName}>
                  <img
                    src={eachElement.googleMapsUrl}
                    alt={eachElement.location}
                  />
                  <p>{eachElement.location}</p>
                </div>
                <a href="#">View on Google Maps</a>
              </div>
              <div className={styles.description}>
                <h2>{eachElement.title}</h2>
                <div className={styles.data}>
                  <p>{eachElement.startDate}-</p>
                  <p>{eachElement.endDate}</p>
                </div>
                <p className={styles.locationDescription}>
                  {eachElement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
