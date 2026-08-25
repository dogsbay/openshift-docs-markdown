{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Revoke privileges and access to an {{ product_title }} cluster {id="osd-revoking-cluster-privileges"}

{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "osd-revoking-cluster-privileges" %}

As a cluster owner, you can revoke admin privileges and user access to a {{ product_title }} cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/osd-revoke-admin-privileges.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/osd-revoke-user-access.md" %}{% endleveloffset %}