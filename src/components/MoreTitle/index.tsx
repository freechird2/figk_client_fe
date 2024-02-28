import { S } from "components/MoreTitle/index.styled";
import useCursor from "hook/useCursor";
interface IMoreTitle {
  children: React.ReactNode;
  /** <h1><strong>{strong}</strong>{title</h1> */
  onClickMore: () => void;
}
const MoreTitle = ({ children, onClickMore }: IMoreTitle) => {
  const { enter, leave } = useCursor();
  return (
    <S.Container>
      <h1>{children}</h1>
      <button
        type="button"
        onClick={onClickMore}
        onMouseEnter={() => enter("action")}
        onMouseLeave={leave}
      >
        more
      </button>
    </S.Container>
  );
};

export default MoreTitle;
