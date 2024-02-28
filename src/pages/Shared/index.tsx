import { PS } from "pages/Shared/index.page";
import { Outlet } from "react-router-dom";
/**
 * 라우터 분기
 * /shared/text === <SharedTextFigk />
 * /shared/art === <SharedArtFigk />
 */
const Shared = () => {
  return (
    <>
      <PS.MainContainer>
        <Outlet />
      </PS.MainContainer>
    </>
  );
};

export default Shared;
