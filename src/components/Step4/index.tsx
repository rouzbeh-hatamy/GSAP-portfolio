import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { MacbookPro } from "react-device-mockups";
import bizPage from "../../assets/images/bizPage.png";
import "./step4.css";
interface IStep4 {}
const Step4: React.FC<IStep4> = (props) => {
  const [width, setwidth] = useState(500);
  gsap.registerPlugin(ScrollTrigger);
  const secRef = useRef(null);
  const bizPay = useRef(null);

  const animateProjects1 = () => {
    gsap
      .timeline()
      
      .from(bizPay.current, {
        scrollTrigger: {
          trigger: secRef.current,
        //   markers: true,
          start: "-400px 40%",
          end: "+=400px",
          scrub: 1,
        },
        opacity: 0,
        xPercent: 100,
        duration: 2,
      })
      .to(bizPay.current, {
        scrollTrigger: {
          trigger: secRef.current,
          markers: true,
          start: "200px 40%",
          end: "+=1000px",
          scrub: 1,
          pin: true,
        },
        duration: 2,
      });
  };
  useLayoutEffect(() => {
    setwidth(window.innerWidth / 2);
  }, []);

  return (
    <div className="section4" ref={secRef}>
      <div className="bizPay" ref={bizPay}>
        <div className="bizPayText">
          <div className="detail">
            <span className="titleProject">bizPay</span>
            <div className="stack">
              <span className="smallTitle">Technologies: </span>

              <span className="description">
                ReactJs, redux saga, Atomize, parallax,Atomic Design
              </span>
            </div>
            <div className="info">
              <span className="smallTitle">About: </span>
              <span className="description">
                A payment assistant application made for Biz company
              </span>
            </div>
          </div>
        </div>
        <MacbookPro width={width}>
          <div className="screenContainer">
            <img src={bizPage} alt="bizPay" onLoad={animateProjects1} />
          </div>
        </MacbookPro>
      </div>
    </div>
  );
};

export default Step4;
