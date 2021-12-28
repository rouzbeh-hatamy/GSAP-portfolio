import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./step2.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
interface IStep2 {}
const Step2: React.FC<IStep2> = (props) => {
  const myImages = [img1, img2, img4, img5];
  const topText = useRef(null);
  const picRef1 = useRef(null);
  const picRef2= useRef(null);
  const picRef3 = useRef(null);
  const picRef4 = useRef(null);
  const bottomText = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const texts = () => {
    gsap
      .timeline()
      .from(topText.current, {
        scrollTrigger: {
          trigger: topText.current,
          // markers: true,
          start: "-500px 50%",
          end: "+=500px",
          scrub: 1,
        },
        x: -800,

        duration: 2,
      })
      .from(bottomText.current, {
        scrollTrigger: {
          trigger: bottomText.current,
          // markers: true,
          start: "-600px 50%",
          end: "+=400px",
          scrub: 1,
        },
        x: 800,

        duration: 2,
      })
      .to(topText.current, {
        scrollTrigger: {
          trigger: topText.current,
          // markers: true,
          start: "-500px 50%",
          end: "+=500px",
          scrub: 1,
        },
        x: 400,
        duration: 2,
      })
      .to(bottomText.current, {
        scrollTrigger: {
          trigger: bottomText.current,
          // markers: true,
          start: "-600px 50%",
          end: "+=400px",
          scrub: 1,
        },
        x: -400,
        duration: 2,
      });
  };
  const myPics = () => {
    gsap.timeline().from(picRef1.current, {
      scrollTrigger: {
        trigger: picRef1.current,
        markers: true,
        start: "-500px 50%",
        end: "+=500px",
        scrub: 1,
      },
      x: 1100,

      duration: 2,
    }).from(picRef2.current, {
      scrollTrigger: {
        trigger: picRef2.current,
        markers: true,
        start: "-500px 50%",
        end: "+=500px",
        scrub: 1,
      },
      x: 800,

      duration: 2,
    }).from(picRef3.current, {
      scrollTrigger: {
        trigger: picRef3.current,
        markers: true,
        start: "-500px 50%",
        end: "+=500px",
        scrub: 1,
      },
      x: -500,

      duration: 2,
    }).from(picRef4.current, {
      scrollTrigger: {
        trigger: picRef4.current,
        markers: true,
        start: "-500px 50%",
        end: "+=500px",
        scrub: 1,
      },
      x: -1100,

      duration: 2,
    })
  };

  useEffect(() => {
    myPics();
    texts();
  }, []);
  return (
    <div className="section2">
      <h2 ref={topText} className="top-text">
        Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh
        Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy
        Rouzbeh Hatamy Rouzbeh Hatamy
      </h2>
      <div className="myImages">
        <img src={img1} alt="my-image" className="my-image" ref={picRef1} />
        <img src={img2} alt="my-image" className="my-image" ref={picRef2} />
        <img src={img4} alt="my-image" className="my-image" ref={picRef3} />
        <img src={img5} alt="my-image" className="my-image" ref={picRef4} />
      </div>
      <h2 ref={bottomText} className="top-text">
        Front End Engineer Front End Developer Team Leader React Developer Front
        End Engineer Front End Developer Team Leader React Developer Front End
        Engineer Front End Developer Team Leader React Developer Front End
        Engineer Front End Developer Team Leader React Developer
      </h2>
    </div>
  );
};

export default Step2;
