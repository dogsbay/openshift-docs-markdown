---
title: Service mesh deployment models
---

# Service mesh deployment models {#ossm-deployment-models}

{{ SMProductName }} supports several different deployment models that can be combined in different ways to best suit your business requirements.

In Istio, a tenant is a group of users that share common access and privileges for a set of deployed workloads. You can use tenants to provide a level of isolation between different teams. You can segregate access to different tenants using `NetworkPolicies`, `AuthorizationPolicies`, and `exportTo` annotations on istio.io or service resources.
