{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure a cluster-wide PKI {id="configure-cluster-wide-pki-con_{{ context }}"}

You can add your organization’s custom Certificate Authority (CA) certificates to the cluster-wide truststore in {{ product_title }}. Adding a custom PKI ensures secure communication between internal components and allows workloads to trust your internal or self-signed certificates.