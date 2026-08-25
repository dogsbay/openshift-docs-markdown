---
title: "Requirements for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Requirements for {{ hcp }} {id="hcp-requirements"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "hcp-requirements" %}

Ensure you are familiar with the general requirements to deploy {{ hcp }}.

The following requirements apply to {{ hcp }}:

*   In order to run the HyperShift Operator, your management cluster needs at least three worker nodes. In the context of {{ hcp }}, a _management cluster_ is an {{ product_title }} cluster where the HyperShift Operator is deployed and where the control planes for hosted clusters are hosted.

    The control plane is associated with a hosted cluster and runs as pods in a single namespace. When the cluster service consumer creates a hosted cluster, it creates a worker node that is independent of the control plane.
*   You must open the firewall port `53` on Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) to allow the Domain Name Service (DNS) protocol to work as expected.
*   You can run both the management cluster and the worker nodes on-premise, such as on a bare-metal platform or on {{ VirtProductName }}. In addition, you can run both the management cluster and the worker nodes on cloud infrastructure, such as {{ aws_first }}.
*   If you use a mixed infrastructure, such as running the management cluster on {{ aws_short }} and your worker nodes on-premise, or running your worker nodes on {{ aws_short }} and your management cluster on-premise, you must use the `PublicAndPrivate` publishing strategy and follow the latency requirements in the support matrix.
*   In Bare Metal Host (BMH) deployments, where the Bare Metal Operator starts machines, the hosted control plane must be able to reach baseboard management controllers (BMCs). If your security profile does not permit the Cluster Baremetal Operator to access the network where the BMHs have their BMCs in order to enable Redfish automation, you can use BYO ISO support. However, in BYO mode, {{ product_title }} cannot automate the powering on of BMHs.

{% leveloffset +1 %}{% include "./modules/hcp-support-matrix.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators)
*   [Shared infrastructure between hosted and standalone control planes](/hosted_control_planes/hcp-prepare/hcp-sizing-guidance#hcp-shared-infra_hcp-sizing-guidance)
*   [Technology Preview features status](/hosted_control_planes/hcp-release-notes#hcp-release-notes-technology-preview-tables_hcp-release-notes)
*   [Removing a cluster from management](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#remove-managed-cluster)
*   [The multicluster engine for Kubernetes operator 2.17 Support Matrix](https://access.redhat.com/articles/7142379)

{% leveloffset +1 %}{% include "./modules/hcp-fips.md" %}{% endleveloffset %}

**Additional resources**

*   [The multicluster engine for Kubernetes operator 2.17 Support Matrix](https://access.redhat.com/articles/7142379)
*   [Red&#160;Hat {{ product_title }} Operator Update Information Checker](https://access.redhat.com/labs/ocpouic/?operator=multicluster-engine&&upgrade_path=4.14%20to%204.16)
*   [Shared infrastructure between hosted and standalone control planes](/hosted_control_planes/hcp-prepare/hcp-sizing-guidance#hcp-shared-infra_hcp-sizing-guidance)

{% leveloffset +1 %}{% include "./modules/hcp-cidr-ranges.md" %}{% endleveloffset %}

**Additional resources**

*   [CIDR range definitions](/networking/networking_overview/cidr-range-definitions#cidr-range-definitions)