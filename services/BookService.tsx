import {
  ErrorHanlder as ErrorHandler,
  HttpMethod,
  myFetch,
} from "./baseService";

export interface items {
  volumeInfo: volumeInfo;
}
export interface volumeInfo {
  title: string;
  authors: Array<string>;
  description: string;
  averageRating: number;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
}
export interface bookSelected {
  img: string;
  title: string;
  authors: string;
  description: string;
}

export interface reviews {
  nameUser: string;
  nameReview: string;
}
export type GeneralResponse = {
  kind: string;
  totalItems: number;
  items: items[];
};

type GeneralResponseHandler = (response: GeneralResponse) => void;

export const getSearchBooks = async (
  book: string,
  resultHandler: GeneralResponseHandler,
  errorHandler: ErrorHandler
) =>
  myFetch<GeneralResponse>(
    `books/v1/volumes?q=${book}`,
    "",
    resultHandler,
    errorHandler,
    HttpMethod.GET
  );
