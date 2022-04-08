import React from "react";
import "./Calender.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

const Calender = ({ event }) => {
  const renderEvent = () => {
    return (
      <>
        <span>{event.date}</span>
      </>
    );
  };

  return (
    <div>
      <div className="calender-bg">
        <div className="calender-eve">
          <FullCalendar plugins={[daygridPlugin]} eventContent={renderEvent} />
        </div>
      </div>
    </div>
  );
};

export default Calender;