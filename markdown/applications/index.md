---
title: Building applications overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Building applications overview {id="building-applications-overview"}
{%- set context = "building-applications-overview" %}

You can organize workloads into isolated projects and streamline your application lifecycle by using the web console or command-line interface (CLI) to create, manage, and deploy applications in {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/applications-projects-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applications-application-lifecycle.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Working with projects](/applications/projects/working-with-projects#working-with-projects)
*   [Customizing the available cluster roles using the web console](/applications/projects/working-with-projects#odc-customizing-available-cluster-roles-using-the-web-console_projects)
*   [Configuring project creation](/applications/projects/configuring-project-creation#configuring-project-creation)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Creating a project as a another user](/applications/projects/creating-project-other-user#creating-project-other-user)
{%- endif %}
*   [Disabling project self-provisioning](/applications/projects/configuring-project-creation#disabling-project-self-provisioning_configuring-project-creation)
*   [Creating applications from installed Operators](/applications/creating_applications/creating-apps-from-installed-operators#creating-apps-from-installed-operators)
*   [Creating applications by using the CLI](/applications/creating_applications/creating-applications-using-cli#creating-applications-using-cli)
*   [Understanding deployments](/applications/deployments/what-deployments-are#what-deployments-are)
*   [Managing deployment processes](/applications/deployments/managing-deployment-processes#deployment-operations)
*   [Using deployment strategies](/applications/deployments/deployment-strategies#deployment-strategies)
*   [Idling applications](/applications/idling-applications#idling-applications)
*   [Understanding Helm](/applications/working_with_helm_charts/understanding-helm#understanding-helm)