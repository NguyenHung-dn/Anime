import Image from "next/image";

const AnimeCard = (props) => {
  return (
    <li
      onClick={props.handleCardClick}
      className="w-56 rounded-lg overflow-hidden bg-white mb-4 cursor-pointer transition hover:-translate-y-2"
    >
      <Image
        className="h-72 object-cover"
        src={props.imageUrl}
        width="225"
        height="309"
        alt=""
      />
      <div className="p-3 text-center">
        <h3>{props.title}</h3>
      </div>
    </li>
  );
};

export default AnimeCard;
