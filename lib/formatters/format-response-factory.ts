import { ResponseFormatter, FormatResponseParamsType } from '@/types';
import { requestProtocolsMap, parseTypesMap } from '@/constants';
import { JSONRPCResponseFormatter } from './jsonrpc-response-formatter';
import { RestResponseFormatter } from './rest-response-formatter';
import { BlobResponseFormatter } from './blob-response-formatter';
import { TextResponseFormatter } from './text-response-formatter';
import { JSONRPCBatchResponseFormatter } from './jsonrpc-batch-response-formatter';
import { PureRestResponseFormatter } from './pure-rest-response-formatter';

export interface IFormatResponseFactory {
  createFormatter: (params: FormatResponseParamsType) => ResponseFormatter;
}

export class FormatResponseFactory implements IFormatResponseFactory {
  createFormatter = ({
    translateFunction,
    protocol,
    data,
    error,
    errorText = '',
    additionalErrors = null,
    result,
    jsonrpc = '',
    id = '',
    isErrorTextStraightToOutput,
    parseType,
    statusCode,
    isBatchRequest,
    body,
    responseSchema,
    responseHeaders,
    ignoreResponseIdCompare,
  }: FormatResponseParamsType): ResponseFormatter => {
    if (parseType === parseTypesMap.blob) {
      return new BlobResponseFormatter({ data, responseHeaders });
    }

    if (parseType === parseTypesMap.text) {
      return new TextResponseFormatter({ data, responseHeaders });
    }

    if (protocol === requestProtocolsMap.jsonRpc) {
      if (isBatchRequest && data instanceof Array) {
        return new JSONRPCBatchResponseFormatter({
          data,
          translateFunction,
          isErrorTextStraightToOutput,
          statusCode,
          body,
          responseSchema,
          responseHeaders,
          ignoreResponseIdCompare,
        });
      }

      return new JSONRPCResponseFormatter({
        // eslint-disable-next-line
        // @ts-ignore
        error,
        jsonrpc,
        id,
        result,
        translateFunction,
        isErrorTextStraightToOutput,
        statusCode,
        responseHeaders,
      });
    }

    if (protocol === requestProtocolsMap.pureRest) {
      return new PureRestResponseFormatter({
        isErrorTextStraightToOutput,
        statusCode,
        translateFunction,
        data,
        responseHeaders,
      });
    }

    return new RestResponseFormatter({
      data,
      error: Boolean(error), // because there may be no error (must be refactored)
      errorText,
      additionalErrors,
      translateFunction,
      isErrorTextStraightToOutput,
      statusCode,
      responseHeaders,
    });
  };
}
