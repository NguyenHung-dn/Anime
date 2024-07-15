import AnimeCard from "./AnimeCard";

const AnimeList = (props) => {
  return (
    <ul className="relative w-full flex flex-wrap p-8 justify-between overflow-auto">
      {props.animeList.map((anime) => {
        return (
          <AnimeCard
            key={anime.mal_id}
            title={anime.title}
            imageUrl={anime.images.jpg.image_url}
            handleCardClick={() => props.handleCardClick(anime.mal_id)}
          />
        );
      })}
    </ul>
  );
};

export default AnimeList;
