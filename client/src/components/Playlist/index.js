import React from "react";

function Playlist(props) {
  const data = props.data;
  return (
    <div>
      <h2>Playlist Name</h2>
      <ul>
        <li>song</li>
        <li>song</li>
        <li>song</li>
        <li>song</li>
        <li>song</li>
        <li>song</li>
        <li>song</li>
      </ul>
    </div>
  );
}

export default Playlist;
