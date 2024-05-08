import React from "react";
import Card from "./components/Card";

function App() {
  const teamDetails = {
    name: 'John',
    age: 25
  }
  return (
    <>
      <section className="card__container flex justify-center items-center flex-col flex-wrap mx-8 my-6">
        <h1 className="text-3xl font-semibold mb-6">Profile Cards</h1>
        <div className="flex justify-center items-center flex-wrap gap-6">
          <Card name={teamDetails.name} userName={"sam"}/>
          <Card name={"Kanchan"}/>
          <Card name={"Prakriti"}/>
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}

export default App;
