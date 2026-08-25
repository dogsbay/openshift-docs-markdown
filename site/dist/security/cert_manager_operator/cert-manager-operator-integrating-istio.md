---
title: Integrating the {{ cert_manager_operator }} with Istio-CSR
---

# Integrating the {{ cert_manager_operator }} with Istio-CSR {#cert-manager-operator-integrating-istio}

The {{ cert_manager_operator }} provides enhanced support for securing workloads and control plane components in {{ SMProductName }} or Istio. This includes support for certificates enabling mutual TLS (mTLS), which are signed, delivered, and renewed using cert-manager issuers. You can secure Istio workloads and control plane components by using the {{ cert_manager_operator }} managed Istio-CSR agent.

With this Istio-CSR integration, Istio can now obtain certificates from the {{ cert_manager_operator }}, simplifying security and certificate management.

**Additional resources**

- [{{ cert_manager_operator }} issuer providers](/openshift-docs-markdown/security/cert_manager_operator/index#cert-manager-issuer-types_cert-manager-operator-about)
