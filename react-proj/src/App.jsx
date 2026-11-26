import Home from "./Home";
import Counter from "./Hooks/Counter";
import Score from "./Hooks/Score";
import Run from "./Hooks/Run";

function Data(props) {
  return (
    <div>
      <h1>Welcome to {props.obj}</h1>
    </div>
  );
}

function Players(props) {
  return (
    <div>
      <h2>List of Players</h2>

      {/* Container to line up the cards side-by-side */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {props.obj1.map((player, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "16px",
                width: "200px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{player.name}</h3>
              <p>Team: {player.Team}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  let players_data = [
    {
      name: "Virat Kohli",
      Team: "India",
    },
    {
      name: "Rohit Sharma",
      Team: "India",
    },
    {
      name: "MS Dhoni",
      Team: "India",
    },
  ];

  return (
    <div>
      <h1>This is the App Component</h1>
      <h2>JS File</h2>
      <Home />
      <Counter />
      <Score />
      <Run />
      <Data obj="SECE College" />
      <Players obj1={players_data} />
    </div>
  );
}

export default App;


