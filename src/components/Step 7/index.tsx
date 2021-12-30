import React from "react";
import cv from "./cv.pdf";
import "./step7.css";
interface IStep7 {}
const Step7: React.FC<IStep7> = (props) => {
  return (
    <div className="section7">
      <div className="containerContact">
        <span>Download full resume</span>
        <a
          className="download"
          href="https://drive.google.com/file/d/10WU6lo9CQoN1j6gumrwH9dgYR_KGPV6_/view?usp=sharing"
          download="Rouzbeh_hatamy_CV"
        >
          Download
        </a>
        <span>or</span>
        <a className="contact" href="mailto: roozbeh.hatamy@gmail.com">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Step7;
