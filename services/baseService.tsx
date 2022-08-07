/* 
   Autor: Victor Gálvez
   Comentario: @Escogí fetch por que es nativo de JS pero también he usado axios con interceptors.
   Comentario: @Usualmente variables globales suelo ponerlo en variables de configuración o environments.

*/

import { GeneralResponse } from "./BookService";

export const API_URL = "https://www.googleapis.com/";
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

export type ErrorHanlder = (error: string) => void;

export async function myFetch<T extends GeneralResponse>(
  endpoint: string,
  pay: string,
  resultHandler: (response: T) => void,
  errorHandler: ErrorHanlder,
  method = HttpMethod.POST,
  aditionalHeaders?: { [key: string]: string }
) {
  const url = API_URL + endpoint;
  const body = {};

  const request = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...aditionalHeaders,
    },
    ...body,
  };

  return fetch(url, request)
    .then((response) => {
      if (response.status >= 500) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((data: T) => {
      // if (data.statusCode && data.statusCode >= 400) {
      //   throw new Error(data.description || "Bad response from server");
      // }
      resultHandler(data);
    })
    .catch((error: Error) => errorHandler(error.message));
}
