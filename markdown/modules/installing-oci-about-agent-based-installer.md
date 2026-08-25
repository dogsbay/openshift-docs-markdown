{%- set _mod_docs_content_type = "CONCEPT" %}
# The Agent-based Installer and {{ oci_distributed_no_rt }} overview {id="installing-oci-about-agent-based-installer_{{ context }}"}

You can install an {{ product_title }} cluster on {{ oci_distributed }} by using the Agent-based Installer. Red&#160;Hat and Oracle test, validate, and support running {{ oci_distributed_no_rt }} workloads in an {{ product_title }} cluster. {._abstract}

The Agent-based Installer provides the ease of use of the Assisted Installation service, but with the capability to install a cluster in either a connected or disconnected environment.

The following diagrams show workflows for connected and disconnected environments:

**Figure 1. Workflow for using the Agent-based installer in a connected environment to install a cluster on {{ oci_first_no_rt }}**

![Image of a high-level workflow for using the Agent-based installer in a connected environment to install a cluster on {{ oci }}](/_assets/images/684_OpenShift_Installing_on_OCI_0624-connected.png)

**Figure 2. Workflow for using the Agent-based installer in a disconnected environment to install a cluster on {{ oci }}**

![Image of a high-level workflow for using the Agent-based installer in a disconnected environment to install a cluster on {{ oci }}](/_assets/images/684_OpenShift_Installing_on_OCI_0624-disconnected.png)

{{ oci_distributed_no_rt }} provides services that can meet your regulatory compliance, performance, and cost-effectiveness needs. {{ oci_distributed_no_rt }} supports 64-bit `x86` instances and 64-bit `ARM` instances.


:::note

Consider selecting a nonvolatile memory express (NVMe) drive or a solid-state drive (SSD) for your boot disk, because these drives offer low latency and high throughput capabilities for your boot disk.

:::


By running your {{ product_title }} cluster on {{ oci_distributed_no_rt }}, you can access the following capabilities:

*   Compute flexible shapes, where you can customize the number of Oracle® CPUs (OCPUs) and memory resources for your VM. With access to this capability, a cluster’s workload can perform operations in a resource-balanced environment. You can find all RHEL-certified {{ oci }} shapes by going to the Oracle page on the Red Hat Ecosystem Catalog portal.
*   Block Volume storage, where you can configure scaling and auto-tuning settings for your storage volume, so that the Block Volume service automatically adjusts the performance level to optimize performance.


:::important

To ensure the best performance conditions for your cluster workloads that operate on {{ oci_distributed_no_rt }} and on the OCVS service, ensure volume performance units (VPUs) for your block volume is sized for your workloads. The following list provides some guidance in selecting the VPUs needed for specific performance needs:

*   Test or proof of concept environment: 100 GB, and 20 to 30 VPUs.
*   Basic environment: 500 GB, and 60 VPUs.
*   Heavy production environment: More than 500 GB, and 100 or more VPUs.

Consider reserving additional VPUs to provide sufficient capacity for updates and scaling activities. For more information about VPUs, see Volume Performance Units (Oracle documentation).

:::