/** @jsxImportSource theme-ui */

import React from "react";
import ThemeWrapper from "./ThemeWrapper";
import Container from "./Containter";

const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => (
  <div>
    <h1>Theme UI Host</h1>
    <ThemeWrapper>
      <Container>
        <React.Suspense fallback="Loading Button">
          <RemoteButton>Hello</RemoteButton>
        </React.Suspense>
      </Container>
    </ThemeWrapper>
  </div>
);

export default App;
