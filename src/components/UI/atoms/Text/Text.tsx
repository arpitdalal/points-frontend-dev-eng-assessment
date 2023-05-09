import styled from "styled-components";

export interface TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  margin?: string;
}

const StyledText = styled.p<TextProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  line-height: ${({ lineHeight = "1.5" }) => lineHeight};
  margin: ${({ margin = "4px 0 0 0" }) => margin};
`;

export default function Text({ children, ...props }: TextProps) {
  return <StyledText {...props}>{children}</StyledText>;
}
