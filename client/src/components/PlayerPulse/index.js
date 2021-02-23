import "./style.css";

function PlayerPulse({size}) {
  return (
    <div style={{color: "#ad0e46"}} className={`la-line-scale-pulse-out ${size}`}>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
    </div>
  );
}

export default PlayerPulse;
