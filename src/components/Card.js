import React from "react";
import { FormatDate } from "../assets/common";

function Card({ player }) {
  const getImage = () => {
    let image;
    try {
      image = require(`../assets/player-images/${player.Id}.jpg`);
    } catch (err) {
      image = require(`../assets/player-images/default.png`);
    }

    return image;
  };

  return (
    <div className="bg-gray-100  bg-gradient-to-r from-cyan-500 to-blue-500 mb-4  shadow-lg">
      <img src={getImage()} alt={player.PFName} className="w-full" />
      <div className="pt-3 text-white p-4">
        <h5 className="text-xl  font-bold">{player.PFName}</h5>
        <p className="text-white">Skill : {player?.SkillDesc || "-"}</p>
        <h5>{`Value : $${player.Value ? player.Value : 0}`}</h5>
        <div>
          {player?.UpComingMatchesList.map((match) => {
            if (match?.CCode || match?.VsCCode)
              return (
                <div key={match.TID}>
                  <p>
                    {match?.CCode} vs. {match?.VsCCode}
                  </p>
                  {FormatDate(match.MDate)}
                </div>
              );
            else return <p key={match.TID}>No Matches</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
