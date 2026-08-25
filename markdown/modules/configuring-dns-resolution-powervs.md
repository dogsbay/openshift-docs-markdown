{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring DNS resolution {id="configuring-dns-resolution-powervs_{{ context }}"}

DNS resolution configuration for {{ product_title }} on {{ ibm_power_server_name }} depends on whether you are installing a public or private cluster. Public clusters use {{ ibm_cloud_name }} Internet Services (CIS) and private clusters use {{ ibm_cloud_name }} DNS Services. {._abstract}

*   If you are installing a public cluster, you use {{ ibm_cloud_name }} Internet Services (CIS).
*   If you are installing a private cluster, you use {{ ibm_cloud_name }} DNS Services (DNS Services).