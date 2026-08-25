{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Service Mesh Release Notes {id="service-mesh-release-notes-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-release-notes-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

{% leveloffset +1 %}{% include "./modules/ossm-servicemesh-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support.md" %}{% endleveloffset %}

When opening a support case, it is helpful to provide debugging
information about your cluster to Red Hat Support.

The `must-gather` tool enables you to collect diagnostic information about your
{{ product_title }} cluster, including virtual machines and other data related to
{{ SMProductName }}.

For prompt support, supply diagnostic information for both {{ product_title }}
and {{ SMProductName }}.

{% leveloffset +2 %}{% include "./modules/about-must-gather.md" %}{% endleveloffset %}

### Prerequisites {id="_prerequisites"}

*   Access to the cluster as a user with the `cluster-admin` role.
*   The {{ product_title }} CLI (`oc`) installed.

{% leveloffset +2 %}{% include "./modules/ossm-about-collecting-ossm-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-supported-configurations-v1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-rn-new-features-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-rn-deprecated-features-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-rn-known-issues-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-rn-fixed-issues-1x.md" %}{% endleveloffset %}