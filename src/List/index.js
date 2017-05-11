import React from "react"
import Filter from "./Filter"
import Cards from "./Cards"
import './styles.css'

export default () => {
  return (
    <section className="shoes-container">
      <Filter />
      <Cards />
    </section>
  );
};
