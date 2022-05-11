import GrClose from "react-icons/gr";
import SlideButton from "../SlideButton";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.cBlack.alpha(0.7).toString()};
  width: 100%;
  height: 100%;
  z-index: 99999;
`;
Overlay.displayName = "Overlay";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
`;
Container.displayName = "Container";

export const LeftBtn = styled(SlideButton)`
  position: fixed;
  top: 17rem;
  left: 1.25rem;
`;
LeftBtn.displayName = "LeftBtn";

export const RightBtn = styled(SlideButton)`
  position: fixed;
  top: 17rem;
  right: 1.25rem;
`;
RightBtn.displayName = "RightBtn";

export const VideoContainer = styled.div`
  position: fixed;
  top: 3.5rem;
  right: 12.75rem;
  width: 70%;
  height: 90%;
  background-color: transparent;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
VideoContainer.displayName = "VideoContainer";

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  max-height: 720px;
  background-color: transparent;
`;
Frame.displayName = "Frame";

export const CloseBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  cursor: pointer;
  width: 42px;
  height: 42px;
  right: 4%;
  top: 5%;

  svg,
  path {
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.cAlmostWhite.alpha(0.75).toString()};
    fill: ${({ theme }) => theme.cAlmostWhite.alpha(0.75).toString()};
    stroke: ${({ theme }) => theme.cAlmostWhite.alpha(0.75).toString()};
  }

  :hover {
    svg,
    path {
      color: ${({ theme }) => theme.cAlmostWhite.alpha(1).toString()};
      fill: ${({ theme }) => theme.cAlmostWhite.alpha(1).toString()};
      stroke: ${({ theme }) => theme.cAlmostWhite.alpha(1).toString()};
    }
  }
`;
CloseBtn.displayName = "CloseBtn";
