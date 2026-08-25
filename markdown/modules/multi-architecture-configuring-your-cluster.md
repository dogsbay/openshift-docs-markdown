{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring your cluster with multi-architecture compute machines {id="multi-architecture-configuring-your-cluster_{{ context }}"}

To create a cluster with multi-architecture compute machines with different installation options and platforms, see the documentation references. {._abstract}

**Cluster with multi-architecture compute machine installation options**

| Documentation section | Platform | User-provisioned installation | Installer-provisioned installation | Control Plane | Compute node |
| --- | --- | --- | --- | --- | --- |
| "Creating a cluster with multi-architecture compute machines on Azure" | Microsoft Azure | &#10003; | &#10003; | `aarch64` or `x86_64` | `aarch64`, `x86_64` |
| "Creating a cluster with multi-architecture compute machines on AWS" | Amazon Web Services (AWS) | &#10003; | &#10003; | `aarch64` or `x86_64` | `aarch64`, `x86_64` |
| "Creating a cluster with multi-architecture compute machines on {{ gcp_short }}" | {{ gcp_first }} |  | &#10003; | `aarch64` or `x86_64` | `aarch64`, `x86_64` .3+ |
| "Creating a cluster with multi-architecture compute machines on bare metal, {{ ibm_power_title }}, or {{ ibm_z_title }}" | Bare metal | &#10003; | &#10003; | `aarch64` or `x86_64` | `aarch64`, `x86_64` |
| {{ ibm_power_title }} | &#10003; |  | `x86_64` or `ppc64le` | `x86_64`, `ppc64le` | {{ ibm_z_title }} |
| &#10003; |  | `x86_64` or `s390x` | `x86_64`, `s390x` | "Creating a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} with z/VM" | {{ ibm_z_name }} and {{ ibm_linuxone_name }} |
| &#10003; |  | `x86_64`, `s390x` | `x86_64`, `s390x` | "Creating a cluster with multi-architecture compute machines on {{ ibm_z_name }} and {{ ibm_linuxone_name }} with {{ op_system_base }} KVM" | {{ ibm_z_name }} and {{ ibm_linuxone_name }} |
| &#10003; |  | `x86_64`, `s390x` | `x86_64`, `s390x` | "Creating a cluster with multi-architecture compute machines on {{ ibm_power_name }}" | {{ ibm_power_name }} |