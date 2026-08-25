{%- set _mod_docs_content_type = "CONCEPT" %}
# Audit configuration {id="network-policy-audit-configuration_{{ context }}"}

Audit logging configuration in {{ product_title }} is defined in the `policyAuditConfig` section of the cluster `Network` custom resource for OVN-Kubernetes. You can review these default settings to plan log destinations, file size limits, and rate limits before you enable logging. {._abstract}

The following YAML illustrates the default values for the audit logging:

```yaml title="Audit logging configuration"
apiVersion: operator.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  defaultNetwork:
    ovnKubernetesConfig:
      policyAuditConfig:
        destination: "null"
        maxFileSize: 50
        rateLimit: 20
        syslogFacility: local0
```

The following table describes the configuration fields for audit logging.