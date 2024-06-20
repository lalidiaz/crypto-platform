import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0rem 0rem 0.5rem 1rem;

  &:hover {
    font-weight: bold;
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

export default function Back() {
  const navigate = useNavigate();

  return (
    <BackBtn onClick={() => navigate(-1)}>
      <Icon>
        <FaArrowLeft />
      </Icon>
      Back
    </BackBtn>
  );
}
