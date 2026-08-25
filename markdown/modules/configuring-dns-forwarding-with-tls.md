{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring DNS forwarding with TLS {id="configuring-dns-forwarding-with-tls_{{ context }}"}

Configure DNS forwarding with TLS to secure queries to upstream resolvers. {._abstract}

When working in a highly regulated environment, you might need the ability to secure DNS traffic when forwarding requests to upstream resolvers so that you can ensure additional DNS traffic and data privacy.

Be aware that CoreDNS caches forwarded connections for 10 seconds. CoreDNS will hold a TCP connection open for those 10 seconds if no request is issued.


:::note

With large clusters, ensure that your DNS server is aware that it might get many new connections to hold open because you can initiate a connection per node. Set up your DNS hierarchy accordingly to avoid performance issues.

:::


{% if openshift_rosa or openshift_dedicated %}

:::important

When specifying values for the `zones` parameter, ensure that you only forward to specific zones, such as your intranet. You must specify at least one zone. Otherwise, your cluster can lose functionality.

:::

{% endif %}

**Procedure**

1.  Modify the DNS Operator object named `default`:
    ```terminal
    $ oc edit dns.operator/default
    ```

    Cluster administrators can configure transport layer security (TLS) for forwarded DNS queries.
    ```yaml title="Configuring DNS forwarding with TLS"
    apiVersion: operator.openshift.io/v1
    kind: DNS
    metadata:
      name: default
    spec:
      servers:
      - name: example_server
        zones:
        - example.com
        forwardPlugin:
          transportConfig:
            transport: TLS
            tls:
              caBundle:
                name: mycacert
              serverName: dnstls.example.com
          policy: Random
          upstreams:
          - 1.1.1.1
          - 2.2.2.2:5353
      upstreamResolvers:
        transportConfig:
          transport: TLS
          tls:
            caBundle:
              name: mycacert
            serverName: dnstls.example.com
        upstreams:
        - type: Network
          address: 1.2.3.4
          port: 53
    ```

    where:

    `spec.servers.name`
    :   Must comply with the `rfc6335` service name syntax.

    `spec.servers.zones`
    :   Must conform to the `rfc1123` subdomain syntax. The cluster domain, `cluster.local`, is invalid for `zones`.

    `spec.servers.forwardPlugin.transportConfig.transport`
    :   Must be set to `TLS` when configuring TLS forwarding.

    `spec.servers.forwardPlugin.transportConfig.tls.serverName`
    :   Must be set to the server name indication (SNI) server name used to validate the upstream TLS certificate.

    `spec.servers.forwardPlugin.policy`
    :   Specifies the upstream selection policy. Defaults to `Random`; valid values are `RoundRobin` and `Sequential`.

    `spec.servers.forwardPlugin.upstreams`
    :   Must provide upstream resolvers; maximum 15 entries per `forwardPlugin`.

    `spec.upstreamResolvers.upstreams`
    :   Specifies an optional field to override the default policy for the default domain. Use the `Network` type only when TLS is enabled and provide an IP address. If omitted, queries use `/etc/resolv.conf`.

    `spec.upstreamResolvers.upstreams.address`
    :   Must be a valid IPv4 or IPv6 address.

    `spec.upstreamResolvers.upstreams.port`
    :   Specifies an optional field to provide a port number. Valid values are between `1` and `65535`; defaults to 853 when omitted.

    :::note

    If `servers` is undefined or invalid, the config map only contains the default server.
    
    :::


**Verification**

1.  View the config map:
    ```terminal
    $ oc get configmap/dns-default -n openshift-dns -o yaml
    ```
    ```yaml title="Sample DNS ConfigMap based on TLS forwarding example"
    apiVersion: v1
    data:
      Corefile: |
        example.com:5353 {
            forward . 1.1.1.1 2.2.2.2:5353
        }
        bar.com:5353 example.com:5353 {
          forward . 3.3.3.3 4.4.4.4:5454
        }
        .:5353 {
            errors
            health
            kubernetes cluster.local in-addr.arpa ip6.arpa {
                pods insecure
                upstream
                fallthrough in-addr.arpa ip6.arpa
            }
            prometheus :9153
            forward . /etc/resolv.conf 1.2.3.4:53 {
                policy Random
            }
            cache 30
            reload
        }
    kind: ConfigMap
    metadata:
      labels:
        dns.operator.openshift.io/owning-dns: default
      name: dns-default
      namespace: openshift-dns
    ```
    *   The `data.Corefile` key contains the Corefile configuration for the DNS server. Changes to the `forwardPlugin` triggers a rolling update of the CoreDNS daemon set.

**Additional resources**
{._additional-resources}

*   [CoreDNS forward documentation](https://coredns.io/plugins/forward/)