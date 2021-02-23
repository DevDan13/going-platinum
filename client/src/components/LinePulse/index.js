import "./style.scss";

function LinePulse({ playing }) {
  return (
    <div>
      {playing ? (
        <div id="container">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LinePulse;
