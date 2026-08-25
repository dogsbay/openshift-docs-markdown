{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring Argo CD RBAC {id="configuring-argo-cd-rbac"}
{%- set context = "configuring-argo-cd-rbac" %}

By default, if you are logged into Argo CD using RHSSO, you are a read-only user. You can change and manage the user level access. {._abstract}

{% leveloffset +1 %}{% include "./modules/configuring-user-level-access.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/modify-rhsso-requests-limits.md" %}{% endleveloffset %}