{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Manage administration roles and users {id="osd-admin-roles"}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

{%- set context = "osd-admin-roles" %}

Keep your {{ product_title }} cluster secure and up-to-date by managing administration roles and users effectively. {._abstract}

{% leveloffset +1 %}{% include "./modules/understanding-admin-roles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/managing-dedicated-administrators.md" %}{% endleveloffset %}