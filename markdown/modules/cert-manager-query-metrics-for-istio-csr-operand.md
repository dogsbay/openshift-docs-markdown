{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying metrics for the istio-csr operand {id="cert-manager-query-metrics-for-istio-csr-operand_{{ context }}"}

Cluster administrators, or users with view access to all namespaces, can query metrics for the istio-csr operand by using the {{ product_title }} web console. For more information, see "Accessing metrics". {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed the {{ cert_manager_operator }}.
*   You have enabled monitoring and metrics collection by creating the `ServiceMonitor` object for the istio-csr operand.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Observe** -> **Metrics**.
1.  In the query field, enter the `{job="cert-manager-istio-csr"}` PromQL expression to query the `istio-csr` operand metrics. The results display metrics collected for the istio-csr operand, which can help you monitor its performance and behavior.