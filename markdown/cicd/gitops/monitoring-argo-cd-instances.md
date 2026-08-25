{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring Argo CD instances {id="monitoring-argo-cd-instances"}
{%- set context = "monitoring-argo-cd-instances" %}

By default, the {{ gitops_title }} Operator automatically detects an installed Argo CD instance in your defined namespace, for example, `openshift-gitops`, and connects it to the monitoring stack of the cluster to provide alerts for out-of-sync applications.

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ gitops_title }} Operator in your cluster.
*   You have installed an Argo CD application in your defined namespace, for example, `openshift-gitops`.

{% leveloffset +1 %}{% include "./modules/gitops-monitoring-argo-cd-health-using-prometheus-metrics.md" %}{% endleveloffset %}