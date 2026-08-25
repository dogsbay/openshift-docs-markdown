{%- set _mod_docs_content_type = "REFERENCE" %}
# Security overview {id="security-overview_{{ context }}"}

It is important to understand how to properly secure various aspects of your {{ product_title }} cluster. {._abstract}

## Container security {id="container-security_{{ context }}"}

A good starting point to understanding {{ product_title }} security is to review the concepts in [Understanding container security](/security/container_security/security-understanding#security-understanding). This and subsequent sections provide a high-level walkthrough of the container security measures available in {{ product_title }}, including solutions for the host layer, the container and orchestration layer, and the build and application layer. These sections also include information on the following topics:

*   Why container security is important and how it compares with existing security standards.
*   Which container security measures are provided by the host ({{ op_system }} and {{ op_system_base }}) layer and
which are provided by {{ product_title }}.
*   How to evaluate your container content and sources for vulnerabilities.
*   How to design your build and deployment process to proactively check container content.
*   How to control access to containers through authentication and authorization.
*   How networking and attached storage are secured in {{ product_title }}.
*   Containerized solutions for API management and SSO.

## Auditing {id="auditing_{{ context }}"}

{{ product_title }} auditing provides a security-relevant chronological set of records documenting the sequence of activities that have affected the system by individual users, administrators, or other components of the system. Administrators can [configure the audit log policy](/security/audit-log-policy-config#audit-log-policy-config) and [view audit logs](/security/audit-log-view#audit-log-view).

## Certificates {id="certificates_{{ context }}"}

Certificates are used by various components to validate access to the cluster. Administrators can [replace the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress), [add API server certificates](/security/certificates/api-server#api-server-certificates), or [add a service certificate](/security/certificates/service-serving-certificate#add-service-serving).

You can also review more details about the types of certificates used by the cluster:

*   [User-provided certificates for the API server](/security/certificate_types_descriptions/user-provided-certificates-for-api-server#cert-types-user-provided-certificates-for-the-api-server)
*   [Proxy certificates](/security/certificate_types_descriptions/proxy-certificates#proxy-certificates)
*   [Service CA certificates](/security/certificate_types_descriptions/service-ca-certificates#cert-types-service-ca-certificates)
*   [Node certificates](/security/certificate_types_descriptions/node-certificates#cert-types-node-certificates)
*   [Bootstrap certificates](/security/certificate_types_descriptions/bootstrap-certificates#cert-types-bootstrap-certificates)
*   [etcd certificates](/security/certificate_types_descriptions/etcd-certificates#cert-types-etcd-certificates)
*   [OLM certificates](/security/certificate_types_descriptions/olm-certificates#cert-types-olm-certificates)
*   [Aggregated API client certificates](/security/certificate_types_descriptions/aggregated-api-client-certificates#cert-types-aggregated-api-client-certificates)
*   [Machine Config Operator certificates](/security/certificate_types_descriptions/machine-config-operator-certificates#cert-types-machine-config-operator-certificates)
*   [User-provided certificates for default ingress](/security/certificate_types_descriptions/user-provided-certificates-for-default-ingress#cert-types-user-provided-certificates-for-default-ingress)
*   [Ingress certificates](/security/certificate_types_descriptions/ingress-certificates#cert-types-ingress-certificates)
*   [Monitoring and cluster logging Operator component certificates](/security/certificate_types_descriptions/monitoring-and-cluster-logging-operator-component-certificates#cert-types-monitoring-and-cluster-logging-operator-component-certificates)
*   [Control plane certificates](/security/certificate_types_descriptions/control-plane-certificates#cert-types-control-plane-certificates)

## Encrypting data {id="encrypting-data_{{ context }}"}

You can [enable etcd encryption](/etcd/etcd-encrypt#etcd-encrypt) for your cluster to provide an additional layer of data security. For example, it can help protect the loss of sensitive data if an etcd backup is exposed to the incorrect parties.

## Vulnerability scanning {id="vulnerability-scanning_{{ context }}"}

Administrators can use the {{ rhq_cso }} to run [vulnerability scans](/security/pod-vulnerability-scan#pod-vulnerability-scan) and review information about detected vulnerabilities.