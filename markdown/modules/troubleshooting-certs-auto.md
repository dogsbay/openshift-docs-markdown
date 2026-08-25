{%- set _mod_docs_content_type = "CONCEPT" %}
# Certificates managed by the cluster {id="troubleshooting-certs-auto_{{ context }}"}

You only need to check cluster-managed certificates if you detect an issue in the logs.
The following certificates are automatically managed by the cluster: {._abstract}

*   Service CA certificates
*   Node certificates
*   Bootstrap certificates
*   etcd certificates
*   OLM certificates
*   Machine Config Operator certificates
*   Monitoring and cluster logging Operator component certificates
*   Control plane certificates
*   Ingress certificates