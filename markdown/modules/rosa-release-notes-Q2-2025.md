{%- set _mod_docs_content_type = "REFERENCE" %}
# Q2 2025 {id="rosa-q2-2025_{{ context }}"}

The following items were added during the second quarter of 2025. {._abstract}


Updated version requirements for migration from OpenShift SDN to OVN-Kubernetes
:   Your cluster version must be 4.16.43 or above to initiate live migration from the OpenShift SDN network plugin to the OVN-Kubernetes network plugin.

    If your cluster uses the OpenShift SDN network plugin, you cannot upgrade to future major versions of {{ product_title }} without migrating to OVN-Kubernetes.
{%- if openshift_rosa %}

    For more information about migrating to OVN-Kubernetes, see [Migrating from OpenShift SDN network plugin to OVN-Kubernetes network plugin](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/ovn-kubernetes_network_plugin/index#migrate-from-openshift-sdn).
{% endif %}


AWS Trainium and Inferentia instance types now supported
:   You can now use {{ AWS }} Trainium and Inferentia instance types for your {{ product_title }} clusters. For more information, see
{%- if openshift_rosa %}
    [{{ product_title }} instance types](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/introduction_to_rosa/index#rosa-instance-types).
{% endif %}
{% if openshift_rosa_hcp %}
    [{{ product_title }} instance types](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-hcp-instance-types).
{% endif %}

{% if openshift_rosa %}

New version of {{ product_title }} available
:   {{ product_title }} version 4.19 is now available for new clusters. For more information about upgrading to this latest version, see [Upgrading ROSA (classic architecture) clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/upgrading/rosa-upgrading-sts).
{% endif %}

{% if openshift_rosa_hcp %}

New version of {{ product_title }} available
:   {{ product_title }} version 4.19 is now available for new clusters. For more information about upgrading to this latest version, see [Upgrading {{ hcp_title }} clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/upgrading/index).
{% endif %}

{% if openshift_rosa %}

{{ product_title }} cluster ownership transfer is now available for {{ product_title }}
:   You can now transfer ownership of {{ product_title }} clusters. For more information, see [Initiating ownership transfer of a {{ product_title }} cluster](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html/managing_clusters/assembly-managing-clusters#initiating-rosa-classic-ownership-transfer-proc_downloading-and-updating-pull-secrets).
{% endif %}