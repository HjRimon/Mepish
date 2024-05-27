/* eslint-disable react/prop-types */
import { differenceInDays } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
  // Check if room and date properties are defined
  if (!room || !room.from || !room.to || !room.price) {
    return <div className="text-red-500">Invalid room data</div>;
  }

  // Calculate total days
  const totalDays = differenceInDays(new Date(room.to), new Date(room.from));
  const [value, setvalue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  // Calculate total price
  const totalPrice = totalDays * room.price;
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <Calender value={value}></Calender>
      </div>
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total:</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
