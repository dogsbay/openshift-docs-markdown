{% if context == "installing-azure-customizations" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-network-customizations" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "ipi-install-prerequisites" %}
{%- set ipi_bare_metal = true -%}
{% endif %}
{% if context == "installing-bare-metal-network-customizations" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set bare_metal = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-ibm-z-reqs" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set ibm_cloud_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_cloud_vpc = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud_vpc = true -%}
{% endif %}
{% if context == "upi-vsphere-installation-reqs" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum resource requirements for cluster installation {id="installation-minimum-resource-requirements_{{ context }}"}

To ensure that your {{ product_title }} cluster runs as expected, each cluster machine must meet minimum CPU, memory, and storage requirements. {._abstract}

**Minimum resource requirements**

<table>
<thead>
<tr>
  <th>Machine</th>
  <th>Operating system</th>
  {% if not (bare_metal or ipi_bare_metal) %}<th>vCPU</th>{% endif %}
  {% if not (bare_metal or ipi_bare_metal) %}<th>Virtual RAM</th>{% endif %}
  {% if bare_metal or ipi_bare_metal %}<th>CPU</th>{% endif %}
  {% if bare_metal or ipi_bare_metal %}<th>RAM</th>{% endif %}
  <th>Storage</th>
  <th>Input/Output Per Second (IOPS)</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Bootstrap</td>
  {% if not ipi_bare_metal %}<td>{{ op_system }}</td>{% endif %}
  {% if ipi_bare_metal %}<td>{{ op_system_base }}</td>{% endif %}
  {% if ibm_power %}<td>2</td>{% endif %}
  {% if not ibm_power %}<td>4</td>{% endif %}
  <td>16 GB</td>
  <td>100 GB</td>
  {% if not ibm_z %}<td>300</td>{% endif %}
  {% if ibm_z %}<td>N/A</td>{% endif %}
</tr>
<tr>
  <td>Control plane</td>
  <td>{{ op_system }}</td>
  {% if ibm_power %}<td>2</td>{% endif %}
  {% if not ibm_power %}<td>4</td>{% endif %}
  <td>16 GB</td>
  <td>100 GB</td>
  {% if not ibm_z %}<td>300</td>{% endif %}
  {% if ibm_z %}<td>N/A</td>{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}<td>Compute</td>{% endif %}
  {% if ibm_z or ibm_power or ibm_cloud_vpc or ipi_bare_metal %}<td>{{ op_system }}</td>{% endif %}
  {% if not (ibm_z or ibm_power or ibm_cloud_vpc or vsphere or ipi_bare_metal) %}<td>{{ op_system }}</td>{% endif %}
  {% if vsphere %}<td>{{ op_system }}</td>{% endif %}
  {% if not openshift_origin %}<td>2</td>{% endif %}
  {% if not openshift_origin %}<td>8 GB</td>{% endif %}
  {% if not openshift_origin %}<td>100 GB</td>{% endif %}
  {% if not openshift_origin %}{% if not ibm_z %}<td>300</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if ibm_z %}<td>N/A</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if openshift_origin %}<td>Compute</td>{% endif %}
  {% if openshift_origin %}<td>{{ op_system }}</td>{% endif %}
  {% if openshift_origin %}<td>2</td>{% endif %}
  {% if openshift_origin %}<td>8 GB</td>{% endif %}
  {% if openshift_origin %}<td>100 GB</td>{% endif %}
  {% if openshift_origin %}{% if not ibm_z %}<td>300</td>{% endif %}{% endif %}
  {% if openshift_origin %}{% if ibm_z %}<td>N/A</td>{% endif %}{% endif %}
</tr>
</tbody>
</table>

{% if ibm_z %}
*   One physical core (IFL) provides two logical cores (threads) when SMT-2 is enabled. The hypervisor can provide two or more vCPUs.
{% endif %}
{% if bare_metal or ipi_bare_metal %}
* One CPU is equal to one physical core when simultaneous multithreading (SMT), or Hyper-Threading, is not enabled. When enabled, use the following formula to calculate the corresponding ratio: (threads per core × cores) × sockets = CPUs.
{% endif %}
{% if not (ibm_z or bare_metal or ibm_cloud_vpc or vsphere or ipi_bare_metal) %}
* One vCPU is equal to one physical core when simultaneous multithreading (SMT), or Hyper-Threading, is not enabled. When enabled, use the following formula to calculate the corresponding ratio: (threads per core × cores) × sockets = vCPUs.
{% endif %}
{% if not (ibm_z or ibm_power or ibm_cloud_vpc or vsphere or ipi_bare_metal) %}
* {{ product_title }} and Kubernetes are sensitive to disk performance, and Red Hat recommends faster storage, particularly for etcd on the control plane nodes which require a 10 ms p99 fsync duration. On many cloud platforms, storage size and IOPS scale together, so you might need to provision more storage to get enough performance.
* As with all user-provisioned installations, if you choose to use {{ op_system_base }} compute machines in your cluster, you take responsibility for all operating system life cycle management and maintenance, including performing system updates, applying patches, and completing all other required tasks. {{ product_title }} 4.10 and later do not support {{ op_system_base }} 7 compute machines.
{% endif %}
{% if ibm_power or ipi_bare_metal %}
* {{ product_title }} and Kubernetes are sensitive to disk performance, and Red Hat recommends faster storage, particularly for etcd on the control plane nodes. On many cloud platforms, storage size and IOPS scale together, so you might need to provision more storage to get enough performance.
{% endif %}
{% if vsphere %}
* {{ product_title }} and Kubernetes are sensitive to disk performance, and Red Hat recommends faster storage, particularly for etcd on the control plane nodes which require a 10 ms p99 fsync duration. On many cloud platforms, storage size and IOPS scale together, so you might need to provision more storage to get enough performance.
* As with all user-provisioned installations, if you choose to use {{ op_system_base }} compute machines in your cluster, you take responsibility for all operating system life cycle management and maintenance, including performing system updates, applying patches, and completing all other required tasks. {{ product_title }} 4.10 and later do not support {{ op_system_base }} 7 compute machines.
{% endif %}

:::note

In {{ product_title }} version 4.22, {{ op_system }} uses {{ op_system_base }} version 9.8, which updates the micro-architecture requirements. Each architecture requires the following minimum instruction set architectures (ISA):

*   x86-64 architecture requires x86-64-v2 ISA
*   ARM64 architecture requires ARMv8.0-A ISA
*   ppc64le architecture requires {{ ibm_name }} Power9 ISA
*   s390x architecture requires {{ ibm_name }} z14 ISA

For more information, see [Architectures](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/9.8_release_notes/index#architectures) in the {{ op_system_base }} documentation.

:::


{% if azure %}

:::important

You must use Azure virtual machines that have the `premiumIO` parameter set to `true`.

:::

{% endif %}

If an instance type for your platform meets the minimum requirements for cluster machines, it is supported to use in {{ product_title }}.

{% if vsphere %}

:::important

Do not use memory ballooning in {{ product_title }} clusters. Memory ballooning can cause cluster-wide instabilities, service degradation, or other undefined behaviors.

*   Control plane machines must have committed memory equal to or greater than the published minimum resource requirements for a cluster installation.
*   Compute machines must have a minimum reservation equal to or greater than the published minimum resource requirements for a cluster installation.

These minimum CPU and memory requirements do not account for resources required by user workloads.

For more information, see the Red&#160;Hat Knowledgebase article [Memory Ballooning and OpenShift](https://access.redhat.com/articles/7074533).

:::

{% endif %}

{% if context == "installing-azure-customizations" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-network-customizations" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set bare_metal = "" -%}
{% endif %}
{% if context == "ipi-install-prerequisites" %}
{%- set ipi_bare_metal = "" -%}
{% endif %}
{% if context == "installing-bare-metal-network-customizations" %}
{%- set bare_metal = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set bare_metal = "" -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = "" -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power = "" -%}
{% endif %}
{% if context == "installing-ibm-z-reqs" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set ibm_cloud_vpc = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_cloud_vpc = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud_vpc = "" -%}
{% endif %}
{% if context == "upi-vsphere-installation-reqs" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud_vpc = "" -%}
{% endif %}