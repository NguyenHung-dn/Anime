import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import AnimeList from "@/components/AnimeList";
import Modal from "@/components/Modal";

export default function Home() {
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [animeData, setAnimeData] = useState({});
  const resetAnimeData = () => {
    setAnimeData({});
  };
  const handleCardClick = (id) => {
    const url = `${API_URL_PUBLIC}/${id}/full`;
    axios.get(url).then((response) => {
      setAnimeData(response.data.data);
    });
  };

  const handleAnimeTitle = (e) => {
    setAnimeTitle(e.target.value);
  };

  const handleSearchAnime = () => {
    const url = `${API_URL_PUBLIC}?q=${animeTitle}`;
    axios.get(url).then((response) => {
      setAnimeList(response.data.data);
    });
  };

  return (
    <main className="lg:flex w-screen h-screen">
      {animeData.mal_id && (
        <Modal resetAnimeData={resetAnimeData} animeData={animeData} />
      )}
      <div className="lg:w-6/12 bg-primary flex justify-center items-center">
        <h1 className="lg:text-8xl w-4/5 text-center font-bold ">
          Look up your favorite anime !!
        </h1>
      </div>
      <div className="lg:w-6/12 relative flex justify-center items-center flex-col">
        <Image
          src="/images/background-image-anime.jfif"
          width="500"
          height="500"
          className="h-full w-auto object-cover absolute"
          alt=""
        />
        <div className="w-full h-full absolute top-0 bg-primaryContrastDark opacity-70" />
        <div className="relative bg-white p-5 rounded-lg shadow-2xl my-8">
          <input
            value={animeTitle}
            onChange={handleAnimeTitle}
            placeholder="Enter anime name..."
            className="border border-solid border-primaryContrastDark h-10 px-3 rounded mb-3"
          />
          <button
            onClick={handleSearchAnime}
            className="block h-8 bg-primary text-center text-white rounded w-full capitalize hover:bg-primaryContrastDark transition"
          >
            search
          </button>
        </div>
        <AnimeList animeList={animeList} handleCardClick={handleCardClick} />
      </div>
    </main>
  );
}
