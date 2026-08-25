{%- set _mod_docs_content_type = "REFERENCE" %}
# Platform support {id="nw-egress-ips-platform-support_{{ context }}"}

The Egress IP address feature that runs on a primary host network is supported on specific platforms. {._abstract}

The following table shows supported platforms for egress IP on primary host networks:

| Platform | Supported |
| --- | --- |
| Bare metal | Yes |
| {{ vmw_full }} | Yes |
| {{ rh_openstack_first }} | Yes |
| {{ aws_first }} | Yes |
| {{ gcp_first }} | Yes |
| {{ azure_full }} | Yes |
| {{ ibm_z_name }} and {{ ibm_linuxone_name }} | Yes |
| {{ ibm_z_name }} and {{ ibm_linuxone_name }} for {{ op_system_base_full }} KVM | Yes |
| {{ ibm_power_name }} | Yes |
| Nutanix | Yes |


:::important

Support for egress IP addresses in {{ azure_full }} is restricted to the infra subnet. As a workaround for this limitation, you can use a Network Address Translation (NAT) gateway instead of a general purpose public load balancer.

:::


The Egress IP address feature that runs on secondary host networks is supported on the following platform:

| Platform | Supported |
| --- | --- |
| Bare metal | Yes |