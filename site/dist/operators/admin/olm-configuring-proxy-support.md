---
title: Configuring proxy support in Operator Lifecycle Manager
---

# Configuring proxy support in Operator Lifecycle Manager {#olm-configuring-proxy-support}

If a global proxy is configured on your OpenShift Container Platform cluster, Operator Lifecycle Manager (OLM) automatically configures Operators that it manages with the cluster-wide proxy. However, you can also configure installed Operators to override the global proxy or inject a custom CA certificate.

**Additional resources**

- [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)
- [Configuring a custom PKI (custom CA certificate)](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)

## Additional resources {#additional-resources_olm-configuring-proxy-support}

- [Proxy certificates](/security/certificate_types_descriptions/proxy-certificates#proxy-certificates)
- [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)
- [Updating the CA bundle](/security/certificates/updating-ca-bundle#updating-ca-bundle)
