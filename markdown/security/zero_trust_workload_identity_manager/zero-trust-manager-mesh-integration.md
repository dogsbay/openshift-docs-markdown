---
title: Integrating Red Hat OpenShift Service Mesh with Zero Trust Workload Identity Manager in a single-cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Integrating Red Hat OpenShift Service Mesh with Zero Trust Workload Identity Manager in a single-cluster {id="zero-trust-manager-mesh-integration_{{ context }}"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-mesh-integration" %}

Deploy and configure {{ spire_full }} as the certificate authority (CA) for {{ SMProductName }} workloads, replacing the Istio built-in CA with SPIFFE-compliant identities and automatically rotated short-lived certificates.

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-about-spire-integration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-mesh-architecture.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-spire.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-istio.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-service-mesh-zero-trust_{{ context }}"}

*   [About OpenShift Service Mesh](https://docs.redhat.com/en/documentation/red_hat_openshift_service_mesh/3.3/html-single/about/index)
*   [Installing OpenShift Service Mesh](https://docs.redhat.com/en/documentation/red_hat_openshift_service_mesh/3.3/html-single/installing/index#ossm-supported-platforms-configurations)