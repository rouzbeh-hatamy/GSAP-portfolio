import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { IPhone7 } from "react-device-mockups";
import mfPage from "../../assets/images/mfPage.png";
import "./step5.css";
interface IStep5 {}
const Step5: React.FC<IStep5> = (props) => {
  const [width, setwidth] = useState(500);
  gsap.registerPlugin(ScrollTrigger);
  const secRef = useRef(null);
  const mafiline = useRef(null);

  const animateProjects1 = () => {
    gsap
      .timeline()

      .from(mafiline.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: `-${window.innerWidth > 1500 ? 400 : 700}px 40%`,
          end: "+=600px",
          scrub: 1,
        },
        opacity: 0,
        xPercent: -100,
        duration: 2,
      })
      .to(mafiline.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "250px 40%",
          end: "+=1000px",
          scrub: 1,
          pin: true,
        },
        duration: 2,
      });
  };
  useLayoutEffect(() => {
    setwidth(window.innerWidth);
  }, []);

  return (
    <div className="section5" ref={secRef}>
      <div className="mafiline" ref={mafiline}>
        <IPhone7
          width={width > 1000 ? width / 5 : width / 2}
          orientation="portrait"
          color="black"
        >
          <div className="screenContainermob">
            <img src={mfPage} alt="mafiline" onLoad={animateProjects1} />
          </div>
        </IPhone7>
        <div className="mafilineText">
          <div className="detail">
            <span className="titleProject">Mafiline</span>
            <div className="stack">
              <span className="smallTitle">Technologies: </span>

              <span className="description">
                ReactJs, PWA, PWA to Native, Socket.io,material Ui,Atomic Design
              </span>
            </div>
            <div className="info">
              <span className="smallTitle">About: </span>
              <span className="description">
                An online Mafia game which is similar to Spy game but popular in
                middle East.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
