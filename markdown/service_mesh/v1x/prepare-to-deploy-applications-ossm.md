{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying applications on Service Mesh {id="deploying-applications-ossm-v1x"}
{%- set context = "deploying-applications-ossm-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

When you deploy an application into the {{ SMProductShortName }}, there are several differences between the behavior of applications in the upstream community version of Istio and the behavior of applications within a {{ SMProductName }} installation.

## Prerequisites {id="_prerequisites"}

*   Review [Comparing {{ SMProductName }} and upstream Istio community installations](/service_mesh/v1x/ossm-vs-community#ossm-vs-community-v1x)
*   Review [Installing {{ SMProductName }}](/service_mesh/v1x/installing-ossm#installing-ossm-v1x)

{% leveloffset +1 %}{% include "./modules/ossm-control-plane-templates-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-automatic-sidecar-injection.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-sidecar-injection-env-var.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-mixer-policy-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-config-network-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-tutorial-bookinfo-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-adding-destination-rules.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-verify-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-removing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-tutorial-jaeger-generating-traces.md" %}{% endleveloffset %}