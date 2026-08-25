---
title: Troubleshooting your service mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting your service mesh {id="ossm-troubleshooting"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-ossm" %}

This section describes how to identify and resolve common problems in {{ SMProductName }}. Use the following sections to help troubleshoot and debug problems when deploying {{ SMProductName }} on {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/ossm-understanding-versions.md" %}{% endleveloffset %}

## Troubleshooting Operator installation {id="_troubleshooting_operator_installation"}

{% if openshift_enterprise %}
In addition to the information in this section, be sure to review the following topics:

*   [What are Operators?](/operators/understanding/olm-what-operators-are)
*   [Operator Lifecycle Management concepts](/operators/understanding/olm/olm-understanding-olm).
*   [OpenShift Operator troubleshooting section](/support/troubleshooting/troubleshooting-operator-issues).
*   [OpenShift installation troubleshooting section](/support/troubleshooting/troubleshooting-installations).
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-validating-operators.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-troubleshooting-operators.md" %}{% endleveloffset %}

## Troubleshooting the control plane {id="_troubleshooting_the_control_plane"}

The Service Mesh _control plane_ is composed of Istiod, which consolidates several previous control plane components (Citadel, Galley, Pilot) into a single binary. Deploying the `ServiceMeshControlPlane` also creates the other components that make up {{ SMProductName }} as described in the [architecture](/service_mesh/v2x/ossm-architecture#ossm-architecture_ossm-architecture) topic.

{% leveloffset +2 %}{% include "./modules/ossm-validating-smcp.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-kiali-accessing-console.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-jaeger-accessing-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-troubleshooting-smcp.md" %}{% endleveloffset %}

## Troubleshooting the data plane {id="_troubleshooting_the_data_plane"}

The _data plane_ is a set of intelligent proxies that intercept and control all inbound and outbound network communications between services in the service mesh.

{{ SMProductName }} relies on a proxy sidecar within the application’s pod to provide service mesh capabilities to the application.

{% leveloffset +2 %}{% include "./modules/ossm-troubleshooting-injection.md" %}{% endleveloffset %}

For more information about sidecar injection, see [Enabling automatic injection](/service_mesh/v2x/prepare-to-deploy-applications-ossm#ossm-automatic-sidecar-injection_deploying-applications-ossm)

{% leveloffset 2 %}{% include "./modules/ossm-troubleshooting-proxy.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
For more information about troubleshooting pod issues, see [Investigating pod issues](/support/troubleshooting/investigating-pod-issues)
{% endif %}

{% leveloffset +1 %}{% include "./modules/support.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-knowledgebase-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/support-knowledgebase-search.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/ossm-about-collecting-ossm-data.md" %}{% endleveloffset %}

For prompt support, supply diagnostic information for both {{ product_title }} and {{ SMProductName }}.
{% endif %}

{% leveloffset +2 %}{% include "./modules/support-submitting-a-case.md" %}{% endleveloffset %}