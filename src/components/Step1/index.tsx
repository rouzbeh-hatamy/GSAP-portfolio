import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { MacbookPro } from "react-device-mockups";
import "./section1.css";
interface IStep1 {}
const Step1: React.FC<IStep1> = (props) => {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  const [width, setwidth] = useState(500);
  const textRef = useRef(null);
  const macRef = useRef(null);
  useLayoutEffect(() => {
    setwidth(window.innerWidth / 2);
  }, []);

  const writeText = () => {
    gsap
      .timeline()
      .to(textRef.current, {
        duration: 1,
        text: {
          value: ">- Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: ">- Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1.5,
        text: ">- Wake Up, NEO ...",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- Wake Up, NEO ...|",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- Wake Up, NEO ... ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- Wake Up, NEO ...|",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- Wake Up, NEO ... ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- Wake Up, NEO ...|",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: ">- Wake Up, NEO ... ",
        padSpace: true,
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        text: {
          value: ">- Scroll down ❗ ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        text: {
          value: ">- Scroll down  ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        text: {
          value: ">- Scroll down ❗ ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        text: {
          value: ">- Scroll down  ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        text: {
          value: ">- Scroll down ❗ ",
        },
        ease: "none",
      });
  };
  const scroll = () => {
    gsap
      .timeline()
      .to(macRef.current, {
        scrollTrigger: {
          trigger: macRef.current,
          // markers: true,
          start: "top top",
          end: "+=400px",
          scrub: 1,
        },
        width: 200,
        y: 400,
        duration: 2,
      })
      .to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          // markers: true,
          start: "top top",
          end: "+=400px",
          scrub: 1,
        },
        fontSize: "12px",
        duration: 2,
      });
  };
  useEffect(() => {
    writeText();
    scroll();
  }, []);
  
  return (
    <div className="section1" ref={macRef}>
      <MacbookPro width={width}>
        <div className="screenWrapper">
          <h2 ref={textRef} className="first-text"></h2>
        </div>
      </MacbookPro>
    </div>
  );
};

export default Step1;