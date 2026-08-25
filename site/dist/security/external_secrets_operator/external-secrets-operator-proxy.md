---
title: About the egress proxy for the External Secrets Operator for Red Hat OpenShift
---

# About the egress proxy for the External Secrets Operator for Red Hat OpenShift {#external-secrets-operator-proxy}

If a cluster-wide egress proxy is configured in OpenShift Container Platform, the Operator Lifecycle Manager (OLM) automatically configures Operators that it manages with the cluster-wide proxy. OLM automatically updates all of the Operator deployments with the `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables.

## Additional resources {#external-resources-operator-proxy_additional-resources}

- [Configuring proxy support in Operator Lifecycle Manager](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
