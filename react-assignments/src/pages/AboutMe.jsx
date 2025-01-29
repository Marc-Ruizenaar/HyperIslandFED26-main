import Header from "../components/Header";
import PersonalPage from "../components/PersonalPage";

export default function AboutMe() {
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
      <Header />
      <PersonalPage person={person} />
    </div>
  );
}
