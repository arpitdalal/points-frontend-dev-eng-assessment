import Text, { type TextProps } from "../../atoms/Text";

export default function ErrorMessage({
  children,
  fontSize = "16px",
  ...props
}: Omit<TextProps, "color">) {
  return (
    <Text color="#ff0000" fontSize={fontSize} {...props}>
      {children}
    </Text>
  );
}
