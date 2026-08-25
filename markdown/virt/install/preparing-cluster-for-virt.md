---
title: "Preparing your cluster for {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing your cluster for {{ VirtProductName }} {id="preparing-cluster-for-virt"}
{%- set context = "preparing-cluster-for-virt" -%}
{%- set toclevels = "3" %}

Review platform compatibility information before you install {{ VirtProductName }}. For detailed system requirements, see "Hardware, software, and operational requirements" in the Additional resources section. {._abstract}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-compatible-platforms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-cloud-platforms.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-aws-bm.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/virt-arm-compatibility.md" %}{% endleveloffset %}
{% endif %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-ibm-z-compatibility.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-important-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-object-maximums.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [About installation methods for {{ VirtProductName }}](/virt/install/installing-virt#virt-about-installation-methods_installing-virt)
*   [Hardware, software, and operational requirements](/virt/install/virt-requirements#virt-requirements)
*   [Planning a bare-metal cluster for {{ VirtProductName }}](/installing/installing_bare_metal/preparing-to-install-on-bare-metal#virt-planning-bare-metal-cluster-for-ocp-virt_preparing-to-install-on-bare-metal)
*   [Preparing to install on {{ ibm_z_title }} and {{ ibm_linuxone_title }}](/installing/installing_ibm_z/preparing-to-install-on-ibm-z#preparing-to-install-on-ibm-z_preparing-to-install-on-ibm-z)
*   [Installing a cluster on {{ aws_short }} with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [{{ product_title }} object maximums](/scalability_and_performance/planning-your-environment-according-to-object-maximums#planning-your-environment-according-to-object-maximums)
*   [{{ VirtProductName }} supported limits](/virt/about_virt/virt-supported-limits#virt-supported-limits)
*   [Installing a FIPS-compliant cluster](/installing/overview/installing-fips#installing-fips-mode_installing-fips)
*   [Configure CPU models](/virt/managing_vms/cpu_models/virt-configuring-default-cpu-model#virt-configuring-default-cpu-model)
*   [Deleting a virtual machine by using the web console](/virt/managing_vms/virt-delete-vms#virt-delete-vm-web_virt-delete-vms)
*   [Configuring a downward metrics device](/virt/monitoring/virt-exposing-downward-metrics#virt-configuring-downward-metrics_virt-exposing-downward-metrics)
*   [Creating virtual machines from instance types](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)
{%- endif %}
*   [Networking overview](/virt/vm_networking/virt-networking-overview#virt-networking)
{%- if not openshift_dedicated %}
*   [Connecting a virtual machine to an OVN-Kubernetes secondary network](/virt/vm_networking/virt-connecting-vm-to-ovn-secondary-network#virt-connecting-vm-to-ovn-secondary-network)
{%- endif %}
*   [Exposing a virtual machine by using a service](/virt/vm_networking/virt-exposing-vm-with-service#virt-exposing-vm-with-service)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Optimizing ODF PersistentVolumes for Windows VMs](https://access.redhat.com/articles/6978371)
{%- endif %}
{%- if openshift_dedicated %}
*   [{{ gcp_full }} NetApp Volumes](https://cloud.google.com/netapp/volumes/docs)
*   [GCNV storage pool limits](https://docs.cloud.google.com/netapp/volumes/docs/quotas#storage_pool_limits)
{%- endif %}
*   [GCNV service levels](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels)
*   [Glossary of common terms for {{ product_title }} storage](/storage/index#openshift-storage-common-terms_storage-overview)