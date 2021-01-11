import { parseTypesMap } from '@/constants/shared';
import { ProgressOptionsType, ResponseParser } from '@/types';
import { isNode } from '../is-node';
import { BlobParser } from './blob-parse';
import { JsonParser } from './json-parser';
import { ProgressParser } from './progress-parser';
import { TextParser } from './text-parser';

type GetParserOptions = {
  parseType?: keyof typeof parseTypesMap;
  isResponseStatusSuccess: boolean;
  isNotFound: boolean;
  progressOptions?: ProgressOptionsType;
};

interface IResponseDataParserFactory {
  getParser: (options: GetParserOptions) => ResponseParser;
}

export class ResponseDataParserFactory implements IResponseDataParserFactory {
  getParser = ({
    parseType,
    isResponseStatusSuccess,
    isNotFound,
    progressOptions,
  }: GetParserOptions): ResponseParser => {
    // if response is not success - then parse the response like json
    // because backend must send an error it with JSON
    if (isNotFound || !isResponseStatusSuccess) {
      return new JsonParser();
    }

    // progress not run on nodejs yet
    if (progressOptions && parseType && !isNode()) {
      return new ProgressParser();
    }

    if (parseType === parseTypesMap.json) {
      return new JsonParser();
    }

    if (parseType === parseTypesMap.blob) {
      return new BlobParser();
    }

    if (parseType === parseTypesMap.text) {
      return new TextParser();
    }

    return new JsonParser();
  };
}
