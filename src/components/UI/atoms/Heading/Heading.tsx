import styled from "styled-components";

export interface HeadingProps extends React.ComponentPropsWithRef<"h1"> {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  margin?: string;
  textAlign?: "left" | "center" | "right";
}
type StyledHeadingProps = Pick<HeadingProps, "color" | "margin" | "textAlign">;

const StyledHeading1 = styled.h1<StyledHeadingProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  margin: ${({ margin = "0" }) => margin};
  font-size: 3rem;
  line-height: 1;
  text-align: ${({ textAlign = "center" }) => textAlign};
`;
const StyledHeading2 = styled.h2<StyledHeadingProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  margin: ${({ margin = "0" }) => margin};
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
const StyledHeading3 = styled.h3<StyledHeadingProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  margin: ${({ margin = "0" }) => margin};
  font-size: 1.875rem;
  line-height: 2.25rem;
  text-align: ${({ textAlign = "center" }) => textAlign};
`;
const StyledHeading4 = styled.h4<StyledHeadingProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  margin: ${({ margin = "0" }) => margin};
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: ${({ textAlign = "center" }) => textAlign};
`;
const StyledHeading5 = styled.h5<StyledHeadingProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  margin: ${({ margin = "0" }) => margin};
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: ${({ textAlign = "center" }) => textAlign};
`;
const StyledHeading6 = styled.h6<StyledHeadingProps>`
  color: ${({ color, theme }) => color || theme.colors.text};
  margin: ${({ margin = "0" }) => margin};
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: ${({ textAlign = "center" }) => textAlign};
`;

export default function Heading({ children, type, ...props }: HeadingProps) {
  switch (type) {
    case "h2":
      return <StyledHeading2 {...props}>{children}</StyledHeading2>;
    case "h3":
      return <StyledHeading3 {...props}>{children}</StyledHeading3>;
    case "h4":
      return <StyledHeading4 {...props}>{children}</StyledHeading4>;
    case "h5":
      return <StyledHeading5 {...props}>{children}</StyledHeading5>;
    case "h6":
      return <StyledHeading6 {...props}>{children}</StyledHeading6>;
    default:
      return <StyledHeading1 {...props}>{children}</StyledHeading1>;
  }
}
