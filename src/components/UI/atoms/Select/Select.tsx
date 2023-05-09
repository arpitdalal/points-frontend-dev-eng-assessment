import styled from "styled-components";

export interface Option {
  label: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
}
export interface SelectProps extends React.ComponentPropsWithRef<"select"> {
  options: Array<Option>;
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  invalid?: boolean;
}

const StyledSelect = styled.select<SelectProps>`
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

export default function Select(props: SelectProps) {
  return (
    <StyledSelect {...props}>
      {props.options.map(({ label, ...option }) => (
        <option key={label} {...option}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
}
