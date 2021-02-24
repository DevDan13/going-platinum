import "./style.css";

function PlayerPulse({ size, playing }) {
  return (
    <div>
      {playing ? (
        <div
          style={{ color: "#ad0e46" }}
          className={`la-line-scale-pulse-out ${size}`}
        >
          <div
            style={{
              borderStyle: "solid",
              borderWidth: 0.1,
              borderColor: "pink",
            }}
          ></div>
          <div
            style={{
              borderStyle: "solid",
              borderWidth: 0.1,
              borderColor: "pink",
            }}
          ></div>
          <div
            style={{
              borderStyle: "solid",
              borderWidth: 0.1,
              borderColor: "pink",
            }}
          ></div>
          <div
            style={{
              borderStyle: "solid",
              borderWidth: 0.1,
              borderColor: "pink",
            }}
          ></div>
          <div
            style={{
              borderStyle: "solid",
              borderWidth: 0.1,
              borderColor: "pink",
            }}
          ></div>
        </div>
      ) : <div style={{height:64}}></div>}
    </div>
  );
}

export default PlayerPulse;
