import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { MacbookPro } from "react-device-mockups";
import bis from "../../assets/images/bis.png";
import "./step3.css";
interface IStep3 {}
const Step3: React.FC<IStep3> = (props) => {
  const [width, setwidth] = useState(500);
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  const secRef = useRef(null);
  const bisflow = useRef(null);
  const bizPay = useRef(null);
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
      })
      .to(title.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "400px 40%",
          end: "+=100px",
          scrub: 1,
        },
        position: "sticky",
        top: 0,
        duration: 2,
      });
  };
  const animateProjects1 = () => {
    gsap
      .timeline()
      .set(bisflow.current, {
        y: () => (window.innerWidth > 1500 ? 0 : window.innerHeight - 50),
        yPercent: () => (window.innerWidth > 1500 ? 80 : 0),
      })
      .from(bisflow.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "500px 40%",
          end: "+=400px",
          scrub: 1,
        },
        opacity: 0,
        xPercent: -100,
        duration: 2,
      })
      .to(bisflow.current, {
        scrollTrigger: {
          trigger: secRef.current,
          // markers: true,
          start: "700px 40%",
          end: "+=700px",
          scrub: 1,
          pin: true,
        },
        duration: 2,
      });
  };
  useLayoutEffect(() => {
    setwidth(window.innerWidth);
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
        <MacbookPro width={width > 1000 ? width / 2 : width - 35}>
          <div className="screenContainer">
            <img src={bis} alt="bisflow" onLoad={animateProjects1} />
          </div>
        </MacbookPro>
        <div className="bisflowText">
          <div className="detail">
            <span className="titleProject">BisFlow</span>
            <div className="stack">
              <span className="smallTitle">Technologies: </span>

              <span className="description">
                ReactJs, redux thunk, scss module, Cypress Testing
              </span>
            </div>
            <div className="info">
              <span className="smallTitle">About: </span>
              <span className="description">
                A consultancy application made for swedish startup.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
