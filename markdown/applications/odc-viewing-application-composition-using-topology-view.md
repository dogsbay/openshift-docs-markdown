---
title: Viewing application composition by using the Topology view
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Viewing application composition by using the Topology view {id="odc-viewing-application-composition-using-topology-view"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "viewing-application-composition-using-topology-view" %}

The **Topology** view in the **Developer** perspective of the web console provides a visual representation of all the applications within a project, their build status, and the components and services associated with them.

## Prerequisites {id="_prerequisites"}
To view your applications in the **Topology** view and interact with them, ensure that:

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have [logged in to the web console](/web_console/web-console#web-console).
*   You have the appropriate [roles and permissions](/authentication/using-rbac#default-roles_using-rbac) in a project to create applications and other workloads in {{ product_title }}.
*   You are in [the **Developer** perspective](/web_console/web-console-overview#about-developer-perspective_web-console-overview).
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have logged in to the web console.
*   You are in the **Developer** perspective.
{% endif %}

{% leveloffset +1 %}{% include "./modules/odc-viewing-application-topology.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-interacting-with-applications-and-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-scaling-application-pods-and-checking-builds-and-routes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-adding-components-to-an-existing-project.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-grouping-multiple-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-adding-services-to-application.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-removing-services-from-application.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-labels-and-annotations-used-for-topology-view.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   See [Importing a codebase from Git to create an application](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-importing-codebase-from-git-to-create-application_odc-creating-applications-using-developer-perspective) for more information on creating an application from Git.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   See [Exporting applications](/applications/odc-exporting-applications#odc-exporting-applications).
{% endif %}