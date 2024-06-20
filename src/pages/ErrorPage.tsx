import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  flexd-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

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
