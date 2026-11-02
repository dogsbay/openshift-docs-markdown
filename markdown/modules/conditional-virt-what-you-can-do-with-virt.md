{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ VirtProductName }} capabilities {id="conditional-virt-what-you-can-do-with-virt_{{ context }}"}

{{ VirtProductName }} provides scalable, enterprise-grade virtualization functionality for your cluster. You can use it to manage virtual machines (VMs) exclusively or alongside container workloads. {._abstract}


:::note

If you have a Red&#160;Hat OpenShift Virtualization Engine subscription, you can run unlimited VMs on subscribed hosts, but you cannot run application instances in containers. For more information, see the subscription guide section about "Red&#160;Hat OpenShift Virtualization Engine and related products".

:::


{{ VirtProductName }} adds new objects into your {{ product_title }} cluster by using Kubernetes custom resources to enable virtualization tasks. These tasks include:

*   Creating and managing Linux and Windows VMs
*   Running pod and VM workloads alongside each other in a cluster
*   Connecting to VMs through a variety of consoles and CLI tools
*   Importing and cloning existing VMs
*   Managing network interface controllers and storage disks attached to VMs
*   Live migrating VMs between nodes

You can manage your cluster and virtualization resources by using the **Virtualization** perspective of the {{ product_title }} web console, and by using the {{ oc_first }}.


:::important

For supported and unsupported OVN-Kubernetes network plug-in use cases, see "OVN-Kubernetes purpose".

:::


{{ VirtProductName }} is designed and tested to work well with Red Hat OpenShift Data Foundation features.


:::important

When you deploy {{ VirtProductName }} with {{ rh_storage }}, you must create a dedicated storage class for Windows virtual machine disks. See "Optimizing ODF PersistentVolumes for Windows VMs" for details.

:::


You can use {{ VirtProductName }} with OVN-Kubernetes or one of the other certified network plug-ins listed in "Certified OpenShift CNI Plug-ins".

You can check your {{ VirtProductName }} cluster for compliance issues by installing the Compliance Operator and running a scan with the `ocp4-moderate` and `ocp4-moderate-node` profiles. The Compliance Operator uses OpenSCAP, a NIST-certified tool, to scan and enforce security policies.

For information about partnering with Independent Software Vendors (ISVs) and Services partners for specialized storage, networking, backup, and additional functionality, see the Red Hat Ecosystem Catalog.