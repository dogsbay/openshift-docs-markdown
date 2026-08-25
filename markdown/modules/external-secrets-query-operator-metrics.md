{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying metrics for the {{ external_secrets_operator }} {id="external-secrets-query-operator-metrics_{{ context }}"}

As a cluster administrator, or as a user with view access to all namespaces, you can query the Operator metrics by using the {{ product_title }} web console or the command-line interface (CLI). For more information, see "Accessing metrics". {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ external_secrets_operator }}.
*   You have enabled monitoring and metrics collection by creating a `ServiceMonitor` object.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Observe** -> **Metrics**.
1.  In the query field, enter the following PromQL expressions to query the {{ external_secrets_operator }} metric:
    ```promql
    {job="external-secrets-operator-controller-manager-metrics-service"}
    ```