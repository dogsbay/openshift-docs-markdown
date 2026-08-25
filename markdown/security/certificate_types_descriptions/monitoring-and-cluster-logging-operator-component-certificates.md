---
title: Monitoring and OpenShift Logging Operator component certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Monitoring and OpenShift Logging Operator component certificates {id="cert-types-monitoring-and-cluster-logging-operator-component-certificates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-types-monitoring-and-cluster-logging-operator-component-certificates" %}

Review service certificate authority (CA) certificates for monitoring and {{ clo }} components in {{ product_title }}, including validity, automatic rotation, and system-managed namespaces.

## Expiration {id="monitor-logging-component-certificates-expiration_{{ context }}"}

Monitoring components secure their traffic with service CA certificates. These certificates are valid for 2 years and are replaced automatically on rotation of the service CA, which is every 13 months.

If the certificate is present in the `openshift-monitoring` or `openshift-logging` namespace, it is system managed and rotated automatically.

## Management {id="monitor-logging-component-certificates-management_{{ context }}"}

These certificates are managed by the system and not the user.