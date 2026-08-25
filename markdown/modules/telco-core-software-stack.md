{%- set _mod_docs_content_type = "REFERENCE" %}
# Telco core reference configuration software specifications {id="telco-core-software-stack_{{ context }}"}

The Red&#160;Hat telco core {{ product_version }} solution has been validated using the following Red&#160;Hat software products for {{ product_title }} clusters. {._abstract}

**Telco core cluster validated software components**

| Component | Software version |
| --- | --- |
| {{ rh_rhacm_first }} | 2.17 |
| {{ gitops_title }} | 1.20 |
| cert-manager Operator | 1.19 |
| Cluster Logging Operator | 6.5 |
| {{ rh_storage }} | 4.22 |
| SR-IOV Network Operator | 4.22 |
| MetalLB | 4.22 |
| NMState Operator | 4.22 |
| NUMA-aware scheduler | 4.22 |

*   {{ rh_storage }} is expected to be updated to 4.22 when the aligned {{ rh_storage }} version is released.
*   The Cluster Logging Operator is expected to be updated to 6.6 when the aligned version is released.
*   The cert-manager Operator and {{ gitops_title }} Operator are platform-agnostic operators.
The support lifecycle for these operators is independent from the support lifecycle for {{ product_title }}.
You might need to update to a newer minor version of these operators at the end of an operator lifecycle, or when planning to update the {{ product_title }} cluster to continue support.
For support lifecycle details for platform-agnostic operators, see [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators).