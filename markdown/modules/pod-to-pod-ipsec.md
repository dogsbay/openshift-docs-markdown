{%- set _mod_docs_content_type = "CONCEPT" %}
# IPsec encryption for pod-to-pod traffic {id="pod-to-pod-ipsec_{{ context }}"}

For IPsec encryption of pod-to-pod traffic, the following sections describe which specific pod-to-pod traffic is encrypted, what kind of encryption protocol is used, and how X.509 certificates are handled. These sections do not apply to IPsec encryption between the cluster and external hosts, which you must configure manually for your specific external network infrastructure.