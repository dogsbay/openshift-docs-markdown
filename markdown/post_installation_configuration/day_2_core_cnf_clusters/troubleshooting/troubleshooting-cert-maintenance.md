---
title: Certificate maintenance
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Certificate maintenance {id="troubleshooting-cert-maintenance"}
{%- set context = "troubleshooting-cert-maintenance" %}

Certificate maintenance is required for continuous cluster authentication.
As a cluster administrator, you must manually renew certain certificates, while others are automatically renewed by the cluster.

Learn about certificates in {{ product_title }} and how to maintain them by using the following resources:

*   [Which OpenShift certificates do rotate automatically and which do not in Openshift 4.x?](https://access.redhat.com/solutions/5018231)
*   [Checking etcd certificate expiry in OpenShift 4](https://access.redhat.com/solutions/7000968)

{% leveloffset +1 %}{% include "./modules/troubleshooting-certs-manual.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/troubleshooting-certs-manual-proxy.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Proxy certificates](/security/certificate_types_descriptions/proxy-certificates#proxy-certificates)

{% leveloffset +2 %}{% include "./modules/troubleshooting-certs-manual-user-provisioned.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [User-provisioned certificates for the API server](/security/certificate_types_descriptions/user-provided-certificates-for-api-server#cert-types-user-provided-certificates-for-the-api-server)

{% leveloffset +1 %}{% include "./modules/troubleshooting-certs-auto.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Service CA certificates](/security/certificate_types_descriptions/service-ca-certificates#cert-types-service-ca-certificates_cert-types-service-ca-certificates)
*   [Node certificates](/security/certificate_types_descriptions/node-certificates#cert-types-node-certificates_cert-types-node-certificates)
*   [Bootstrap certificates](/security/certificate_types_descriptions/bootstrap-certificates#cert-types-bootstrap-certificates_cert-types-bootstrap-certificates)
*   [etcd certificates](/security/certificate_types_descriptions/etcd-certificates#cert-types-etcd-certificates-cert-types-etcd-certificates)
*   [OLM certificates](/security/certificate_types_descriptions/olm-certificates#cert-types-olm-certificates_cert-types-olm-certificates)
*   [Machine Config Operator certificates](/security/certificate_types_descriptions/machine-config-operator-certificates#cert-types-machine-config-operator-certificates_cert-types-machine-config-operator-certificates)
*   [Monitoring and cluster logging Operator component certificates](/security/certificate_types_descriptions/monitoring-and-cluster-logging-operator-component-certificates#cert-types-monitoring-and-cluster-logging-operator-component-certificates_cert-types-monitoring-and-cluster-logging-operator-component-certificates)
*   [Control plane certificates](/security/certificate_types_descriptions/control-plane-certificates#cert-types-control-plane-certificates_cert-types-control-plane-certificates)
*   [Ingress certificates](/security/certificate_types_descriptions/ingress-certificates#cert-types-ingress-certificates_cert-types-ingress-certificates)

{% leveloffset +2 %}{% include "./modules/troubleshooting-certs-auto-etcd.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [etcd certificates](/security/certificate_types_descriptions/etcd-certificates#cert-types-etcd-certificates_cert-types-etcd-certificates)

{% leveloffset +2 %}{% include "./modules/troubleshooting-certs-auto-node.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Node certificates](/security/certificate_types_descriptions/node-certificates#cert-types-node-certificates_cert-types-node-certificates)

{% leveloffset +2 %}{% include "./modules/troubleshooting-certs-auto-service-ca.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Service CA certificates](/security/certificate_types_descriptions/service-ca-certificates#cert-types-service-ca-certificates_cert-types-service-ca-certificates)