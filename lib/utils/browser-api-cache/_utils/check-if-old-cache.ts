type ParamsType = {
  cacheMatch?: Response;
  timestamp: number;
};

type OutputType<ResponseType> = {
  old: boolean;
  cachedResponse?: ResponseType;
  size?: number;
};

export const checkIfOldCache = async <ResponseType>({
  timestamp,
  cacheMatch,
}: ParamsType): Promise<OutputType<ResponseType>> => {
  try {
    if (!cacheMatch) {
      return {
        old: true,
      };
    }

    const cachedTimestamp = Number(cacheMatch.headers.get('api-expires')) || 0;

    const cachedValue = await cacheMatch.json();

    const size = encodeURI(JSON.stringify(cachedValue)).length - 1;

    if (timestamp - cachedTimestamp > 0) {
      return {
        old: true,
        cachedResponse: cachedValue,
      };
    }

    return {
      old: false,
      cachedResponse: cachedValue,
      size,
    };
  } catch (error) {
    console.error('Error in checkIfOldCache', error);

    return {
      old: true,
    };
  }
};
