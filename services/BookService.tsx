import {
  ErrorHanlder as ErrorHandler,
  HttpMethod,
  myFetch,
} from "./baseService";

export interface items {
  volumeInfo: volumeInfo;
}
interface volumeInfo {
  title: string;
  authors: Array<string>;
  description: string;
  averageRating: number;
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
