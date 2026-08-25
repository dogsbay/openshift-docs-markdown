{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites and Limitations for {{ FusionSAN }} {id="fusion-access-san-prereqs_{{ context }}"}

Prerequisites and limitations are provided for installing and configuring {{ FusionSAN }}. {._abstract}

## Prerequisites {id="_prerequisites"}

Installing and configuring {{ FusionSAN }} require the following prerequisites:

*   Bare-metal worker nodes with attached SAN storage.
*   A working container registry enabled.
*   All worker nodes must connect to the same LUNs.

    A shared LUN is a shared disk that is accessed by all worker nodes simultaneously.
*   A Kubernetes pull secret.

## Limitations {id="_limitations"}

*   Limitations for {{ FusionSAN }} rely on the IBM Storage Scale container native limitations and can be found in the documentation for [IBM Storage Scale container native](https://www.ibm.com/docs/en/scalecontainernative/5.2.3?topic=overview-limitations).
*   Hosted control planes (HCP) clusters are not supported.