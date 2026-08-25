{%- set _mod_docs_content_type = "CONCEPT" %}
# Failure domain requirements {id="installation-nutanix-failure-domains-req_{{ context }}"}

When planning to use failure domains, you must meet several Nutanix Prism Central, networking, and subnet requirements. {._abstract}

*   All Nutanix Prism Element instances must be managed by the same instance of Prism Central. A deployment that is comprised of multiple Prism Central instances is not supported.
*   The machines that make up the Prism Element clusters must reside on the same Ethernet network for failure domains to be able to communicate with each other.
*   A subnet is required in each Prism Element that will be used as a failure domain in the {{ product_title }} cluster. When defining these subnets, they must share the same IP address prefix (CIDR) and should contain the virtual IP addresses that the {{ product_title }} cluster uses.