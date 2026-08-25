{%- set _mod_docs_content_type = "REFERENCE" %}
# Telco hub reference configuration software specifications {id="telco-hub-software-stack_{{ context }}"}

The following y-stream versions were used in validation of the telco hub solution for {{ product_title }} clusters. {._abstract}

| Hub Cluster Component | Software Version (y-stream) |
| --- | --- |
| {{ product_title }} | 4.22 |
| {{ rh_rhacm_first }} | 2.17 |
| Local Storage Operator | 4.22 |
| cert-manager Operator | 1.19 |
| {{ odf_first }} | 4.21 |
| {{ gitops_title }} | 1.20 |
| {{ ztp_first }} plugins | 4.22 |
| {{ mce_short }} PolicyGenerator plugin | 2.17 |
| {{ cgu_operator_first }} | 4.22 |
| Cluster Logging Operator | 6.5 |
| {{ oadp_first }} | The version aligned with the {{ rh_rhacm }} release. |

*   {{ odf_short }} will be updated to 4.22 when the aligned {{ odf_short }} version is released.
*   Cluster Logging Operator will be updated to 6.6 when the aligned Cluster Logging Operator version is released.
*   The cert-manager Operator and {{ gitops_title }} Operator are platform agnostic operators. 
The support lifecycle for these operators is independent from the support lifecycle for {{ product_title }}. 
You might need to update to a newer minor version of these operators at the end of an operator lifecycle, or when planning to update the {{ product_title }} cluster to continue support. 
For support lifecycle details for platform agnostic operators, see [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators).