import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: red;
`;

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </ErrorWrapper>
  );
}
