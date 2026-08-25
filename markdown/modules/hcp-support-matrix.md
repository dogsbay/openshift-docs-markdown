{%- set _mod_docs_content_type = "CONCEPT" %}
# Support matrix for {{ hcp }} {id="hcp-support-matrix_{{ context }}"}

Because {{ mce }} includes the HyperShift Operator, releases of {{ hcp }} align with releases of {{ mce_short }}. The support matrix includes details about supported clusters, platforms, and architectures, as well as information about updates and technology preview features. {._abstract}

For more information, see "OpenShift Operator Life Cycles".

## Management cluster support {id="hcp-matrix-mgmt_{{ context }}"}

Any supported {{ product_title }} cluster can be a management cluster.


:::note

A single-node {{ product_title }} cluster is not supported as a management cluster. If you have resource constraints, you can share infrastructure between a standalone {{ product_title }} control plane and {{ hcp }}. For more information, see "Shared infrastructure between hosted and standalone control planes".

:::


The following table maps {{ mce_short }} versions to the management cluster versions that support them:

**Supported {{ mce_short }} versions for {{ product_title }} management clusters**

| Management cluster version | Supported {{ mce_short }} version |
| --- | --- |
| 4.14, 4.16 | 2.6 |
| 4.16 | 2.7 |
| 4.16, 4.18 | 2.8 |
| 4.18 - 4.19 | 2.9 |
| 4.18 - 4.20 | 2.10 |
| 4.19 - 4.21 | 2.11 |
| 4.20 - 4.22 | 2.17 |

## Hosted cluster support {id="hcp-matrix-hc_{{ context }}"}

For hosted clusters, no direct relationship exists between the management cluster version and the hosted cluster version. The hosted cluster version depends on the HyperShift Operator that is included with your {{ mce_short }} version.


:::note

Ensure a maximum latency of 200 ms between the management cluster and hosted clusters. This requirement is especially important for mixed infrastructure deployments, such as when your management cluster is on {{ aws_short }} and your compute nodes are on-premise.

:::


The following table shows the hosted cluster versions that you can create by using the HyperShift Operator that is associated with a version of {{ mce_short }}:


:::note

Although the HyperShift Operator supports the hosted cluster versions in the following table, {{ mce_short }} supports only as far back as 2 versions earlier than the current version. For example, if the current hosted cluster version is 4.21, {{ mce_short }} supports as far back as version 4.19. If you want to use a hosted cluster version that is earlier than one of the versions that {{ mce_short }} supports, you can detach your hosted clusters from {{ mce_short }} to be unmanaged, or you can use an earlier version of {{ mce_short }}. For instructions to detach your hosted clusters from {{ mce_short }}, see "Removing a cluster from management" ({{ rh_rhacm }} documentation). For more information about {{ mce_short }} support, see "The multicluster engine for Kubernetes operator 2.17 Support Matrix" (Red&#160;Hat Knowledgebase).

:::


**Hosted cluster version mapped to HyperShift Operator associated with {{ mce_short }} version**

| Hosted cluster version | HyperShift Operator in {{ mce_short }} 2.6 | HyperShift Operator in {{ mce_short }} 2.7 | HyperShift Operator in {{ mce_short }} 2.8 | HyperShift Operator in {{ mce_short }} 2.9 | HyperShift Operator in {{ mce_short }} 2.10 | HyperShift Operator in {{ mce_short }} 2.11 | HyperShift Operator in {{ mce_short }} 2.17 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.14 | Yes | Yes | Yes | No | No | No | No |
| 4.16 | Yes | Yes | Yes | Yes | No | No | No |
| 4.18 | No | No | Yes | Yes | Yes | No | No |
| 4.19 | No | No | No | Yes | Yes | Yes | No |
| 4.20 | No | No | No | No | Yes | Yes | Yes |
| 4.21 | No | No | No | No | No | Yes | Yes |
| 4.22 | No | No | No | No | No | No | Yes |

## Hosted cluster platform support {id="hcp-matrix-platform_{{ context }}"}

A hosted cluster supports only one infrastructure platform. For example, you cannot create multiple node pools on different infrastructure platforms.

The following table indicates which {{ product_title }} versions are supported for each platform of {{ hcp }}.


:::important

For {{ ibm_power_title }} and {{ ibm_z_title }}:

*   You must run the control plane on machine types that are based on 64-bit x86 architecture or s390x architecture
*   You must run node pools on {{ ibm_power_title }} or {{ ibm_z_title }}

:::


In the following table, the management cluster version is the {{ product_title }} version where the {{ mce_short }} is enabled:

**Required {{ product_title }} versions for platforms**

| Hosted cluster platform | Management cluster version | Hosted cluster version |
| --- | --- | --- |
| {{ aws_full }} | 4.16, 4.18 - 4.22 | 4.16, 4.18 - 4.22 |
| {{ ibm_power_title }} | 4.18 - 4.22 | 4.18 - 4.22 |
| {{ ibm_z_title }} | 4.18 - 4.22 | 4.18 - 4.22 |
| {{ VirtProductName }} | 4.14, 4.16, 4.18 - 4.22 | 4.14, 4.16, 4.18 - 4.22 |
| Bare metal | 4.14, 4.16, 4.18 - 4.22 | 4.14, 4.16, 4.18 - 4.22 |
| Non-bare-metal agent machines (Technology Preview) | 4.16, 4.18 - 4.22 | 4.16, 4.18 - 4.22 |
| {{ rh_openstack_first }} (Technology Preview) | 4.19 - 4.22 | 4.19 - 4.22 |
| {{ azure_first }} (Technology Preview) | 4.22 | 4.22 |

## Multi-architecture support {id="hcp-matrix-multiarch_{{ context }}"}

The following tables indicate the supported architectures for {{ hcp }}, organized by platform. If an architecture is not listed, it is not yet fully supported.

**Multi-architecture support for {{ hcp }}**

| Platform | Control planes | Compute nodes | {{ product_title }} version support |
| --- | --- | --- | --- |
| {{ aws_short }} | 64-bit x86 | 64-bit x86 | 4.16, 4.18 - 4.22 |
| {{ aws_short }} | 64-bit x86 | ARM64 | 4.18 - 4.22 |
| {{ aws_short }} | ARM64 | ARM64 | 4.18 - 4.22 |
| {{ aws_short }} | ARM64 | 64-bit x86 | 4.18 - 4.22 |
| Bare metal (Agent platform) | 64-bit x86 | 64-bit x86 | 4.14, 4.16, 4.18 - 4.22 |
| Bare metal (Agent platform) | 64-bit x86 | ARM64 | 4.21 - 4.22 |
| {{ ibm_power_title }} | 64-bit x86 | 64-bit x86 | 4.19 - 4.22 |
| {{ ibm_power_title }} | 64-bit x86 | ppc64le | 4.18 - 4.22 |
| {{ ibm_z_title }} | 64-bit x86 | 64-bit x86 | 4.18 - 4.22 |
| {{ ibm_z_title }} | 64-bit x86 | s390x | 4.18 - 4.22 |
| {{ ibm_z_title }} | s390x | s390x | 4.20 - 4.22 |
| Non-bare-metal Agent machines (Technology Preview) | 64-bit x86 | 64-bit x86 | 4.16, 4.18 - 4.22 |
| {{ VirtProductName }} | 64-bit x86 | 64-bit x86 | 4.14, 4.16, 4.18 - 4.22 |
| {{ VirtProductName }} | s390x | s390x | 4.22 |
| {{ rh_openstack_first }} (Technology Preview) | 64-bit x86 | 64-bit x86 | 4.19 - 4.22 |

## Updates of {{ mce_short }} {id="hcp-matrix-updates_{{ context }}"}

When you update to another version of the {{ mce_short }}, your hosted cluster can continue to run if the HyperShift Operator that is included in the version of {{ mce_short }} supports the hosted cluster version. The following table shows which hosted cluster versions are supported on which updated {{ mce_short }} versions.


:::note

Although the HyperShift Operator supports the hosted cluster versions in the following table, {{ mce_short }} supports only as far back as 2 versions earlier than the current version. For example, if the current hosted cluster version is 4.21, {{ mce_short }} supports as far back as version 4.19. If you want to use a hosted cluster version that is earlier than one of the versions that {{ mce_short }} supports, you can detach your hosted clusters from {{ mce_short }} to be unmanaged, or you can use an earlier version of {{ mce_short }}. For instructions to detach your hosted clusters from {{ mce_short }}, see "Removing a cluster from management" ({{ rh_rhacm }} documentation). For more information about {{ mce_short }} support, see "The multicluster engine for Kubernetes operator 2.17 Support Matrix" (Red&#160;Hat Knowledgebase).

:::


**Hosted cluster version supported while updating {{ mce_short }}**

| {{ mce_short }} version | Supported hosted cluster version while updating |
| --- | --- |
| Updating from 2.5 to 2.6 | {{ product_title }} 4.14, 4.16 |
| Updating from 2.6 to 2.7 | {{ product_title }} 4.14, 4.16 |
| Updating from 2.7 to 2.8 | {{ product_title }} 4.16 |
| Updating from 2.8 to 2.9 | {{ product_title }} 4.16, 4.18 |
| Updating from 2.9 to 2.10 | {{ product_title }} 4.18, 4.19 |
| Updating from 2.10 to 2.11 | {{ product_title }} 4.19, 4.20 |
| Updating from 2.11 to 2.17 | {{ product_title }} 4.20, 4.21 |

For example, if you have an {{ product_title }} 4.18 hosted cluster on the management cluster and you update from {{ mce_short }} 2.8 to 2.9, the hosted cluster can continue to run.

## Technology Preview features {id="hcp-matrix-tp_{{ context }}"}

For a list of features in this release that have a Technology Preview status, see the "Technology Preview features status" section of the _{{ hcp_capital }} release notes_.