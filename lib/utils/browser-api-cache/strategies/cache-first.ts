import { checkIfOldCache } from '../_utils/check-if-old-cache';
import {
  CacheRequestParamsType,
  CacheStateType,
  IRequestCache,
  IRequestCacheParamsType,
} from '../_types';
import { DebugCacheLogger } from '../_utils/debug-cache-logger';
import { openCache } from '../_utils/open-cache';
import { writeToCache } from '../_utils/write-to-cache';

export class CacheFirst implements IRequestCache {
  timestamp: number;

  storageCacheName: string;

  requestCacheKey: string;

  debugCacheLogger: DebugCacheLogger;

  constructor({
    timestamp,
    storageCacheName,
    requestCacheKey,
    debugCacheLogger,
  }: IRequestCacheParamsType) {
    this.timestamp = timestamp;
    this.storageCacheName = storageCacheName;
    this.requestCacheKey = requestCacheKey;
    this.debugCacheLogger = debugCacheLogger;
  }

  cacheRequest = async <ResponseType extends { error: boolean }>({
    request,
    onUpdateCache,
    expires = 0,
    disabledCache,
    expiresToDate,
    onRequestError,
    onCacheHit,
    onCacheMiss,
    quotaExceed,
    cacheState,
  }: CacheRequestParamsType<ResponseType> & {
    quotaExceed: boolean;
    cacheState: CacheStateType;
  }) => {
    this.debugCacheLogger.openLogsGroup({
      requestCacheKey: this.requestCacheKey,
    });

    this.debugCacheLogger.logParams({
      params: JSON.stringify({
        strategy: 'CacheFirst',
        expiresToDate,
        disabledCache,
        'api-expires': this.timestamp + expires,
        timestamp: this.timestamp,
        storageCacheName: this.storageCacheName,
        requestCacheKey: this.requestCacheKey,
      }),
    });

    const cache = await openCache(this.storageCacheName);

    // cache storage may be unable in untrusted origins (http) in mobile devices
    // https://stackoverflow.com/questions/53094298/window-caches-is-undefined-in-android-chrome-but-is-available-at-desktop-chrome
    if (disabledCache || !window.caches || !cache) {
      const response = await request();
      this.debugCacheLogger.logDisabledCache();
      this.debugCacheLogger.closeLogsGroup();

      return response;
    }

    const cacheMatch = await cache.match(`/${this.requestCacheKey}`);

    this.debugCacheLogger.logCacheIsMatched({
      cacheMatched: Boolean(cacheMatch),
    });

    const {
      old,
      cachedResponse,
      size = 0,
    } = await checkIfOldCache<ResponseType>({
      timestamp: this.timestamp,
      cacheMatch,
    });

    if (old && cacheMatch) {
      this.debugCacheLogger.logCacheIsExpired();
    }

    if (!old && cachedResponse) {
      this.debugCacheLogger.closeLogsGroup();

      onCacheHit?.({
        size,
        expires,
        cacheKey: this.requestCacheKey,
        cacheState,
      });

      return cachedResponse;
    }

    onCacheMiss?.({ cacheKey: this.requestCacheKey, cacheState });

    const networkResponse = await request();

    if (!networkResponse.error) {
      await writeToCache({
        cache,
        requestCacheKey: this.requestCacheKey,
        response: networkResponse,
        apiExpires: expiresToDate
          ? `${expiresToDate}`
          : `${this.timestamp + expires}`,
        apiTimestamp: `${this.timestamp}`,
        cachedResponse,
        old,
        onUpdateCache,
        debugCacheLogger: this.debugCacheLogger,
        strategy: 'CacheFirst',
        quotaExceed,
      });
    } else {
      onRequestError?.();
      this.debugCacheLogger.logNotUpdatedCache({
        response: JSON.stringify(networkResponse),
      });
    }

    this.debugCacheLogger.closeLogsGroup();
    return networkResponse;
  };
}
