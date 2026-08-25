---
title: Using the 3scale Istio adapter
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using the 3scale Istio adapter {id="threescale-adapter"}
{%- set context = "threescale-adapter" %}

The 3scale Istio Adapter is an optional adapter that allows you to label a service running within the {{ SMProductName }} and integrate that service with the 3scale API Management solution.
It is not required for {{ SMProductName }}.


:::important

You can only use the 3scale Istio adapter with {{ SMProductName }} versions 2.0 and below. The Mixer component was deprecated in release 2.0 and removed in release 2.1. For {{ SMProductName }} versions 2.1.0 and later you should use the [3scale WebAssembly module](/service_mesh/v2x/ossm-threescale-webassembly-module#ossm-threescale-webassembly-module).

If you want to enable 3scale backend cache with the 3scale Istio adapter, you must also enable Mixer policy and Mixer telemetry. See [Deploying the Red Hat OpenShift Service Mesh control plane](/service_mesh/v2x/ossm-create-smcp#ossm-create-smcp).

:::


{% leveloffset +1 %}{% include "./modules/ossm-threescale-integrate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-threescale-cr.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-threescale-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-threescale-manifests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-threescale-routing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-integration-settings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-caching.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-authentication.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/threescale-backend-cache.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/threescale-istio-adapter-apicast.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-istio-adapter-verification.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Inspecting pod and container logs](https://docs.openshift.com/container-platform/4.7/support/troubleshooting/investigating-pod-issues.html#inspecting-pod-and-container-logs_investigating-pod-issues).

{% leveloffset +1 %}{% include "./modules/ossm-threescale-istio-adapter-troubleshooting-checklist.md" %}{% endleveloffset %}