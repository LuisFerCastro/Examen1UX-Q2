import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

type IndicadorProps = {
  progress: number;
};

const IndicadorProgreso= ({ progress }: IndicadorProps) =>{
  return (
    <ProgressBar
      now={progress}
      style={{ height: "5px", marginTop: "5px" }}
      variant="danger"
    />
  );
}
export default IndicadorProgreso;