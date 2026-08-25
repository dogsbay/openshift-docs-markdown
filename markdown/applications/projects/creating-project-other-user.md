---
title: Creating a project as another user
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating a project as another user {id="creating-project-other-user"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-project-other-user" %}

You can use impersonation to create a project on behalf of a different user account.

{% leveloffset +1 %}{% include "./modules/authentication-api-impersonation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/impersonation-project-creation.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [User impersonation (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation)