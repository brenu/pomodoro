import React, { useEffect, useState } from "react";
import "./custom.css";

export default function Main() {
  const [tempo, setTempo] = useState(1500);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [fase, setFase] = useState("trabalho");

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

    console.log(minutos, segundos);
  }, [tempo]);

  // Decreasing time continuously
  useEffect(() => {
    if (tempo > 0) {
      setTimeout(() => setTempo(tempo - 1), 1000);
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
  }, [tempo]);

  return (
    <div className="container">
      <div className="timer-container">
        <h1 className="title">Hora do {fase}</h1>
        <p>
          {minutos}:{segundos > 9 ? segundos : "0" + segundos}
        </p>
      </div>
    </div>
  );
}
