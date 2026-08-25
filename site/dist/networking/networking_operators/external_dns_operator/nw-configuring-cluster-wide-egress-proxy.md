---
title: Configuring the cluster-wide proxy on the External DNS Operator
---

# Configuring the cluster-wide proxy on the External DNS Operator {#external-dns-operator-cluster-wide-proxy}

To propagate proxy settings to your deployed Operators, configure the cluster-wide proxy. The Operator Lifecycle Manager (OLM) automatically updates these Operators with the new `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables.
