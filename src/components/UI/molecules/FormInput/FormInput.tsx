import Asterisk from "../../atoms/Asterisk";
import Input, { type InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";
import Select, { type SelectProps } from "../../atoms/Select";
import ErrorMessage from "../ErrorMessage";

interface CommonProps {
  label: string;
  id: string;
  error?: string;
}

interface SelectInputDefinition extends CommonProps, Omit<SelectProps, "id"> {
  inputType: "select";
  options: Array<{ label: string; value: string }>;
}
interface TextInputDefinition extends CommonProps, Omit<InputProps, "id"> {
  inputType: "input";
}

export type FormInputProps = SelectInputDefinition | TextInputDefinition;

export default function FormInput(props: FormInputProps) {
  switch (props.inputType) {
    case "select":
      return (
        <div>
          <Label htmlFor={props.id}>
            {props.label}
            {props.required ? <Asterisk /> : null}
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
            {props.required ? <Asterisk /> : null}
          </Label>
          <Input {...props} invalid={!!props.error} />
          {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
        </div>
      );
  }
}
