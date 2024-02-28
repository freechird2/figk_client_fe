import Cursor from "components/Cursor";
import GlobalToast from "components/GlobalToast";
import { ScrollToTop } from "components/ScrollToTop";
import { nonAccessCopy } from "constant/common";
import useResizeVh from "hook/useResizeVh";
import useWidth from "hook/useWidth";
import Footer from "layout/GlobalFooter";
import GlobalHeader from "layout/GlobalHeader";
import GlobalMobileHeader from "layout/GlobalMobileHeader";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CommonStyle } from "theme/commonStyle";
import { GlobalFont } from "theme/globalFont";
import { GlobalStyle } from "theme/globalStyle";
import RouteChangeTracker from "util/analytics";
const Container = styled.div`
  flex: 1;
`;
export const Root = () => {
  const { media } = useWidth();
  return (
    <>
      <GlobalToast />
      {media.tabletH ? (
        <GlobalMobileHeader />
      ) : (
        <>
          <GlobalHeader />
        </>
      )}
      <Cursor />
      <ScrollToTop />
      <Container>
        <RouteChangeTracker />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

const App = () => {
  useResizeVh();

  useEffect(() => {
    document.addEventListener("copy", nonAccessCopy);
  }, []);
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <CommonStyle />
    </>
  );
};

export default App;
