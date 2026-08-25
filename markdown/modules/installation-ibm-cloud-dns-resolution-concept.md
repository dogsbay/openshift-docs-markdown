{%- set _mod_docs_content_type = "CONCEPT" %}
# DNS resolution configuration {id="configuring-dns-resolution_{{ context }}"}

When installing a cluster on {{ ibm_cloud_name }}, the method for configuring DNS resolution depends on whether you are deploying a public or private cluster. {._abstract}

How you configure DNS resolution depends on the type of {{ product_title }} cluster you are installing:

*   If you are installing a public cluster, you use {{ ibm_cloud_title }} Internet Services (CIS).
*   If you are installing a private cluster, you use {{ ibm_cloud_name }} DNS Services (DNS Services).