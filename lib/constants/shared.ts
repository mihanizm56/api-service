export interface IParseTypesMap {
  json: 'json';
  blob: 'blob';
  text: 'text';
}

export interface ICacheMap {
  default: 'default';
  forceCache: 'force-cache';
  noCache: 'no-cache';
  noStore: 'no-store';
  onlyIfCached: 'only-if-cached';
  reload: 'reload';
}

export interface IRequestProtocolsMap {
  rest: 'rest';
  jsonRpc: 'jsonRpc';
  pureRest: 'pureRest';
}

export const cacheMap: ICacheMap = {
  default: 'default',
  forceCache: 'force-cache',
  noCache: 'no-cache',
  noStore: 'no-store',
  onlyIfCached: 'only-if-cached',
  reload: 'reload',
};

export const parseTypesMap: IParseTypesMap = {
  json: 'json',
  blob: 'blob',
  text: 'text',
};

// todo fix similar
export const requestProtocolsMap: IRequestProtocolsMap = {
  rest: 'rest',
  jsonRpc: 'jsonRpc',
  pureRest: 'pureRest',
};

export const TIMEOUT_ERROR_KEY = 'timeout-error';
export const NETWORK_ERROR_KEY = 'network-error';
export const NOT_FOUND_ERROR_KEY = 'not-found-error';
export const ABORTED_ERROR_TEXT_CHROME = 'The user aborted a request.';
export const ABORTED_ERROR_TEXT_MOZILLA = 'The operation was aborted. ';
export const ABORTED_ERROR_TEXT_SAFARI = 'Fetch is aborted';
export const ABORT_REQUEST_EVENT_NAME = 'abort_request_event';
