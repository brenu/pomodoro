import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./custom.css";

export default function Main() {
  const [tempo, setTempo] = useState(1500030);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [fase, setFase] = useState("trabalho");
  const [isPaused, setIsPaused] = useState(true);

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
      setFase("descanso");
      setTempo(300000);
    } else {
      setFase("trabalho");
      setTempo(1500020);
    }
  }

  return (
    <div className="container">
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
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
