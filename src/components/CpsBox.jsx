import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import starImage from "../images/star.png";
import emptyStarImage from "../images/star-empty.png";


export const CpsBox = () => {
  const [clicks, setClicks] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const handleClick = (e) => {
    setClicks(clicks + 1);
    setClicked(true);

    const audio = new Audio("/fx.mp3"); 

    audio.play();

    const container = document.querySelector(".click-box");
    const box = document.createElement("div");
    box.classList.add("box-animation");

    container.appendChild(box);

    setTimeout(() => {
      box.remove();
    }, 8550);
  };

  useEffect(() => {
    let intervalId;
    if (clicked) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [clicked]);

  useEffect(() => {
    if (timeElapsed >= 10000) {
      const cpsScore = (clicks / (timeElapsed / 1000)).toFixed(2);
      let numStars = 0;
      if (cpsScore >= 12) {
        numStars = 5;
      } else if (cpsScore >= 10) {
        numStars = 4;
      } else if (cpsScore >= 8) {
        numStars = 3;
      } else if (cpsScore >= 6) {
        numStars = 2;
      } else if (cpsScore >= 3) {
        numStars = 1;
      } else if (cpsScore >= 1) {
        numStars = 0;
      } else {
        numStars = 0;
      }

      let stars = "";
      for (let i = 0; i < numStars; i++) {
        stars += `<img src="${starImage}" alt="star">`;
      }
      const remainingStars = 5 - numStars;
      for (let i = 0; i < remainingStars; i++) {
        stars += `<img src="${emptyStarImage}" alt="empty star">`;
      }
      const score = cpsScore;
      Swal.fire({
        icon: "info",
        background: "#090927",
        color: "#cbf4ff",
        backdrop: true,
        allowOutsideClick: false,
        customClass: {
          container: "alert-container darkmode",
          content: "alert-content",
          confirmButton: "alert-button",
        },
        title: `You made ${clicks} clicks in 10 seconds. 
        Your Score is: ${score} CPS.\n\n${stars}`,

        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again',
        confirmButtonAriaLabel: "OK",
      });
      setClicks(0);
      setTimeElapsed(0);
      setClicked(false);
    }
  }, [timeElapsed, clicks]);

  const score =
    timeElapsed > 0 ? (clicks / (timeElapsed / 1000)).toFixed(2) : 0;

  return (
    <section>
      <div className="click-container">
        <div className="click-box" onClick={handleClick}>
          {clicked ? <h3>Click!</h3> : <h3>Click here to start the Test</h3>}
        </div>

        <div className="score-container">
          <div className="box-counter" id="timer-counter">
            <h4>Timer: </h4>
            <p>{(timeElapsed / 1000).toFixed(1)}</p>
          </div>
          <div className="box-counter" id="click-counter">
            <h4>Clicks: </h4>
            <p>{clicks}</p>
          </div>
          <div className="box-counter" id="score-counter">
            <h4>CPS:</h4>
            <p>{score}</p>
          </div>
        </div>
      </div>
      <div className="scroll-down-indicator"></div>
    </section>
  );
};
