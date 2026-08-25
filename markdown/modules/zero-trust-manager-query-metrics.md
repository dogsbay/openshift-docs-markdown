{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying metrics for the {{ zero_trust_full }} {id="zero-trust-manager-query-metrics_{{ context }}"}

Query SPIRE Agent and SPIRE Server metrics using the {{ product_title }} web console or the command line. This helps you monitor the performance of SPIRE components that match specific job labels. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ zero_trust_full }}.
*   You have deployed the SPIRE Server and SPIRE Agent operands in the cluster.
*   You have enabled monitoring and metrics collection by creating `ServiceMonitor` objects.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Metrics**.
1.  In the query field, enter the following PromQL expression to query SPIRE Server metrics:
    ```promql
    {job="spire-server"}
    ```
1.  In the query field, enter the following PromQL expression to query SPIRE Agent metrics.
    ```promql
    {job="spire-agent"}
    ```