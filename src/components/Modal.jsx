import Image from "next/image";

const Modal = (props) => {
  return (
    <div className="h-screen w-screen absolute z-10 bg-transparentBlack flex justify-center items-center">
      <div className="bg-primaryContrastLight p-6 rounded-lg w-1/2 relative h-700 overflow-auto">
        <button
          className="bg-primary text-white w-12 h-12 flex justify-center items-center rounded absolute right-6 hover:bg-primaryContrastDark"
          onClick={props.resetAnimeData}
        >
          x
        </button>
        <h2 className="text-4xl font-bold my-6">{props.animeData.title}</h2>
        <div className="flex mb-6">
          <Image
            src={props.animeData.images.webp.large_image_url}
            width="500"
            height="500"
            className="w-72 mr-6"
          />

          <ul>
            <li>source: {props.animeData.source}</li>
            <li>episodes: {props.animeData.episodes}</li>
            <li>duration: {props.animeData.duration}</li>
            <li>rating: {props.animeData.rating}</li>
            <li>score: {props.animeData.score}</li>
            <li>season: {props.animeData.season}</li>
            <li>year: {props.animeData.year}</li>
          </ul>
        </div>
        <div className="mb-3">
          <div className="mb-3">Synopsis</div>
          <p>{props.animeData.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
