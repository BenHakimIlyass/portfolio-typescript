import React from "react";
import styled from "styled-components";
import { AnimatedH3, Center, AnimatedP, Vstack, Container } from "../../";

const Contact = () => {
  return (
    <Center>
      <Wrapper>
        <Container>
          <div style={{ maxWidth: 860 }}>
            <Vstack space={3}>
              <AnimatedH3
                direction="center"
                style={{ zIndex: 1 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                Thank you for your visit. I will be pleased to have an
                opportunity to work with you.
              </AnimatedH3>
              <AnimatedP direction="center">
                I’m always looking for new challenges, so if you want to be in
                touch with me, feel free to contact me.
              </AnimatedP>
              <Center>
                <a href="/Resume.pdf" target="_blanc">
                  <Button>My resume</Button>
                </a>
              </Center>
            </Vstack>
          </div>
        </Container>
      </Wrapper>
    </Center>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;
const Button = styled.button`
  background-color: white;
  height: 40px;
  border: none;
  width: fit-content;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: 500;
  color: #102a43;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.4s;
  &:hover {
    box-shadow: 0px 0px 40px rgba(1, 5, 10, 0.57);
    transform: translate3d(0, -4px, 0);
  }
`;
export default Contact;
