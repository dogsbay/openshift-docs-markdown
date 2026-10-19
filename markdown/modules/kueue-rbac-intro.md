{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure role-based permissions for {{ kueue_name }} {id="kueue-rbac-intro_{{ context }}"}

You can configure role-based access control (RBAC) for your {{ kueue_name }} deployment to control which users can create specific {{ kueue_name }} objects.  {._abstract}

The {{ kueue_name }} Operator deploys default cluster roles for batch administrators and batch users that you bind to your own users and groups.