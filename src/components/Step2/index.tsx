import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./step2.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import atomic from "../../assets/images/atomic.png";
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import docker from "../../assets/images/docker.png";
import express from "../../assets/images/express.png";
import framer from "../../assets/images/framer.png";
import git from "../../assets/images/git.png";
import graph from "../../assets/images/graph.png";
import gsapPic from "../../assets/images/gsap.png";
import html5 from "../../assets/images/html5.png";
import js from "../../assets/images/js.png";
import lottie from "../../assets/images/lottie.png";
import material from "../../assets/images/material.png";
import mongo from "../../assets/images/mongo.png";
import next from "../../assets/images/next.png";
import node from "../../assets/images/node.png";
import pwa from "../../assets/images/pwa.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import sass from "../../assets/images/sass.png";
import socket from "../../assets/images/socket.png";
import tailwind from "../../assets/images/tailwind.png";
import typescript from "../../assets/images/typescript.png";
import webrtc from "../../assets/images/webrtc.png";
interface IStep2 {}
const Step2: React.FC<IStep2> = (props) => {
  const skills = [
    atomic,
    bootstrap,
    css,
    docker,
    express,
    framer,
    git,
    graph,
    gsapPic,
    html5,
    js,
    lottie,
    material,
  ];
  const skills2 = [
    mongo,
    next,
    node,
    pwa,
    react,
    redux,
    sass,
    socket,
    tailwind,
    typescript,
    webrtc,
  ];
  const section = useRef(null);
  const topText = useRef(null);
  const picRef1 = useRef(null);
  const picRef2 = useRef(null);
  const picRef3 = useRef(null);
  const picRef4 = useRef(null);
  const SkillsRef = useRef(null);
  const SkillsRef2 = useRef(null);
  const bottomText = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const texts = () => {
    gsap
      .timeline()
      .to(section.current, {
        scrollTrigger: {
          trigger: section.current,
          start: "-200px 50%",
          end: "+=500px",
          scrub: 1,
        },
        backgroundColor: "#000",
        duration: 2,
      })
      .from(topText.current, {
        scrollTrigger: {
          trigger: topText.current,

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

          start: "-500px 50%",
          end: "+=500px",
          scrub: 1,
        },
        x: 600,
        duration: 2,
      })
      .to(bottomText.current, {
        scrollTrigger: {
          trigger: bottomText.current,

          start: "-600px 50%",
          end: "+=400px",
          scrub: 1,
        },
        x: -400,
        duration: 2,
      })
      .from(SkillsRef.current, {
        scrollTrigger: {
          trigger: SkillsRef.current,

          start: "-500px 50%",
          end: "+=500px",
          scrub: 1,
        },
        x: -800,
        duration: 2,
      })
      .from(SkillsRef2.current, {
        scrollTrigger: {
          trigger: SkillsRef2.current,

          start: "-500px 50%",
          end: "+=500px",
          scrub: 1,
        },
        x: 800,
        duration: 2,
      });
  };
  const myPics = () => {
    gsap.from(picRef1.current, {
      scrollTrigger: {
        trigger: picRef1.current,
        start: "-400px 40%",
        end: "+=500px 20%",
        scrub: 1,
      },
      xPercent: 200,
      opacity: 0,
      duration: 2,
    });
    gsap.from(picRef2.current, {
      scrollTrigger: {
        trigger: picRef2.current,
        start: "-400px 40%",
        end: "+=500px 20%",
        scrub: 1,
      },
      xPercent: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.from(picRef3.current, {
      scrollTrigger: {
        trigger: picRef3.current,
        start: "-400px 40%",
        end: "+=500px 20%",
        scrub: 1,
      },
      xPercent: -200,
      opacity: 0,
      duration: 2,
    });
    gsap.from(picRef4.current, {
      scrollTrigger: {
        trigger: picRef4.current,
        start: "-400px 40%",
        end: "+=500px 20%",
        scrub: 1,
      },
      xPercent: -500,
      opacity: 0,
      duration: 2,
    });
  };

  useEffect(() => {
    texts();
  }, []);
  return (
    <div className="section2" ref={section}>
      <h2 ref={topText} className="top-text">
        Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh
        Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy
        Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy Rouzbeh Hatamy
        Rouzbeh Hatamy Rouzbeh Hatamy
      </h2>
      <div className="myImages">
        <img src={img1} alt="my-image" className="my-image" ref={picRef1} />
        <img src={img2} alt="my-image" className="my-image" ref={picRef2} />
        <img src={img4} alt="my-image" className="my-image" ref={picRef3} />
        <img
          src={img5}
          alt="my-image"
          className="my-image"
          ref={picRef4}
          onLoad={() => myPics()}
        />
      </div>
      <h2 ref={bottomText} className="top-text">
        Front End Engineer Front End Developer Team Leader React Developer Front
        End Engineer Front End Developer Team Leader React Developer Front End
        Engineer Front End Developer
      </h2>
      <div className="skills">
        {skills.map((item, index) => (
          <img src={item} alt="skill" className="skills-image" key={index} />
        ))}
      </div>
      <h2 ref={SkillsRef} className="top-text">
        Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
        Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
        Skills Skills Skills Skills Skills Skills Skills Skills
      </h2>
      <div className="skills">
        {skills2.map((item, index) => (
          <img src={item} alt="skill" className="skills-image" key={index} />
        ))}
      </div>
      <h2 ref={SkillsRef2} className="top-text">
        Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
        Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills
        Skills Skills Skills Skills Skills Skills Skills Skills
      </h2>
    </div>
  );
};

export default Step2;
