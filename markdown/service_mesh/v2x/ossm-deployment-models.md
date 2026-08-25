---
title: Service mesh deployment models
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Service mesh deployment models {id="ossm-deployment-models"}
{%- set context = "ossm-deployment-models" %}

{{ SMProductName }} supports several different deployment models that can be combined in different ways to best suit your business requirements.

In Istio, a tenant is a group of users that share common access and privileges for a set of deployed workloads. You can use tenants to provide a level of isolation between different teams. You can segregate access to different tenants using `NetworkPolicies`, `AuthorizationPolicies`, and `exportTo` annotations on istio.io or service resources.

{% leveloffset +1 %}{% include "./modules/ossm-deploy-cluster-wide-mesh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-deploy-multitenant.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-about-migrating-to-cluster-wide.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-excluding-namespaces-from-cluster-wide-mesh-console.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-excluding-namespaces-from-cluster-wide-mesh-cli.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-defining-namespace-receive-sidecar-injection-cluster-wide-mesh-console.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-defining-namespace-receive-sidecar-injection-cluster-wide-mesh-cli.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-excluding-individual-pods-from-cluster-wide-mesh-console.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-excluding-individual-pods-from-cluster-wide-mesh-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-deploy-multi-mesh.md" %}{% endleveloffset %}