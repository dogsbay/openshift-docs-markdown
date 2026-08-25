{%- set _mod_docs_content_type = "CONCEPT" %}
# Single tenancy deployment model {id="ossm-deploy-single-tenant_{{ context }}"}

In Istio, a tenant is a group of users that share common access and privileges for a set of deployed workloads. You can use tenants to provide a level of isolation between different teams. You can segregate access to different tenants using `NetworkPolicies`, `AuthorizationPolicies`, and `exportTo` annotations on istio.io or service resources.

Single tenant, cluster-wide {{ SMProductShortName }} control plane configurations are deprecated as of {{ SMProductName }} version 1.0. {{ SMProductName }} defaults to a multitenant model.