import "./style.css";

function PlayerPulse() {
  return (
    <div style={{color: "#ad0e46"}} className="la-line-scale-pulse-out la-3x">
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
      <div style={{borderStyle: "solid", borderWidth: .1, borderColor: "pink"}}></div>
    </div>
  );
}

export default PlayerPulse;
