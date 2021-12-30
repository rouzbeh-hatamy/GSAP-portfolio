import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { IPhone7 } from "react-device-mockups";
import medPage from "../../assets/images/medpage.png";
import "./step6.css";
interface IStep6 {}
const Step6: React.FC<IStep6> = (props) => {
  const [width, setwidth] = useState(500);
  gsap.registerPlugin(ScrollTrigger);
  const secRef = useRef(null);
  const med = useRef(null);

  const animateProjects1 = () => {
    gsap
      .timeline()

      .from(med.current, {
        scrollTrigger: {
          trigger: secRef.current,
          //   markers: true,
          start: `-${window.innerWidth > 1500 ? 400 : 10}px 40%`,
          end: "+=400px",
          scrub: 1,
        },
        opacity: 0,
        xPercent: 100,
        duration: 2,
      })
      .to(med.current, {
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
    <div className="section6" ref={secRef}>
      <div className="med" ref={med}>
        <div className="medText">
          <div className="detail">
            <span className="titleProject">MedX</span>
            <div className="stack">
              <span className="smallTitle">Technologies: </span>

              <span className="description">
                ReactJs, lottie, PWA, signature canvas,redux saga
              </span>
            </div>
            <div className="info">
              <span className="smallTitle">About: </span>
              <span className="description">
                A medical startup launched in CA,USA
              </span>
            </div>
          </div>
        </div>
        <IPhone7
          width={width > 1000 ? width / 5 : width / 2}
          orientation="portrait"
          color="black"
        >
          <div className="screenContainermob">
            <img src={medPage} alt="med" onLoad={animateProjects1} />
          </div>
        </IPhone7>
      </div>
    </div>
  );
};

export default Step6;
