---
title: Working with projects
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Working with projects {id="working-with-projects"}
{%- set context = "projects" %}

A _project_ allows a community of users to organize and manage their content in isolation from other communities. {._abstract}


:::note

Projects starting with `openshift-` and `kube-` are 
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
default projects. For more information, see "Default projects".
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
default projects. 
{%- endif %}
These projects host cluster components that run as pods and other infrastructure components. As such, {{ product_title }} does not allow you to create projects starting with `openshift-` or `kube-` using the `oc new-project` command.
{%- if not openshift_dedicated %}
Cluster administrators can create these projects using the `oc adm new-project` command.
{%- endif %}
{%- if openshift_dedicated %}
For {{ product_title }} clusters that use the Customer Cloud Subscription (CCS) model, users with `cluster-admin` privileges can create these projects using the `oc adm new-project` command.
{%- endif %}

:::


{% if not openshift_dedicated %}
{% include "./snippets/default-projects.md" %}

{% endif %}
{% if openshift_dedicated %}

:::note

In {{ product_title }} clusters that use the Customer Cloud Subscription (CCS) model, you cannot assign an SCC to pods created in one of the default namespaces: `default`, `kube-system`, `kube-public`, `openshift-node`, `openshift-infra`, and `openshift`. You cannot use these namespaces for running pods or services. You cannot create any SCCs for {{ product_title }} clusters that use a Red Hat cloud account, because SCC resource creation requires `cluster-admin` privileges.

:::

{% endif %}

You can complete the following tasks on either the {{ product_title }} web console or the {{ oc_first }}:

*   Create a project in your cluster.
*   View a project.
*   Check the status of a project.
*   Delete a project.


:::important

When you delete a project, the server updates the project status to **Terminating** from **Active**.
The server then clears all content from a project that is in the **Terminating** state before finally removing the project. 
While a project is in **Terminating** status, you cannot add new content to the project. 

:::


{% leveloffset +1 %}{% include "./modules/creating-a-project-using-the-web-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Customizing the available cluster roles using the web console](/applications/projects/working-with-projects#odc-customizing-available-cluster-roles-using-the-web-console_projects)

{% leveloffset +1 %}{% include "./modules/creating-a-project-using-the-CLI.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/viewing-a-project-using-the-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/viewing-a-project-using-the-CLI.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-providing-project-permissions-using-developer-perspective.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-customizing-available-cluster-roles-using-the-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/adding-to-a-project.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-project-status-using-the-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-project-status-using-the-CLI.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deleting-a-project-using-the-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deleting-a-project-using-the-CLI.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Default projects](/authentication/using-rbac#rbac-default-projects_using-rbac)