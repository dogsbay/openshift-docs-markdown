{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Network verification for {{ product_title }} clusters {id="osd-network-verification_{{ context }}"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "network-verification" %}

Network verification checks run automatically when you deploy
{%- if openshift_dedicated %}
an {{ product_title }}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }}
{%- endif %}
cluster into an existing Virtual Private Cloud (VPC) or create an additional machine pool with a subnet that is new to your cluster. The checks validate your network configuration and highlight errors, enabling you to resolve configuration issues before cluster deployment. You can also run the network verification checks manually to validate the configuration for an existing cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/understanding-network-verification.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nv-scope-network-verification-checks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/automatic-network-verification-bypassing.md" %}{% endleveloffset %}

{% if openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/running-network-verification-manually.md" %}{% endleveloffset %}

{% endif %}
{% if openshift_rosa or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/running-network-verification-manually-ocm.md" %}{% endleveloffset %}

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +2 %}{% include "./modules/running-network-verification-manually-cli.md" %}{% endleveloffset %}

{%- endif %}