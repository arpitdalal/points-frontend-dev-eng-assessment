import styled from "styled-components";
import Input, { type InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";
import Select, { type SelectProps } from "../../atoms/Select";
import ErrorMessage from "../ErrorMessage";

interface CommonProps {
  label: string;
  id: string;
  error?: string;
}

interface SelectInputDefinition
  extends CommonProps,
    Omit<SelectProps, "id" | "invalid"> {
  inputType: "select";
  options: Array<{ label: string; value: string }>;
}
interface TextInputDefinition
  extends CommonProps,
    Omit<InputProps, "id" | "invalid"> {
  inputType: "input";
}

export type FormInputProps = SelectInputDefinition | TextInputDefinition;

const StyledAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 4px;
`;

export default function FormInput(props: FormInputProps) {
  switch (props.inputType) {
    case "select":
      return (
        <div>
          <Label htmlFor={props.id}>
            {props.label}
            {props.required ? <StyledAsterisk>*</StyledAsterisk> : null}
          </Label>
          <Select {...props} invalid={!!props.error}>
            {props.options.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
        </div>
      );
    default:
      return (
        <div>
          <Label htmlFor={props.id}>
            {props.label}
            {props.required ? <StyledAsterisk>*</StyledAsterisk> : null}
          </Label>
          <Input {...props} invalid={!!props.error} />
          {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
        </div>
      );
  }
}
