---
title: Configuring the egress proxy for the {{ cert_manager_operator }}
---

# Configuring the egress proxy for the {{ cert_manager_operator }} {#cert-manager-operator-proxy}

If a cluster-wide egress proxy is configured in OpenShift Container Platform, Operator Lifecycle Manager (OLM) automatically configures Operators that it manages with the cluster-wide proxy. OLM automatically updates all of the Operator’s deployments with the `HTTP_PROXY`, `HTTPS_PROXY`, `NO_PROXY` environment variables.

You can inject any CA certificates that are required for proxying HTTPS connections into the {{ cert_manager_operator }}.

## Additional resources {#cert-manager-operator-proxy_additional-resources}

- [Configuring proxy support in Operator Lifecycle Manager](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
