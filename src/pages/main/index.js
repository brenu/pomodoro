import React, { useEffect, useState } from "react";
import "./custom.css";

export default function Main() {
  const [tempo, setTempo] = useState(1500);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

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
    }
  }, [tempo]);

  return (
    <div className="container">
      <div className="timer-container">
        <p>
          {minutos}:{segundos > 10 ? segundos : "0" + segundos}
        </p>
      </div>
    </div>
  );
}
