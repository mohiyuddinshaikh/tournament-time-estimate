import { useState } from "react";

function App() {
  const NUMBER_OF_ROUNDS = 2;
  const NUMBER_OF_PLAYERS = 20;
  const NUMBER_OF_BOARDS = 5;

  const TIME_ON_CLOCK = 15;
  const TIME_PER_KNOCKOUT_GAME = 60;
  const FINAL_GAME_TIME = 60;

  const timePerGame = TIME_ON_CLOCK * 2;

  const [tournamentTime, setTournamentTime] = useState<number>(0);

  function calculateTotalTournamentTime() {
    const timePerRound = calculateTimeForGroupRound();
    const timeForSemiFinals = totalTimeTakenForSemiFinals(4);
    const timeForFinals = FINAL_GAME_TIME;

    const totalTournamentTimeInMinutes =
      timePerRound * NUMBER_OF_ROUNDS + timeForSemiFinals + timeForFinals;
    const totalTournamentTimeInHours = totalTournamentTimeInMinutes / 60;
    setTournamentTime(totalTournamentTimeInHours);

    console.log(
      "Total Tournament Time in Minutes:",
      totalTournamentTimeInMinutes
    );
    console.log("Total Tournament Time in Hours:", totalTournamentTimeInHours);
  }

  const calculateTimeForGroupRound = () => {
    const numberOfTables = Math.ceil(
      NUMBER_OF_PLAYERS / (NUMBER_OF_BOARDS * 2)
    );
    // console.log("numberOfTables", numberOfTables);
    console.log("Time per round", numberOfTables * timePerGame);
    return numberOfTables * timePerGame;
  };

  function totalTimeTakenForSemiFinals(numberOfSemifinalists: number) {
    const numberOfTables = Math.ceil(
      numberOfSemifinalists / (NUMBER_OF_BOARDS * 2)
    );
    return numberOfTables * TIME_PER_KNOCKOUT_GAME;
  }

  return (
    <div className="main">
      {/* <button onClick={calculateTimeForGroupRound}>
        Calculate Time Per Round
      </button> */}
      <br />
      <button onClick={calculateTotalTournamentTime}>
        Calculate Tournament Time
      </button>
      <div className="tournamentTime">{tournamentTime}</div>
    </div>
  );
}

export default App;
