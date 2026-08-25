{%- set _mod_docs_content_type = "CONCEPT" %}
# What you can do with {{ VirtProductName }} {id="virt-what-you-can-do-with-virt_{{ context }}"}

{{ VirtProductName }} provides scalable, enterprise-grade virtualization functionality for your cluster. You can use it to manage virtual machines (VMs) exclusively or alongside container workloads. {._abstract}

{% if not (openshift_origin or openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::note

If you have a {{ ove_first }} subscription, you can run unlimited VMs on subscribed hosts, but you cannot run application instances in containers. For more information, see the subscription guide section about "{{ ove_first }} and related products".

:::

{% endif %}

{{ VirtProductName }} adds new objects into your {{ product_title }} cluster by using Kubernetes custom resources to enable virtualization tasks. These tasks include:

*   Creating and managing Linux and Windows VMs
*   Running pod and VM workloads alongside each other in a cluster
*   Connecting to VMs through a variety of consoles and CLI tools
*   Importing and cloning existing VMs
*   Managing network interface controllers and storage disks attached to VMs
*   Live migrating VMs between nodes

{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
{{ VirtProductName }} on {{ product_title }} includes guest subscriptions for {{ op_system_base_full }} based on the number of vCPUs on the host:

*   Hosts with 96 or more vCPUs: Unlimited {{ op_system_base }} guest subscriptions are included.
*   Hosts with fewer than 96 vCPUs: You can run {{ op_system_base }} guests with a guest vCPU to host vCPU ratio of up to 8:1.

    For example, a host with 64 vCPUs can run up to 512 {{ op_system_base }} guest vCPUs (64 host vCPUs x 8 = 512 guest vCPUs).

OVN-Kubernetes is the default network provider for {{ VirtProductName }} on {{ product_title }}. For more information, see "OVN-Kubernetes" in the _Additional resources_.
{% endif %}

You can manage your cluster and virtualization resources by using the **Virtualization** perspective of the {{ product_title }} web console, and by using the {{ oc_first }}.

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::important

For supported and unsupported OVN-Kubernetes network plug-in use cases, see "OVN-Kubernetes purpose".

:::


{{ VirtProductName }} is designed and tested to work well with {{ rh_storage_first }} features.


:::important

When you deploy {{ VirtProductName }} with {{ rh_storage }}, you must create a dedicated storage class for Windows virtual machine disks. See "Optimizing ODF PersistentVolumes for Windows VMs" for details.

:::


You can use {{ VirtProductName }} with OVN-Kubernetes or one of the other certified network plug-ins listed in "Certified OpenShift CNI Plug-ins".
{% endif %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
You can check your {{ VirtProductName }} cluster for compliance issues by installing the Compliance Operator and running a scan with the `ocp4-moderate` and `ocp4-moderate-node` profiles. The Compliance Operator uses OpenSCAP, a NIST-certified tool, to scan and enforce security policies.
{%- endif %}

{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
You can check your {{ VirtProductName }} cluster for compliance issues by installing the Compliance Operator and running a scan with the `ocp4-moderate` and `ocp4-moderate-node` profiles. The Compliance Operator uses OpenSCAP, a NIST-certified tool, to scan and enforce security policies.
{% endif %}

{% if not openshift_dedicated %}
For information about partnering with Independent Software Vendors (ISVs) and Services partners for specialized storage, networking, backup, and additional functionality, see the Red Hat Ecosystem Catalog.
{% endif %}