import { useState } from "react";

function UserProfile() {
  const players = {
    virat: {
      name: "Virat Kohli",
      role: "Batsman",
      country: "India",
    },
    rohit: {
      name: "Rohit Sharma",
      role: "Batsman",
      country: "India",
    },
    dhoni: {
      name: "MS Dhoni",
      role: "Wicket Keeper",
      country: "India",
    },
  };

  const [player, setPlayer] = useState(players.virat);

  // Button Style
  const buttonStyle = {
    backgroundColor: "#14aabd",
    color: "black",
    border: "2px solid #805386",
    borderRadius: "30px",
    padding: "10px 18px",
    margin: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div className="card">
      <h2>Assignment 4 : User Profile Card</h2>

      <button
        onClick={() => setPlayer(players.virat)}
        style={buttonStyle}
      >
        Virat Kohli
      </button>

      <button
        onClick={() => setPlayer(players.rohit)}
        style={buttonStyle}
      >
        Rohit Sharma
      </button>

      <button
        onClick={() => setPlayer(players.dhoni)}
        style={buttonStyle}
      >
        MS Dhoni
      </button>

      <h3>Name : {player.name}</h3>
      <p>Role : {player.role}</p>
      <p>Country : {player.country}</p>
    </div>
  );
}

export default UserProfile;