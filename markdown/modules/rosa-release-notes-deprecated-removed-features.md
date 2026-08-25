{%- set _mod_docs_content_type = "REFERENCE" %}
# Deprecated and removed features {id="rosa-deprecated-removed-features_{{ context }}"}

Some features available in previous releases have been deprecated or removed. Deprecated functionality is still included in {{ product_title }} and continues to be supported; however, it will be removed in a future release of this product and is not recommended for new deployments. {._abstract}

{% if openshift_rosa_hcp %}

Disable workload monitoring
:   Previously, users could disable workload monitoring on {{ product_title }} clusters. However, to allow users to own the full Cluster Monitoring Operator (CMO) stack on {{ product_title }} clusters, the ability to disable workload monitoring has been deprecated. For more information, see [Preparing to configure the user workload monitoring stack](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/monitoring/index#preparing-to-configure-the-monitoring-stack-uwm).
{% endif %}

{% if openshift_rosa %}

{{ product_title }} non-STS deployment mode
:   {{ product_title }} non-STS deployment mode is no longer the preferred method for new clusters. Instead, users must deploy {{ product_title }} with the STS mode. This deprecation is in line with our new {{ product_title }} provisioning wizard UI experience on the [Red Hat Hybrid Cloud Console](https://console.redhat.com/openshift/create/rosa/wizard).
{% endif %}


Label removal on core namespaces
:   {{ product_title }} is no longer labeling OpenShift core using the `name` label. Customers should migrate to referencing the `kubernetes.io/metadata.name` label if needed for Network Policies or other use cases.