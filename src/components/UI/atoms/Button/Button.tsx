import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner/";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  loading?: boolean;
}

const StyleButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid
    ${({ borderColor, theme }) => borderColor || theme.colors.primary};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.primary};
  border-radius: ${({ borderRadius = "4px" }) => borderRadius};
  padding: ${({ padding = "0.8rem 1.5rem" }) => padding};
  margin: ${({ margin = "0" }) => margin};
  width: 100%;
  transition: 0.125s all ease-in-out;
  color: ${({ color, theme }) => color || theme.colors.bg};

  :hover:not(:disabled) {
    cursor: pointer;
    background-color: ${({ hoverBackgroundColor, theme }) =>
      hoverBackgroundColor || theme.colors.secondary};
    border-color: ${({ hoverBorderColor, theme }) =>
      hoverBorderColor || theme.colors.secondary};
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export default function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <StyleButton {...rest} disabled={loading}>
      {loading ? <LoadingSpinner size="20px" /> : children}
    </StyleButton>
  );
}
