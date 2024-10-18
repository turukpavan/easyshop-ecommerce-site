import React, { useEffect, useState } from "react";

const Timer1 = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      return (
        <>
          
          <p>time Out</p>
        </>
      );
    }

    return (
      <>
        <p className=" bg-muted rounded px-2 py-1  m-1">{days}</p>:
        <p className=" bg-muted rounded px-2 py-1  m-1">{hours}</p>:
        <p className=" bg-muted rounded px-2 py-1 m-1">{minutes}</p>:
        <p className=" bg-muted rounded px-2 py-1  m-1">{seconds}</p>
      </>
    );
  };
  return (
    <>
      <div className="ps-3">
        <input type="range" min="1" max="100" value={(time/2)/duration*100} className="w-100 text-success" />
        <div className="text-muted d-flex align-items-center ps-3">
          {getFormattedTime(time)}
          <p className="w-50 px-3  fs-7 lh-1">
            Remain until the end of the offer
          </p>
        </div>
      </div>
    </>
  );
};

export default Timer1;
