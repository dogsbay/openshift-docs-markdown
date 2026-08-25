---
title: Using Red Hat Lightspeed to identify issues with your cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using Red&#160;Hat Lightspeed to identify issues with your cluster {id="using-insights-to-identify-issues-with-your-cluster"}

{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "using-insights-to-identify-issues-with-your-cluster" %}

{{ red_hat_lightspeed }} repeatedly analyzes the data {{ insights_operator }} sends, which includes workload recommendations from Deployment Validation Operator (DVO). Users of {{ product_title }} can display the results in the {{ insights_advisor_url }} service on the {{ hybrid_console }}.

{% leveloffset +1 %}{% include "./modules/insights-operator-advisor-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Using the Deployment Validation Operator in your {{ red_hat_lightspeed }} workflow](https://docs.redhat.com/en/documentation/red_hat_lightspeed/1-latest/html-single/monitoring_your_openshift_cluster_health_with_red_hat_lightspeed_advisor/index#using-the-deployment-validation-operator)

{% leveloffset +1 %}{% include "./modules/insights-operator-advisor-recommendations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/displaying-potential-issues-with-your-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/displaying-all-insights-advisor-recommendations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-advisor-recommendations-filters.md" %}{% endleveloffset %}

**Additional resources**

*   [Advisor recommendations ({{ hybrid_console }})](https://console.redhat.com/openshift/insights/advisor/recommendations)

{% leveloffset +2 %}{% include "./modules/filtering-insights-advisor-recommendations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/removing-filters-from-insights-advisor-recommendations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disabling-insights-advisor-recommendations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-insights-advisor-recommendations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-insights-advisor-workload-recommendations.md" %}{% endleveloffset %}

**Additional resources**

*   [OpenShift > Advisor > Workloads ({{ hybrid_console }})](https://console.redhat.com/openshift/insights/advisor/workloads)
*   [Information about Kubernetes workloads (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/)
*   [Boost your cluster operations with Deployment Validation and {{ red_hat_lightspeed }} Advisor for Workloads (Red Hat Blog)](https://www.redhat.com/en/blog/boost-your-cluster-operations-with-deployment-validation-and-insights-advisor-for-workloads)
*   [Identifying workload recommendations for namespaces in your clusters](https://docs.redhat.com/en/documentation/red_hat_lightspeed/1-latest/html-single/monitoring_your_openshift_cluster_health_with_red_hat_lightspeed_advisor/index#identifying-workload-recommendations-for-namespaces-in-clusters_using-insights-advisor)
*   [Viewing workload recommendations for namespaces in your cluster](https://docs.redhat.com/en/documentation/red_hat_lightspeed/1-latest/html-single/monitoring_your_openshift_cluster_health_with_red_hat_lightspeed_advisor/index#viewing-workload-recommendations-for-namespaces_using-insights-advisor)
*   [Excluding objects from workload recommendations in your clusters](https://docs.redhat.com/en/documentation/red_hat_lightspeed/1-latest/html-single/monitoring_your_openshift_cluster_health_with_red_hat_lightspeed_advisor/index#excluding-objects-from-workload-recommendations_using-insights-advisor)

{% leveloffset +1 %}{% include "./modules/displaying-the-insights-status-in-the-web-console.md" %}{% endleveloffset %}