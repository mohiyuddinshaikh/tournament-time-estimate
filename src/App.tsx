import { useState } from "react";
import Tournament from "./component/Tournament";

function App() {
  // const NUMBER_OF_ROUNDS = 2;
  // const NUMBER_OF_PLAYERS = 20;
  // const NUMBER_OF_BOARDS = 5;
  const [rounds, setRounds] = useState(2);
  const [players, setPlayers] = useState(20);
  const [boards, setBoards] = useState(5);
  const [gameTime, setGameTime] = useState(30);

  // const TIME_ON_CLOCK = 15;
  const TIME_PER_KNOCKOUT_GAME = 60;
  const FINAL_GAME_TIME = 60;

  // const timePerGame = TIME_ON_CLOCK * 2;

  const [tournamentTime, setTournamentTime] = useState<number>(0);
  const [knockoutTournamentTime, setKnockoutTournamentTime] =
    useState<number>(0);

  function calculateTotalTournamentTime() {
    const timePerRound = calculateTimeForGroupRound();
    const timeForSemiFinals = totalTimeTakenForSemiFinals(4);
    const timeForFinals = FINAL_GAME_TIME;

    const totalTournamentTimeInMinutes =
      timePerRound * rounds + timeForSemiFinals + timeForFinals;
    const totalTournamentTimeInHours = totalTournamentTimeInMinutes / 60;
    setTournamentTime(totalTournamentTimeInHours);

    console.log(
      "Total Tournament Time in Minutes:",
      totalTournamentTimeInMinutes
    );
    console.log("Total Tournament Time in Hours:", totalTournamentTimeInHours);
  }

  const calculateTimeForGroupRound = () => {
    const numberOfTables = Math.ceil(players / (boards * 2));
    // console.log("numberOfTables", numberOfTables);
    console.log("Time per round", numberOfTables * gameTime);
    return numberOfTables * gameTime;
  };

  function totalTimeTakenForSemiFinals(numberOfSemifinalists: number) {
    const numberOfTables = Math.ceil(numberOfSemifinalists / (boards * 2));
    return numberOfTables * TIME_PER_KNOCKOUT_GAME;
  }

  function calculateKnockoutTournamentTime() {
    let totalPlayers = players;
    let time = 0;
    let byePlayer = 0;

    while (totalPlayers > 1) {
      if (totalPlayers % 2 == 1) {
        totalPlayers -= 1;
        byePlayer = 1;
      }
      const isChampionshipMatch = totalPlayers <= 4;
      const totalGames = Math.ceil(totalPlayers / 2);
      const numberOfTables = Math.ceil(totalGames / boards);
      time =
        time +
        (isChampionshipMatch
          ? TIME_PER_KNOCKOUT_GAME * numberOfTables
          : gameTime * numberOfTables);
      totalPlayers = totalPlayers / 2;
      if (byePlayer) {
        totalPlayers = totalPlayers + byePlayer;
        byePlayer = 0;
      }
    }
    setKnockoutTournamentTime(time / 60); // in hours
    console.log("Knockout tournament time:", time);
    console.log("Knockout tournament time in hours:", time / 60);
  }

  return (
    <div className="main">
      {/* <button onClick={calculateTimeForGroupRound}>
        Calculate Time Per Round
      </button> */}
      {/* <br />
      <button onClick={calculateTotalTournamentTime}>
        Calculate Tournament Time
      </button> */}
      {/* <div className="tournamentTime">{tournamentTime}</div> */}
      <Tournament
        calculateTotalTournamentTime={calculateTotalTournamentTime}
        calculateKnockoutTournamentTime={calculateKnockoutTournamentTime}
        tournamentTime={tournamentTime}
        knockoutTournamentTime={knockoutTournamentTime}
        setRounds={setRounds}
        setPlayers={setPlayers}
        setBoards={setBoards}
        setGameTime={setGameTime}
        rounds={rounds}
        players={players}
        boards={boards}
        gameTime={gameTime}
      />
    </div>
  );
}

export default App;
