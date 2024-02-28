import { BooleanType, HashtagModel } from "model/common";

export interface TextFigkCardModel {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  authorName: string;
  isPublished: BooleanType;
  publishStatus: string;
  link: string;
  week: number;
  authorId: number;
  tag: HashtagModel;
}
