# Caching behavior {id="ossm-threescale-caching_{{ context }}"}
Responses from 3scale System APIs are cached by default within the adapter. Entries will be purged from the cache when they become older than the `cacheTTLSeconds` value. Also by default, automatic refreshing of cached entries will be attempted seconds before they expire, based on the `cacheRefreshSeconds` value. You can disable automatic refreshing by setting this value higher than the `cacheTTLSeconds` value.

Caching can be disabled entirely by setting `cacheEntriesMax` to a non-positive value.

By using the refreshing process, cached values whose hosts become unreachable will be retried before eventually being purged when past their expiry.