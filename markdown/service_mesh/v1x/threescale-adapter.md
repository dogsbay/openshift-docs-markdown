{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using the 3scale Istio adapter {id="threescale-adapter-v1x"}
{%- set context = "threescale-adapter-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

The 3scale Istio Adapter is an optional adapter that allows you to label a service running within the {{ SMProductName }} and integrate that service with the 3scale API Management solution.
It is not required for {{ SMProductName }}.

{% leveloffset +1 %}{% include "./modules/ossm-threescale-integrate-1x.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-threescale-cr.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ossm-threescale-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-threescale-manifests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-threescale-routing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-integration-settings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-caching.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-authentication.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-metrics-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-threescale-istio-adapter-verification.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Inspecting pod and container logs](https://docs.openshift.com/container-platform/4.7/support/troubleshooting/investigating-pod-issues.html#inspecting-pod-and-container-logs_investigating-pod-issues).

{% leveloffset +1 %}{% include "./modules/ossm-threescale-istio-adapter-troubleshooting-checklist.md" %}{% endleveloffset %}