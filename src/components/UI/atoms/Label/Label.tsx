import styled from "styled-components";

export interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  marginBottom?: string;
}

const StyledLabel = styled.label<LabelProps>`
  display: block;
  margin-bottom: ${({ marginBottom = "8px" }) => marginBottom};
`;

export default function Label({ children, htmlFor }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
}
