{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running custom queries to Loki {id="troubleshooting-query-loki-manually_{{ context }}"}

Troubleshoot network flow data by running custom Loki queries to retrieve available labels or filter logs by specific criteria, such as source namespaces, using the command-line interface. {._abstract}

There are two examples of ways to do this, which you can adapt according to your needs by replacing the &lt;api_token> with your own.


:::note

These examples use the `netobserv` namespace for the Network Observability Operator and Loki deployments. Additionally, the examples assume that the LokiStack is named `loki`. You can optionally use a different namespace and naming by adapting the examples, specifically the `-n netobserv` or the `loki-gateway` URL.

:::


**Prerequisites**

*   Installed {{ loki_op }} for use with Network Observability Operator.

**Procedure**

1.  To get all available labels, run the following command:
    ```terminal
    $ oc exec deployment/netobserv-plugin -n netobserv -- curl -G -s -H 'X-Scope-OrgID:network' -H 'Authorization: Bearer <api_token>' -k https://loki-gateway-http.netobserv.svc:8080/api/logs/v1/network/loki/api/v1/labels | jq
    ```
1.  To get all flows from the source namespace, `my-namespace`, run the following command:
    ```terminal
    $ oc exec deployment/netobserv-plugin -n netobserv -- curl -G -s -H 'X-Scope-OrgID:network' -H 'Authorization: Bearer <api_token>' -k https://loki-gateway-http.netobserv.svc:8080/api/logs/v1/network/loki/api/v1/query --data-urlencode 'query={SrcK8S_Namespace="my-namespace"}' | jq
    ```