import "./App.css";
import PersonalPage from "./components/PersonalPage";

function App() {
  const person = {
    name: "Marc",
    info: {
      age: 25,
      city: "Gouda",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <PersonalPage person={person} />
    </div>
  );
}

export default App;
