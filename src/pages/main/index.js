import React, { useEffect, useState } from "react";
import { FaPlay, FaPause, FaUndoAlt } from "react-icons/fa";

import "./custom.css";

import tomato from "../../assets/tomato.png";

export default function Main() {
  const [tempo, setTempo] = useState(1500020);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [fase, setFase] = useState("trabalho");
  const [isPaused, setIsPaused] = useState(true);
  const [sessions, setSessions] = useState(0);
  const [tomatoes, setTomatoes] = useState([]);

  useEffect(() => {
    let tempoPivot = tempo;
    setMinutos(0);
    setSegundos(0);

    while (tempoPivot > 0) {
      if (tempoPivot >= 60000) {
        setMinutos((minutos) => minutos + 1);
        tempoPivot = tempoPivot - 60000;
      } else {
        setSegundos(Math.floor(tempoPivot / 1000));
        tempoPivot = 0;
      }
    }
  }, [tempo]);

  // Decreasing time continuously
  useEffect(() => {
    if (tempo > 0) {
      var timer = setTimeout(() => {
        setTempo(tempo - 100);
      }, 100);

      if (isPaused === true) {
        clearTimeout(timer);
      }
    } else {
      setTimeout(handlePhaseChange, 1);
    }
  }, [tempo, isPaused]);

  useEffect(() => console.log(tomatoes), [tomatoes]);

  function handlePause() {
    if (isPaused === true) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  }

  async function handleReset() {
    if (fase === "trabalho") {
      setIsPaused(true);
      setTimeout(() => setTempo(1500020), 200);
    } else {
      setIsPaused(true);
      setTimeout(() => setTempo(300000), 200);
    }
  }

  function handlePhaseChange() {
    if (fase === "trabalho") {
      setSessions(sessions + 1);
      handleTomatoPush();
      setFase("descanso");
      setTempo(300000);
    } else {
      setFase("trabalho");
      setTempo(1500020);
    }
  }

  function handleTomatoPush() {
    setTomatoes([
      ...tomatoes,
      <img key={sessions} src={tomato} className="tomato" />,
    ]);
  }

  return (
    <div className="container">
      <div className="center-container">
        <div className="tomatoes-container">
          {tomatoes.map((tomato) => {
            return tomato;
          })}
        </div>
        <div className="timer-container">
          <h1 className="title">Hora do {fase}</h1>
          <p>
            {minutos}:{segundos > 9 ? segundos : "0" + segundos}
          </p>
          <div className="buttons-container">
            <button className="button" onClick={handlePause}>
              {isPaused === false ? <FaPause /> : <FaPlay />}
            </button>
            <button className="button" onClick={handleReset}>
              <FaUndoAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
