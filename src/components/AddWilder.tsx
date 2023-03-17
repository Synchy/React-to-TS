import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useWilders } from "../context/WildersContext";

export default function AddWilderForm() {
  const { fetchData } = useWilders();
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleChangeName = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setName(event.target.value);
  };

  const handleChangeCity = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/api/wilder", {
      name,
      city,
    });
    fetchData();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="René Girard"
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          placeholder="Barcelona"
          value={city}
          onChange={handleChangeCity}
        />
      </>
      <button>Submit</button>
    </form>
  );
}
