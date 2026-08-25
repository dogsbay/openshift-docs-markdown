{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying metrics for the {{ cert_manager_operator }} operands {id="cert-manager-query-metrics_{{ context }}"}

As a cluster administrator, or as a user with view access to all namespaces, you can query {{ cert_manager_operator }} operands metrics by using the {{ product_title }} web console or the command-line interface (CLI). For more information, see "Accessing metrics". {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ cert_manager_operator }}.
*   You have enabled monitoring and metrics collection by creating `ServiceMonitor` object.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Metrics**.
1.  In the query field, enter the following PromQL expressions to query the {{ cert_manager_operator }} operands metric for each operand:
    ```promql
    {job="cert-manager"}
    ```
    ```promql
    {job="cert-manager-webhook"}
    ```
    ```promql
    {job="cert-manager-cainjector"}
    ```