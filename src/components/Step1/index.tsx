import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "html5-device-mockups/dist/device-mockups.min.css";
import { MacbookPro, IPhone7 } from "react-device-mockups";
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

  const writeText = (w: number) => {
    gsap
      .timeline()
      .to(textRef.current, {
        duration: 1,
        text: {
          value: "> Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... ",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: {
          value: "> Loading ... |",
        },
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1.5,
        text: "> Wake Up, NEO ...",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> Wake Up, NEO ...|",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> Wake Up, NEO ... ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> Wake Up, NEO ...|",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> Wake Up, NEO ... ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> Wake Up, NEO ...|",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text: "> Wake Up, NEO ... ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1.5,
        text: w < 1300 ? "> Scroll Down ❗" : "> about me: ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 20,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. <br/> <br/> > Scroll down ❗ ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. <br/> <br/> > Scroll down ❗ |",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. <br/> <br/> > Scroll down ❗ ",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 0.5,
        text:
          w < 1300
            ? "> Scroll Down ❗"
            : "> about me: Innovative solution seeker, Excited to work in a group as a web developer. I am ambitious, creative and highly eager to learn. Proficient in React js, jQuery, JavaScript and Passionate about libraries and frameworks specially React native. <br/> <br/> > Scroll down ❗ |",
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
        scale: 3,
        yPercent: 100,
        duration: 2,
      })
      .to(macRef.current, {
        scrollTrigger: {
          trigger: macRef.current,
          start: "200% 90%",
          end: "+=200px",
          scrub: 1,
        },
        opacity: 0,
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
        opacity: 0,
        duration: 2,
      });
  };

  useEffect(() => {
    setTimeout(() => {
      writeText(window.innerWidth);
    }, 1000);

    scroll();
  }, []);

  return (
    <div className="section1" ref={macRef}>
      <h2>Rouzbeh Hatamy</h2>
      {width * 2 > 1300 ? (
        <MacbookPro width={width}>
          <div className="screenWrapper">
            <h4 ref={textRef} className="first-text"></h4>
          </div>
        </MacbookPro>
      ) : (
        <IPhone7 width={width}>
          <div className="screenWrapper">
            <h4 ref={textRef} className="first-text"></h4>
          </div>
        </IPhone7>
      )}
    </div>
  );
};

export default Step1;
