{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Custom resources {id="ossm-custom-resources-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-controler-items-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

You can customize your {{ SMProductName }} by modifying the default {{ SMProductShortName }} custom resource or by creating a new custom resource.

## Prerequisites {id="_prerequisites"}
*   An account with the `cluster-admin` role.
*   Completed the [Preparing to install {{ SMProductName }}](/service_mesh/v1x/preparing-ossm-installation#preparing-ossm-installation-v1x) process.
*   Have installed the operators.

{% leveloffset +1 %}{% include "./modules/ossm-cr-example-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-cr-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-istio-global.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-gateway.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
Cluster administrators can refer to "Using wildcard routes" in [Ingress Operator in {{ product_title }}](/networking/networking_operators/ingress-operator#using-wildcard-routes) for instructions on how to enable subdomains.
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-mixer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-cr-pilot.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-configuring-kiali-v1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-configuring-jaeger-v1x.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-configuring-jaeger-existing-v1x.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-jaeger-config-elasticsearch-v1x.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-jaeger-config-es-cleaner-v1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-cr-threescale.md" %}{% endleveloffset %}