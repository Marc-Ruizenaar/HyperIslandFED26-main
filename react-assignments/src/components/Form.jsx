import { useState } from "react";

export default function Form() {
  const [data, setData] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newEntry = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      age: formData.get("age"),
      country: formData.get("country"),
    };

    setData(newEntry);

    console.log(data);
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={(event) => HandleSubmit(event)}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="surname" placeholder="Surname" />
        <input type="number" name="age" placeholder="Age" />
        <input type="text" name="country" placeholder="Country" />

        <input type="submit" value="submit" />
      </form>
    </>
  );
}
