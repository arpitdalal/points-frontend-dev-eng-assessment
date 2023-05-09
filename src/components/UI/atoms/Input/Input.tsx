import styled from "styled-components";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  invalid?: boolean;
}

const StyledInput = styled.input<InputProps>`
  border: 1px solid
    ${({ borderColor, theme, invalid }) =>
      invalid ? theme.colors.error : borderColor || theme.colors.primary};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.bg};
  border-radius: ${({ borderRadius = "4px" }) => borderRadius};
  padding: ${({ padding = "8px" }) => padding};
  margin: ${({ margin = "0" }) => margin};
  width: 100%;

  :focus {
    outline: 1px solid
      ${({ borderColor, theme, invalid }) =>
        invalid ? theme.colors.error : borderColor || theme.colors.primary};
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
