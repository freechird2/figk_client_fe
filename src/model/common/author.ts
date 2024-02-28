export type SnsTypes = {
  blog: string;
  instagram: string;
  homepage: string;
};
export interface AuthorDataModel extends SnsTypes {
  id: number;
  nickname: string;

  introduction: string;
}
