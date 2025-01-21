import "./App.css";
import APIBlock from "./components/APIBlock";
import Form from "./components/Form";
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
      <PersonalPage person={person} />
      <br />
      <br />
      <br />

      <Form />
      <br />
      <br />
      <br />
      <APIBlock />
    </div>
  );
}

export default App;
