---
title: Editing applications
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Editing applications {id="odc-editing-applications"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "odc-editing-applications" %}

You can edit the configuration and the source code of the application you create using the **Topology** view.

## Prerequisites {id="_prerequisites"}
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have the appropriate [roles and permissions](/authentication/using-rbac#default-roles_using-rbac) in a project to create and modify applications in {{ product_title }}.
{%- endif %}
*   You have [created and deployed an application on {{ product_title }} using the **Developer** perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have [logged in to the web console](/web_console/web-console#web-console) and have switched to [the **Developer** perspective](/web_console/web-console-overview#about-developer-perspective_web-console-overview).
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have logged in to the web console and have switched to the **Developer** perspective.
{% endif %}

{% leveloffset +1 %}{% include "./modules/odc-editing-source-code-using-developer-perspective.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-editing-application-configuration-using-developer-perspective.md" %}{% endleveloffset %}