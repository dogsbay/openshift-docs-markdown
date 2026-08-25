---
title: "Integrating SPIRE federation with multi-cluster {{ SMProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Integrating SPIRE federation with multi-cluster {{ SMProductName }} {id="zero-trust-manager-mesh-integration-multi-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-mesh-integration-multi-cluster" %}

Configure {{ spire_full }} (SPIRE) federation across multiple {{ product_title }} clusters to enable cross-cluster mutual TLS (mTLS) authentication and zero trust workload identity in a multi-cluster service mesh deployment.

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-multi-cluster-spire-mesh-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-prepare-spire-multi-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-spire-federation-multi-cluster.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Installing the Zero Trust Workload Identity Manager](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#zero-trust-manager-install)
*   [Zero Trust Workload Identity Manager SPIRE federation](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/security_and_compliance/zero-trust-workload-identity-manager#zero-trust-manager-spire-federation_zero-trust-manager-oidc-federation)

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-configure-spire-mesh-multi-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-istiocni.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-istio-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-verify-spire-istio-multi-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-mutual-tls-verification.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-east-west.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-exchange-remote-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-multi-mesh-verification.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-spire-multicluster_{{ context }}"}

*   [Multi-cluster configuration overview](https://docs.redhat.com/en/documentation/red_hat_openshift_service_mesh/latest/html-single/installing/index#ossm-multi-cluster-configuration-overview_ossm-multi-cluster-topologies)