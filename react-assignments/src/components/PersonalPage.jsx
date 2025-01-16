export default function PersonalPage({ person }) {
  const hobbies = person.info.hobbies;

  return (
    <>
      <h1>{person.name}</h1>
      <p>Age:{person.info.age}</p>
      <p>City:{person.info.city}</p>
      <p>Job:{person.info.job}</p>
      <p className="flex">
        Hobbies:{" "}
        {hobbies.map((hobbie) => (
          <p>{hobbie}</p>
        ))}{" "}
      </p>
    </>
  );
}
