import styled from "styled-components";

const StyledAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 4px;
`;
export default function Asterisk() {
  return <StyledAsterisk>*</StyledAsterisk>;
}
