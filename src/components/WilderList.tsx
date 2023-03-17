import { useWilders } from "../context/WildersContext";
import Wilder from "./Wilder";
import "./WilderLists.css";

export default function WildersList() {
  const { wilders } = useWilders();

  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wilders.map((wilder) => (
          <Wilder key={wilder.id} wilder={wilder} />
        ))}
      </section>
    </main>
  );
}
