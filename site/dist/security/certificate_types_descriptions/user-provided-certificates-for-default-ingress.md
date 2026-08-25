---
title: User-provided certificates for default ingress
---

# User-provided certificates for default ingress {#cert-types-user-provided-certificates-for-default-ingress}

Review user-provided ingress certificates in OpenShift Container Platform, including transport layer security (TLS) secret storage, `IngressController` references, and replacing Operator-generated defaults.

Use user-provided certificates for the default `IngressController` CR to complete the following tasks:

- Replace Operator-generated default certificates before production use.
- Store TLS secrets in the correct namespace.
- Reference the secret in the `IngressController` CR.

## Additional resources {#additional-resources_cert-types-user-provided-certificates-for-default-ingress}

- [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)
- [Setting a custom default certificate](/networking/networking_operators/ingress-operator#nw-ingress-setting-a-custom-default-certificate_configuring-ingress)
