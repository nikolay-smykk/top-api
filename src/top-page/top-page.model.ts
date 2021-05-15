export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  _id: string;
  firstLevel: TopLevelCategory;
  secondLevel: string;
  title: string;
  category: string;
  hh?: {
    countNumber: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    descrition: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
