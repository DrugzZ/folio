import React, { Component } from "react";
import { media, colors } from "../../../utility/utility.js";
import ArrowSVG from "../../../assets/media/baseline-chevron_right-24px.svg";
import PlayBtn from "../../../assets/media/baseline-play_circle_outline-24px.svg";
import gitIcon from "../../../assets/media/githubLogo.svg";
import linkIcon from "../../../assets/media/baseline-link-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

import CustomIcon from "./CustomIcon.js";

const AnimatedBlock = {
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    delay: 700
  },
  exit: {
    x: -100,
    y: 0,
    opacity: 0,
    delay: 300
  }
};

const AnimatedImage = {
  enter: {
    x: 0,
    opacity: 1,
    delay: 1000
  },
  exit: {
    x: -50,
    opacity: 0
  }
};

const AnimatedCtrls = {
  visible: {
    opacity: 1,
    transition: { duration: 200 }
  },
  hidden: {
    opacity: 0,
    transition: { duration: 200 }
  }
};

const ColorBlockContainer = styled(posed.div(AnimatedBlock))`
  background-color: ${colors.darkPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
  max-height: 65vh;
  min-height: 28rem;
  ${media.phone`
    align-self: center;
    min-height: auto;
    margin-bottom: 1rem;
    margin-left: 5vw;
    width: 80% !important;
  `};
  ${media.tablet`
    width: auto;
  `};
`;

const ProjectsNav = styled.div`
  align-self: flex-end;
  right: -1px;
  display: flex;
  position: absolute;
  background-color: ${colors.white};
`;

const Arrow = styled.div`
  transform: ${props => (props.left ? "rotate(180deg)" : "")};
  width: 4rem;
  height: 4rem;
  background: center / 50% no-repeat url(${ArrowSVG});
  &:hover {
    background-color: ${colors.grey};
  }
`;

const ImageContainer = styled(posed.div(AnimatedImage))`
  display: flex;
  align-items: center;
`;

const ImageBg = styled.figure`
  transform: translateX(-5vw);
  background: ${colors.orange};
  padding: 2rem;
  margin: 0;
  ${media.phone`
    padding: 1rem;
    margin: 2rem 0;
  `};
`;

const HeroImage = styled.img`
  max-height: 40vh;
  max-width: 28vw;
  ${media.desktop`
    max-height: 33vh;
  `};
  ${media.phone`
    max-width: 60vw;
    max-height: 30vh;
  `};
`;

const VideoCont = styled.div`
  position: relative;
  overflow: hidden;
  cursor: ${props => (props.paused ? "" : "pointer")};
`;

const VideoOverlay = styled(posed.div(AnimatedCtrls))`
  position: absolute;
  z-index: 5;
  background: linear-gradient(
    to bottom right,
    rgba(61, 56, 82, 1),
    rgba(251, 188, 97, 0.5),
    rgba(61, 56, 82, 1)
  );
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlayBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 6;
  opacity: ${props => (props.paused ? "100" : "0")};
`;

const ExtLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  z-index: 6;
  bottom: 0;
  padding: 0 0.3rem 0.3rem 0;
  opacity: ${props => (props.paused ? "100" : "0")};
`;

const HeroVideo = styled.video`
  max-height: 40vh;
  max-width: 28vw;
  filter: ${props => (props.blured ? "blur(5px)" : "")};
  }
  ${media.phone`
    max-width: 60vw;
    max-height: 30vh;
  `};
`;

export default class ColorBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false
    };
  }

  videoPause = () => {
    let player = document.getElementsByTagName("video")[0];
    if (!this.state.paused) {
      this.setState({ paused: true });
      player.pause();
      return;
    }
  };

  videoPlay = () => {
    let player = document.getElementsByTagName("video")[0];
    this.setState({ paused: false });
    player.play();
    return;
  };

  handleEnded = () => {
    this.setState({ paused: true });
  };

  delayPlay = e => {
    let player = e.target;
    setTimeout(function() {
      player.play();
    }, 1650);
  };

  render() {
    const { image, handlePrev, handleNext, mobile } = this.props;
    return (
      <ColorBlockContainer key="Block">
        <ImageContainer key="Image">
          <ImageBg>
            {typeof image === "object" ? (
              <VideoCont onClick={this.videoPause} paused={this.state.paused}>
                <PlayBtnWrap paused={this.state.paused}>
                  <CustomIcon
                    iconSrc={PlayBtn}
                    size="56px"
                    onClick={this.videoPlay}
                  />
                </PlayBtnWrap>
                <ExtLinks paused={this.state.paused}>
                  <CustomIcon iconSrc={gitIcon} size="28px" />
                  <CustomIcon iconSrc={linkIcon} size="28px" />
                </ExtLinks>
                <VideoOverlay pose={this.state.paused ? "visible" : "hidden"} />
                <HeroVideo
                  muted
                  preload="auto"
                  blured={this.state.paused}
                  onEnded={this.handleEnded}
                  onCanPlay={this.delayPlay}
                  playsInline
                >
                  <source type="video/webm" src={image.webm} />
                  <source type="video/mp4" src={image.mp4} />
                </HeroVideo>
              </VideoCont>
            ) : (
              <HeroImage src={image} alt="fancy" />
            )}
          </ImageBg>
        </ImageContainer>
        {mobile ? null : (
          <ProjectsNav>
            <Arrow left onClick={handlePrev} />
            <Arrow onClick={handleNext} />
          </ProjectsNav>
        )}
      </ColorBlockContainer>
    );
  }
}
