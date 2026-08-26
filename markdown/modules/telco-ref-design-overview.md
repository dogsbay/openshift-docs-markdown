{%- set _mod_docs_content_type = "CONCEPT" %}
# Reference design specifications for telco RAN DU 5G deployments {id="telco-ref-design-overview_{{ context }}"}

Red Hat and certified partners offer deep technical expertise and support for networking and operational capabilities required to run telco applications on {{ product_title }} {{ product_version }} clusters. {._abstract}

Red Hat’s telco partners require a well-integrated, well-tested, and stable environment that can be replicated at scale for enterprise 5G solutions.
The telco core and RAN DU reference design specifications (RDS) outline the recommended solution architecture based on a specific version of {{ product_title }}.
Each RDS describes a tested and validated platform configuration for telco core and RAN DU use models.
The RDS ensures an optimal experience when running your applications by defining the set of critical KPIs for telco 5G core and RAN DU.
Following the RDS minimizes high severity escalations and improves application stability.

5G use cases are evolving and your workloads are continually changing.
Red Hat is committed to iterating over the telco core and RAN DU RDS to support evolving requirements based on customer and partner feedback.

The reference configuration includes the configuration of the far edge clusters and hub cluster components.

The reference configurations in this document are deployed using a centrally managed hub cluster infrastructure as shown in the following image.

**Figure 1. Telco RAN DU deployment architecture**

![A diagram showing two distinctive network far edge deployment processes](/images/474_OpenShift_OpenShift_RAN_RDS_arch_updates_1023.png)

## Supported CPU architectures for RAN DU {id="_supported_cpu_architectures_for_ran_du"}

**Supported CPU architectures for RAN DU**

| Architecture | Real-time kernel | Non-real-time kernel |
| --- | --- | --- |
| x86_64 | Yes | Yes |
| aarch64 | No | Yes |

*   For `aarch64` architecture CPUs, the non-real-time configuration uses the standard kernel with a 64k page size.