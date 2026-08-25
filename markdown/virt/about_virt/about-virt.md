---
title: "About {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ VirtProductName }} {id="about-virt"}
{%- set context = "about-virt" %}

{{ VirtProductName }} provides a comprehensive virtualization solution that allows you to run and manage virtual machine workloads alongside container workloads in your {{ product_title }} cluster.

{% leveloffset +1 %}{% include "./modules/virt-what-you-can-do-with-virt.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-vmware-comparison.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/virt-supported-cluster-version.md" %}{% endleveloffset %}
{% endif %}

{% if openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/virt-supported-cluster-version-osd.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-about-storage-volumes-for-vm-disks.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-sno-differences.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_{{ context }}"}

{% if not (openshift_origin or openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [{{ ove_first }} and related products](https://www.redhat.com/en/resources/self-managed-openshift-subscription-guide#section-8)
{%- endif %}
*   [OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Optimizing ODF PersistentVolumes for Windows VMs](https://access.redhat.com/articles/6978371)
*   [Compliance Operator](/security/compliance_operator/co-concepts/compliance-operator-understanding#understanding-compliance)
*   [Supported compliance profiles](/security/compliance_operator/co-scans/compliance-operator-supported-profiles#compliance-operator-supported-profiles)
*   [{{ VirtProductName }} supported limits](/virt/about_virt/virt-supported-limits#virt-supported-limits)
*   [OVN-Kubernetes purpose](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#nw-ovn-kubernetes-purpose_about-ovn-kubernetes)
{%- endif %}
*   [Glossary of common terms for {{ product_title }} storage](/storage/index#openshift-storage-common-terms_storage-overview)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [About {{ sno }}](/installing/installing_sno/install-sno-preparing-to-install-sno#install-sno-about-installing-on-a-single-node_install-sno-preparing)
{%- endif %}
*   [Using the OpenShift Assisted Installer Service to Deploy an OpenShift Cluster on Bare Metal and vSphere](https://cloud.redhat.com/blog/using-the-openshift-assisted-installer-service-to-deploy-an-openshift-cluster-on-metal-and-vsphere)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Certified OpenShift CNI Plug-ins](https://access.redhat.com/articles/5436171)
{%- endif %}
*   [NIST-certified tool](https://www.nist.gov/)
*   [Red Hat Ecosystem Catalog](https://red.ht/workswithvirt)
*   [Pod disruption budgets](/nodes/pods/nodes-pods-priority#priority-preemption-other_nodes-pods-priority)
*   [About live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration)
*   [Configure eviction and run strategies](/virt/nodes/virt-eviction-strategies#virt-eviction-strategies)
{%- if not openshift_dedicated %}
*   [Tuning & Scaling Guide in the Red&#160;Hat Knowledgebase](https://access.redhat.com/articles/6994974)
{% endif %}