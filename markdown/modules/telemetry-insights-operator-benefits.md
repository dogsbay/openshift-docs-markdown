{%- set _mod_docs_content_type = "CONCEPT" %}
# Telemetry and {{ insights_operator }} benefits {id="telemetry-insights-operator-benefits_{{ context }}"}

Telemetry and the {{ insights_operator }} enable certain benefits to end users such as accelerated issue resolution, streamlined customer support, optimized software releases, and prioritized new features. {._abstract}

These benefits are listed as follows:

*   **Enhanced identification and resolution of issues**. Events that might seem normal to an end-user can be observed by Red Hat from a broader perspective across a fleet of clusters. Some issues can be more rapidly identified from this point of view and resolved without an end-user needing to open a support case or file a Jira issue.
*   **Advanced release management**. {{ product_title }} offers the `candidate`, `fast`, and `stable` release channels, which enable you to choose an update strategy. The graduation of a release from `fast` to `stable` is dependent on the success rate of updates and on the events seen during upgrades. With the information provided by connected clusters, Red&#160;Hat can improve the quality of releases to `stable` channels and react more rapidly to issues found in the `fast` channels.
*   **Targeted prioritization of new features and functionality**. The data collected provides insights about which areas of {{ product_title }} are used most. With this information, Red&#160;Hat can focus on developing the new features and functionality that have the greatest impact for our customers.
*   **A streamlined support experience**. You can provide a cluster ID for a connected cluster when creating a support ticket on the Red&#160;Hat Customer Portal. This enables Red&#160;Hat to deliver a streamlined support experience that is specific to your cluster, by using the connected information. This document provides more information about that enhanced support experience.
*   **Predictive analytics**. The insights displayed for your cluster on {{ cluster_manager_url }} are enabled by the information collected from connected clusters. Red&#160;Hat is investing in applying deep learning, machine learning, and artificial intelligence automation to help identify issues that {{ product_title }} clusters are exposed to.

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
On {{ product_title }}, remote health reporting is always enabled. You cannot opt out of it.
{% endif %}

{% if openshift_origin %}
{{ product_title }} may be installed without a pull secret received at console.redhat.com. In this case default imagestreams will not be imported and telemetry data will not be sent.
{% endif %}