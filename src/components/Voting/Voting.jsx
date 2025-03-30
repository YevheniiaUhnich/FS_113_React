import s from "./Voting.module.css";
import { useState } from "react";

const Voting = () => {
  const [votingData, setVotingData] = useState({
    linux: 0,
    macos: 0,
    windows: 0,
  });
  const handleVotingClick = (option) => {
    setVotingData({
      ...votingData,
      [option]: votingData[option] + 1,
    });
  };
  return (
    <div>
      <ul>
        <li>Linux: {votingData.linux}</li>
        <li>MacOS: {votingData.macos}</li>
        <li>Windows: {votingData.windows}</li>
      </ul>
      <button onClick={() => handleVotingClick("linux")}>Linux</button>
      <button onClick={() => handleVotingClick("macos")}>MacOS</button>
      <button onClick={() => handleVotingClick("windows")}>Windows</button>
    </div>
  );
};

export default Voting;
