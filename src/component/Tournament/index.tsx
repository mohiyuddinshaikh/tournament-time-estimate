import { useState } from "react";
import "./Tournament.css";

export default function Tournament({
  calculateTotalTournamentTime,
  calculateKnockoutTournamentTime,
  tournamentTime,
  knockoutTournamentTime,
  setBoards,
  setPlayers,
  setRounds,
  setGameTime,
  rounds,
  players,
  boards,
  gameTime,
}) {
  //   const [rounds, setRounds] = useState(1);
  //   const [players, setPlayers] = useState(0);
  //   const [boards, setBoards] = useState(0);
  //   const [gameTime, setGameTime] = useState(30)
  //   const [totalTime, setTotalTime] = useState(0);

  //   const GAME_TIME = 30;
  //   const FINALE_TIME = 60;
  //   const SEMI_FINALE_TIME = 60;

  const handleRoundsChange = (event) => {
    setRounds(event.target.value);
  };
  const handlePlayersChange = (event) => {
    setPlayers(event.target.value);
  };

  const handleBoardChange = (event) => {
    setBoards(event.target.value);
  };
  const handleTimeChange = (event) => {
    setGameTime(event.target.value);
  };
  //   function calculateTotalTime() {
  //     const numberOfTable = Math.ceil(players / (boards * 2));

  //     const groupRoundTime = numberOfTable * gameTime;
  //     console.log("groupRoundTime", groupRoundTime);

  //     const totalRoundsTime = rounds * groupRoundTime;
  //     console.log("totalRoundsTime", totalRoundsTime);

  //     const TotalTournamentTime =
  //       totalRoundsTime + SEMI_FINALE_TIME + FINALE_TIME;

  //     setTotalTime(TotalTournamentTime);
  //   }
  return (
    <div className="tournamentContainer">
      <div className="heading">Chess Tournament Time</div>
      <div className="tournamentInput">
        <div>
          <span className="title">NUMBER OF ROUNDS</span>
          <input
            className="inputBox"
            value={rounds}
            onChange={handleRoundsChange}
          />
        </div>
        <div>
          <span className="title">NUMBER OF PLAYERS</span>
          <input
            className="inputBox"
            value={players}
            onChange={handlePlayersChange}
          />
        </div>
        <div>
          <span className="title">NUMBER OF BOARDS</span>
          <input
            className="inputBox"
            value={boards}
            onChange={handleBoardChange}
          />
        </div>
        <div>
          <span className="title">GAME TIME</span>
          <input
            className="inputBox"
            value={gameTime}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div>
        <div className="calculateBtn" onClick={calculateTotalTournamentTime}>
          Calculate Tournament Time
        </div>
        <div className="calculateBtn" onClick={calculateKnockoutTournamentTime}>
          Calculate Knockout Tournament Time
        </div>
        <div className="timeTaken">Swiss Tournament Time: {tournamentTime}</div>
        <div className="timeTaken">
          Knockout Tournament Time: {knockoutTournamentTime}
        </div>
        {/* <div className="timeTaken">
          Total Tournament Time: {Math.floor(totalTime / 60)} hrs{" "}
          {totalTime % 60} mins
        </div> */}
      </div>
    </div>
  );
}
