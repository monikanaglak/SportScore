import { Header } from "../components/Header";
import { Asside } from "../components/Asside";
import { Choice_of_user } from "../components/Choice_of_user";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <Asside />
        <Choice_of_user />
      </div>
    </>
  );
}
