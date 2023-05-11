import styled, { keyframes } from "styled-components";

export interface LoadingSpinnerProps {
  color?: string;
  size?: string;
}

const motion = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoadingSpinnerWrapper = styled.div<LoadingSpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size = "20px" }) => `${size}`};
  height: ${({ size = "20px" }) => `${size}`};
`;

const StyledLoadingSpinner = styled.div<LoadingSpinnerProps>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${({ size = "20px" }) => `${size}`};
  height: ${({ size = "20px" }) => `${size}`};
  border: ${({ size = "20px" }) =>
      Number(size.replace("px", "")) >= 50 ? "6px" : "3px"}
    solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${motion} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ color = "currentColor" }) => color} transparent transparent
    transparent;

  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return (
    <StyledLoadingSpinnerWrapper {...props} data-testid="loading-spinner">
      <StyledLoadingSpinner {...props} />
    </StyledLoadingSpinnerWrapper>
  );
}
