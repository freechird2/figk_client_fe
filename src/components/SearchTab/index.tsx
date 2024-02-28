import { StyledSearchTab } from "components/SearchTab/index.styled";
import useCursor from "hook/useCursor";
interface SearchTabTypes {
  label: string;
  totalCount: number;
  onClick: () => void;
  isActive: boolean;
}
const SearchTab = ({
  label,
  totalCount,
  onClick,
  isActive,
}: SearchTabTypes) => {
  const { enter, leave } = useCursor();
  return (
    <StyledSearchTab
      onClick={onClick}
      onMouseEnter={() => enter("action")}
      onMouseLeave={leave}
    >
      <span className={`label font_work ${isActive ? "active" : ""}`}>
        {label}
      </span>
      <span className="totalCount">({totalCount})</span>
    </StyledSearchTab>
  );
};

export default SearchTab;
