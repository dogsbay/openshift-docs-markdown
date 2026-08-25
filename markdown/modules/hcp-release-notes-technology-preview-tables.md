{%- set _mod_docs_content_type = "REFERENCE" %}
# Technology Preview features status {id="hcp-release-notes-technology-preview-tables_{{ context }}"}

Some features in this release are currently in Technology Preview. These experimental features are not intended for production use. Note the following scope of support on the Red&#160;Hat Customer Portal for these features:

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

In the following table, features are marked with the following statuses:

*   _Not Available_
*   _Technology Preview_
*   _General Availability_
*   _Deprecated_
*   _Removed_


:::important

For {{ ibm_power_title }} and {{ ibm_z_title }}, the following exceptions apply:

*   For version 4.20 and later, you must run the control plane on machine types that are based on 64-bit x86 architecture or s390x architecture, and node pools on {{ ibm_power_title }} or {{ ibm_z_title }}.
*   For version 4.19 and earlier, you must run the control plane on machine types that are based on 64-bit x86 architecture, and node pools on {{ ibm_power_title }} or {{ ibm_z_title }}.

:::


**{{ hcp_capital }} GA and TP tracker**

| Feature | 4.20 | 4.21 | 4.22 |
| --- | --- | --- | --- |
| {{ hcp_capital }} for {{ product_title }} using non-bare-metal agent machines | Technology Preview | Technology Preview | Technology Preview |
| {{ hcp_capital }} for {{ product_title }} on {{ rh_openstack }} | Technology Preview | Technology Preview | Technology Preview |
| Custom taints and tolerations | Technology Preview | Technology Preview | Technology Preview |
| NVIDIA GPU devices on {{ hcp }} for {{ VirtProductName }} | Technology Preview | Technology Preview | Technology Preview |
| {{ hcp_capital }} for {{ VirtProductName }} on {{ ibm_z_title }} ^[1]^ | Not Available | Technology Preview | General Availability |
| {{ hcp_capital }} on {{ ibm_z_title }} in a disconnected environment | General Availability | General Availability | General Availability |
| {{ hcp_capital }} for {{ product_title }} on {{ azure_first }} | Not Available | Not Available | Technology Preview |
| Backup and restore with the etcd snapshot method | Not Available | Not Available | Technology Preview |
| Restoring a hosted cluster to a new management cluster by using {{ oadp_short }} | Technology Preview | Technology Preview | Technology Preview |

1.  {{ hcp_capital }} for {{ VirtProductName }} on {{ ibm_z_title }} is supported as Technology Preview starting with {{ product_title }} 4.21, {{ mce }} 2.11, and {{ rh_rhacm_first }} 2.16. Creating {{ hcp }} with external infrastructure is not supported.