/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useParams, useHistory } from "react-router-dom";

export default () => {
  const { id } = useParams();
  const history = useHistory();

  return <div>
    <h4> Post ke-{id} </h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit aliquam eveniet dolorem, repellat quaerat saepe eligendi optio quos quibusdam deserunt itaque asperiores aliquid officia maxime distinctio earum minus voluptates unde maiores mollitia nemo? Excepturi harum at aut tempora facilis eaque atque saepe sint, unde ipsam, accusamus provident dicta in exercitationem ex amet? Voluptatum sequi reiciendis saepe laboriosam quasi deleniti harum veritatis soluta incidunt, consequuntur, accusamus suscipit!</p>
    <button onClick={() => history.push("/")}>
      Back
    </button>
  </div>
}