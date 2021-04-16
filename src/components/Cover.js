import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Cover.css';

function Cover() {
  return (
    <div className="cover-container">
      <video src="/videos/txp-video1.mp4" autoPlay loop muted />
      <h1>TROPICAL EXPERIENCE</h1>
      <p>Beach is always the best getaway</p>
      <div className="cover-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Cover;
