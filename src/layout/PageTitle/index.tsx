import { S } from "layout/PageTitle/index.styled";

interface IPageTitle {
  title?: string;
  children?: React.ReactNode;
}

const PageTitle = ({ title, children }: IPageTitle) => {
  return (
    <S.Container>
      <div className="contents">
        {title && <span className="title font_work">{title}</span>}
        {children}
      </div>
    </S.Container>
  );
};

export default PageTitle;
