{%- set _mod_docs_content_type = "CONCEPT" %}
# Required data for installation {id="required-data-for-installation_{{ context }}"}

Before you deploy {{ product_title }}, collect the essential information required for your environment.  {._abstract}

Gather the following information from all cluster nodes:

*   Out-of-band management IP
    *   Examples
        *   Dell (iDRAC) IP
        *   HP (iLO) IP
        *   Fujitsu (iRMC) IP
*   When using the `provisioning` network
    *   NIC (`provisioning`) MAC address
    *   NIC (`baremetal`) MAC address
*   When omitting the `provisioning` network
    *   NIC (`baremetal`) MAC address