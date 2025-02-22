import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ room }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <Link to={`/room/${room?._id}`} className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-125
                transition
              "
            src={room?.image}
            alt="Room"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          >
            {/* <HeartButton /> */}
          </div>
        </div>
        <div className="font-semibold text-lg">{room?.location}</div>
        <div className="font-light text-neutral-500">5 nights . June 19 - 26</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">${room?.price}</div>
          <div className="font-light">night</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
