{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum software version of components {id="cnf-image-based-upgrade-cluster-validated-software_{{ context }}"}

The image-based upgrade requires specific minimum software versions for various components depending on your deployment method. {._abstract}

Depending on your deployment method, the image-based upgrade requires the following minimum software versions.

**Minimum software version of components**

| Component | Software version | Required |
| --- | --- | --- |
| {{ lcao }} | 4.16 | Yes |
| {{ oadp_short }} Operator | 1.4.1 | Yes |
| Managed cluster version | 4.14.13 | Yes |
| Hub cluster version | 4.16 | No |
| {{ rh_rhacm }} | 2.10.2 | No |
| {{ ztp }} plugin | 4.16 | Only for {{ ztp }} deployment method |
| {{ gitops_title }} | 1.12 | Only for {{ ztp }} deployment method |
| {{ cgu_operator_first }} | 4.16 | Only for {{ ztp }} deployment method |
| Local Storage Operator <sup>[1]</sup> | 4.14 | Yes |
| {{ lvms_first }} <sup>[1]</sup> | 4.14.2 | Yes |

1.  The persistent storage must be provided by either the {{ lvms }} or the Local Storage Operator, not both.