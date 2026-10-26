{%- set _mod_docs_content_type = "CONCEPT" %}
# Discover and evaluate the platform {id="virt-discover-and-evaluate_{{ context }}"}

Understand the capabilities and architecture of {{ VirtProductName }}, and how it compares to hypervisor-based virtualization, so you can decide whether it fits your environment and learn what a deployment would require. {._abstract}

{{ VirtProductName }} runs virtual machines (VMs) as Kubernetes workloads on the same cluster, scheduler, and storage as your containers. The VM lifecycle stays the same. The layer underneath changes: {{ product_title }}, not a separate virtualization platform. Evaluate whether that change works for the workloads you run.

Start with what the platform can do, then compare it against what you run today. If you are coming from {{ vmw_full }}, a concept-by-concept comparison shows which of your workflows carry over unchanged, which have a close equivalent, and which have none at all. Focus on the workflows with no equivalent.

Confirm that your environment qualifies before you plan any further. Cluster version and topology both limit what you can deploy, and a single-node cluster differs enough to check early.

Compute, storage, networking, and scaling each come from a separate Operator, all deployed and managed through the `HyperConverged` custom resource. Learning which Operator owns which capability makes configuration and troubleshooting easier later.

When you would rather see the platform running than read about it, the guided tour and the quick starts walk you through the web console on a live cluster.

**Additional resources**
{._additional-resources}

{% if not (openshift_origin or openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [{{ ove_first }} and related products](https://www.redhat.com/en/resources/self-managed-openshift-subscription-guide#section-8)
{% endif %}
{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [{{ VirtProductName }} supported limits](/virt/about_virt/virt-supported-limits#virt-supported-limits)
*   [About {{ sno }}](/installing/installing_sno/install-sno-preparing-to-install-sno#install-sno-about-installing-on-a-single-node_install-sno-preparing)
{%- endif %}
*   [OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [OVN-Kubernetes purpose](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#nw-ovn-kubernetes-purpose_about-ovn-kubernetes)
*   [Certified OpenShift CNI Plug-ins](https://access.redhat.com/articles/5436171)
*   [Optimizing ODF PersistentVolumes for Windows VMs](https://access.redhat.com/articles/6978371)
*   [Compliance Operator](/security/compliance_operator/co-concepts/compliance-operator-understanding#understanding-compliance)
*   [Supported compliance profiles](/security/compliance_operator/co-scans/compliance-operator-supported-profiles#compliance-operator-supported-profiles)
{%- endif %}
*   [NIST-certified tool](https://www.nist.gov/)
*   [Red Hat Ecosystem Catalog](https://red.ht/workswithvirt)