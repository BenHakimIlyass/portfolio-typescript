import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Hstack } from "../";

import Github from "./github.svg";
import Twitter from "./twitter.svg";
import Mail from "./mail.svg";
import Linkedin from "./linkedIn.svg";

const SocialMedia = () => {
  return (
    <Wrapper>
      <Hstack space={2}>
        {data.map(({ src, alt }, key) => (
          <motion.img
            src={src}
            key={key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            alt={alt}
            draggable={false}
          />
        ))}
      </Hstack>
    </Wrapper>
  );
};
const data = [
  { src: Github, alt: "Github" },
  { src: Twitter, alt: "Twitter" },
  { src: Mail, alt: "Email" },
  { src: Linkedin, alt: "LinkedIn" }
];
const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  padding-top: 24px;
  box-sizing: border-box;
  height: 60px;
  z-index: 100;
  left: 10%;
  width: 100%;
  background-image: linear-gradient(0deg, #282a36 0%, rgba(40, 42, 54, 0) 100%);
`;

export default SocialMedia;
