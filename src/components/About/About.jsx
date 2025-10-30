import styles from "./About.module.css";
import { useState, useEffect } from "react";
import PaginationButtons from "../Pagination/PaginationButtons.jsx";

function About() {
  const baseUrl = "https://rickandmortyapi.com/api/";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ prev: null, next: null });
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async (url = `${baseUrl}/character`) => {
    const result = await fetch(url);
    const json = await result.json();
    setCharacters(json.results || []);
    if (json.info) {
      setInfo({ prev: json.info.prev, next: json.info.next });
    }
    setCurrentIndex(0);
    return json;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigate = async (direction) => {
    if (direction === "next") {
      if (currentIndex < characters.length - 1) {
        setCurrentIndex((idx) => idx + 1);
      } else if (info.next) {
        const json = await fetchData(info.next);
        const nextPageResults = json.results || [];
        if (nextPageResults.length > 0) {
          setCurrentIndex(0);
        }
      }
    }

    if (direction === "prev") {
      if (currentIndex > 0) {
        setCurrentIndex((idx) => idx - 1);
      } else if (info.prev) {
        const json = await fetchData(info.prev);
        const prevPageResults = json.results || [];
        if (prevPageResults.length > 0) {
          setCurrentIndex(prevPageResults.length - 1);
        }
      }
    }
  };

  const hasPrev = currentIndex > 0 || !!info.prev;
  const hasNext = currentIndex < characters.length - 1 || !!info.next;

  const currentCharacter = characters[currentIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          {currentCharacter && (
            <div className={styles.card} key={currentCharacter.id}>
              <div>
                <h2> {currentCharacter.name}</h2>
                <img src={currentCharacter.image} alt={currentCharacter.name} />
                <p>Status: {currentCharacter.status}</p>
                <p>Species: {currentCharacter.species}</p>
                <p>Location: {currentCharacter.location.name}</p>
              </div>
            </div>
          )}
          <PaginationButtons
            prev={hasPrev ? "prev" : null}
            next={hasNext ? "next" : null}
            onNavigate={handleNavigate}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
