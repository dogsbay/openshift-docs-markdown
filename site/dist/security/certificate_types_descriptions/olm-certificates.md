---
title: OLM certificates
---

# OLM certificates {#cert-types-olm-certificates}

Understand how Operator Lifecycle Manager (OLM) manages certificates for OLM components and creates and rotates certificates when installing Operators that include webhooks or API services. In proxy environments, you must manage Operator certificates yourself because OLM does not update them.

## Management {#_management}

All certificates for Operator Lifecycle Manager (OLM) components, such as `olm-operator`, `catalog-operator`, `packageserver`, and `marketplace-operator`, are managed by the system.

When installing Operators that include webhooks or API services in their `ClusterServiceVersion` (CSV) object, OLM creates and rotates the certificates for these resources. Certificates for resources in the `openshift-operator-lifecycle-manager` namespace are managed by OLM.

OLM does not update the certificates of Operators that it manages in proxy environments. These certificates must be managed by the user using the subscription config.

**Additional resources**
{._additional-resources}

- [Configuring proxy support in Operator Lifecycle Manager](/openshift-docs-markdown/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
- [Proxy certificates](/openshift-docs-markdown/security/certificate_types_descriptions/proxy-certificates#proxy-certificates)
- [Replacing the default ingress certificate](/openshift-docs-markdown/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)
- [Updating the CA bundle](/openshift-docs-markdown/security/certificates/updating-ca-bundle#updating-ca-bundle)
