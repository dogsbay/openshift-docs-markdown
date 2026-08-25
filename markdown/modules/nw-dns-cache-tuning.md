{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tuning the CoreDNS cache {id="nw-dns-cache-tuning_{{ context }}"}

To reduce the load on upstream DNS resolvers, you can tune the CoreDNS cache by adjusting the duration of positive and negative caching. This process involves modifying the time-to-live (TTL) values within the DNS Operator object to control how long query responses are stored. {._abstract}

For CoreDNS, you can configure the maximum duration of both successful or unsuccessful caching, also known respectively as positive or negative caching. Tuning the cache duration of DNS query responses can reduce the load for any upstream DNS resolvers. 

You can shorten the TTL of the DNS record by setting a lower positive cache. You cannot increase the TTL on the DNS record by setting a higher positive cache. The maximum cache is the lower of the TTL of the DNS record or the positive cache.


:::warning

Setting TTL fields to low values could lead to an increased load on the cluster, any upstream resolvers, or both.

:::


**Procedure**

1.  Edit the DNS Operator object named `default` by running the following command:
    ```terminal
    $ oc edit dns.operator.openshift.io/default
    ```
1.  Modify the time-to-live (TTL) caching values:
    ```yaml title="Configuring DNS caching"
    apiVersion: operator.openshift.io/v1
    kind: DNS
    metadata:
      name: default
    spec:
      cache:
        positiveTTL: 1h
        negativeTTL: 0.5h10m
    ```

where:


`spec.cache.positiveTTL`
:   Specifies a string value that is converted to its respective number of seconds by CoreDNS. If this field is omitted, the value is assumed to be `0s` and the cluster uses the internal default value of `900s` as a fallback.

`spec.cache.negativeTTL`
:   Specifies a string value that is converted to its respective number of seconds by CoreDNS. If this field is omitted, the value is assumed to be `0s` and the cluster uses the internal default value of `30s` as a fallback.

**Verification**

1.  To review the change, look at the config map again by running the following command:
    ```terminal
    $ oc get configmap/dns-default -n openshift-dns -o yaml
    ```
1.  Verify that you see entries that look like the following example:
    ```yaml
           cache 3600 {
                denial 9984 2400
            }
    ```

**Additional resources**
{._additional-resources}

*   [CoreDNS cache](https://coredns.io/plugins/cache/)