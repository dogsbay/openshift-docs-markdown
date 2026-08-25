---
title: Understand Gateway API
---

# Understand Gateway API {#understand-gateway-api_{{ context }}}

To optimize network traffic management and implement routing policies in OpenShift Container Platform, use Gateway API. By adopting this community-managed Kubernetes mechanism, you can configure advanced routing at both the transport (L4) and application (L7) layers while leveraging various vendor-supported implementations to meet your specific networking requirements.

A well-designed Gateway API deployment helps you achieve a portable, role-oriented routing infrastructure. To successfully plan your Gateway API implementation, review the following concepts:

- Understand the benefits and limitations of Gateway API.
- Review OpenShift Container Platform implementation specifics to avoid unsupported features.
- Choose between shared or dedicated deployment topologies.

> [!IMPORTANT]
> Gateway API does not support user-defined networks (UDN).
