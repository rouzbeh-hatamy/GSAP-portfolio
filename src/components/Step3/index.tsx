import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { MacbookPro } from "react-device-mockups";
import bis from '../../assets/images/bis.png'
import "./step3.css";
interface IStep3 {}
const Step3: React.FC<IStep3> = (props) => {
  const [width, setwidth] = useState(500);
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  const secRef = useRef(null);
  const title = useRef(null);

  const animatebg = () => {
    gsap
      .timeline()
      .to(secRef.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "-200px 40%",
          end: "+=500px",
          scrub: 1,
        },
        backgroundImage:
          "linear-gradient(to bottom,#000000,#000000,#000000,#000000,#000000)",
        duration: 2,
      })
      .to(secRef.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "500px 40%",
          end: "+=200px",
          scrub: 1,
        },
        backgroundImage:
          "linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255 / 0%), rgb(255 255 255 / 0%), rgb(255 255 255 / 0%), rgb(255 255 255 / 0%))",
        duration: 2,
      });
    gsap
      .timeline()
      .to(title.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "-200px 40%",
          end: "+=500px",
          scrub: 1,
        },
        y: 400,
        duration: 2,
      })
      .to(title.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "400px 40%",
          end: "+=100px",
          scrub: 1,
        },
        color: "#000",
        duration: 2,
      });
  };
  useLayoutEffect(() => {
    setwidth(window.innerWidth / 2);
  }, []);
  useEffect(() => {
    animatebg();
  }, []);

  return (
    <div className="section3" ref={secRef}>
      <h5 className="title" ref={title}>
        Project Samples
      </h5>
      <div className="bisflow" ref={bisflow}>
      <MacbookPro width={width}>
        <div className="screenContainer">
          <img src={bis} alt="bisflow" />
        </div>
      </MacbookPro>
      </div>
    </div>
  );
};

export default Step3;