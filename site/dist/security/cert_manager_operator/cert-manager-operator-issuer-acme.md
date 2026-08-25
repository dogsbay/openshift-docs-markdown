---
title: Configuring an ACME issuer
---

# Configuring an ACME issuer {#cert-manager-operator-issuer-acme}

The {{ cert_manager_operator }} supports using Automated Certificate Management Environment (ACME) CA servers, such as *Let’s Encrypt*, to issue certificates. Explicit credentials are configured by specifying the secret details in the `Issuer` API object. Ambient credentials are extracted from the environment, metadata services, or local files which are not explicitly configured in the `Issuer` API object.

The `Issuer` object is namespace scoped. It can only issue certificates from the same namespace. You can also use the `ClusterIssuer` object to issue certificates across all namespaces in the cluster.

```yaml {title="Example YAML file that defines the ClusterIssuer object"}
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: acme-cluster-issuer
spec:
  acme:
    ...
```

> [!NOTE]
> By default, you can use the `ClusterIssuer` object with ambient credentials. To use the `Issuer` object with ambient credentials, you must enable the `--issuer-ambient-credentials` setting for the cert-manager controller.

## Additional resources {#additional-resources_cert-manager-operator-issuer-acme}

- [Azure DNS](https://cert-manager.io/docs/configuration/acme/dns01/azuredns/)
- [{{ gcp_full }} DNS](https://cert-manager.io/docs/configuration/acme/dns01/google/)
- [Configuring cloud credentials for the {{ cert_manager_operator }} for the AWS Security Token Service cluster](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-authenticate#cert-manager-configure-cloud-credentials-aws-sts_cert-manager-authenticate)
- [Configuring cloud credentials for the {{ cert_manager_operator }} on AWS](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-authenticate#cert-manager-configure-cloud-credentials-aws-non-sts_cert-manager-authenticate)
- [Configuring cloud credentials for the {{ cert_manager_operator }} with {{ gcp_short }} Workload Identity](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-authenticate#cert-manager-configure-cloud-credentials-gcp-sts_cert-manager-authenticate)
- [Configuring cloud credentials for the {{ cert_manager_operator }} on {{ gcp_short }}](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-authenticate#cert-manager-configure-cloud-credentials-gcp-non-sts_cert-manager-authenticate)
- [HTTP01](https://cert-manager.io/docs/configuration/acme/http01/)
- [HTTP-01 challenge](https://letsencrypt.org/docs/challenge-types/#http-01-challenge)
- [DNS01](https://cert-manager.io/docs/configuration/acme/dns01/)
