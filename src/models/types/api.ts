export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS';

export type QueryParams = Record<
  string,
  string | number | boolean | undefined | null
>;

export type ApiHeaders = Record<string, string>;

