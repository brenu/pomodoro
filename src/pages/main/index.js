import React, { useEffect, useState } from "react";
import "./custom.css";

export default function Main() {
  const [tempo, setTempo] = useState(1500);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [fase, setFase] = useState("trabalho");
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let tempoPivot = tempo;
    setMinutos(0);
    setSegundos(0);

    while (tempoPivot > 0) {
      if (tempoPivot >= 60) {
        setMinutos((minutos) => minutos + 1);
        tempoPivot = tempoPivot - 60;
      } else {
        setSegundos(tempoPivot);
        tempoPivot = 0;
      }
    }
  }, [tempo]);

  // Decreasing time continuously
  useEffect(() => {
    var manageTempo;
    if (tempo > 0) {
      if (isPaused === false) {
        setTimeout(() => {
          setTempo(tempo - 1);
        }, 1000);
      }
    } else {
      function handlePhaseChange() {
        if (fase === "trabalho") {
          setFase("descanso");
          setTempo(300);
        } else {
          setFase("trabalho");
          setTempo(1500);
        }
      }

      setTimeout(handlePhaseChange, 1000);
    }
  }, [tempo, isPaused]);

  function handlePause() {
    if (isPaused === true) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  }

  function handleReset() {
    if (fase === "trabalho") {
      setTempo(1500);
      setIsPaused(true);
    } else {
      setTempo(300);
      setIsPaused(true);
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
            {isPaused === false ? "Stop" : "Play"}
          </button>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
