---
title: "Tutorial: Deploying an application by using the web console"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Tutorial: Deploying an application by using the web console {id="dev-app-web-console"}
{%- set context = "dev-app-web-console" %}

To learn how to stand up an application on {{ product_title }} by using the web console, follow the provided tutorial. In this tutorial, you will deploy the services that are required for an application that displays a map of national parks across the world. {._abstract}

To complete this tutorial, you will perform the following steps:

1.  [Create a project for the application](/tutorials/dev-app-web-console#getting-started-web-console-creating-new-project_dev-app-web-console).

    This step allows your application to be isolated from other cluster user’s workloads.
1.  [Grant view permissions](/tutorials/dev-app-web-console#getting-started-web-console-granting-permissions_dev-app-web-console).

    This step grants `view` permissions to interact with the OpenShift API to help discover services and other resources running within the project.
1.  [Deploy the front-end application](/tutorials/dev-app-web-console#getting-started-web-console-deploying-first-image_dev-app-web-console).

    This step deploys the `parksmap` front-end application, exposes it externally, and scales it up to two instances.
1.  [Deploy the back-end application](/tutorials/dev-app-web-console#getting-started-web-console-deploying-python-app_dev-app-web-console).

    This step deploys the `nationalparks` back-end application and exposes it externally.
1.  [Deploy the database application](/tutorials/dev-app-web-console#getting-started-web-console-connecting-database_dev-app-web-console).

    This step deploys the `mongodb-nationalparks` MongoDB database, loads data into the database, and sets up the necessary credentials to access the database.

After you complete these steps, you can [view the national parks application in a web browser](/tutorials/dev-app-web-console#getting-started-web-console-view_dev-app-web-console).

## Prerequisites {id="prerequisites_{{ context }}"}

Before you start this tutorial, ensure that you have the following required prerequisites:

*   You have access to a test {{ product_title }} cluster.

    If your organization does not have a cluster to test on, you can request access to the [Developer Sandbox](https://developers.redhat.com/developer-sandbox) to get a trial of {{ product_title }}.
*   You have the appropriate permissions, such as the `cluster-admin` [cluster role](/authentication/using-rbac#viewing-cluster-roles_using-rbac), to create a project and applications within it.

    If you do not have the required permissions, contact your cluster administrator. You need the `self-provisioner` role to create a project and the `admin` role on the project to modify resources in that project.

    If you are using Developer Sandbox, a project is created for you with the required permissions.
*   You have [logged in to the {{ product_title }} web console](/web_console/web-console#web-console-overview).

{% leveloffset +1 %}{% include "./modules/getting-started-web-console-creating-new-project.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Viewing a project by using the web console](/applications/projects/working-with-projects#viewing-a-project-using-the-web-console_projects)

{% leveloffset +1 %}{% include "./modules/getting-started-web-console-granting-permissions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [RBAC overview](/authentication/using-rbac#authorization-overview_using-rbac)

{% leveloffset +1 %}{% include "./modules/getting-started-web-console-deploying-first-image.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Viewing the topology of your application](/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-topology_viewing-application-composition-using-topology-view)

{% leveloffset +2 %}{% include "./modules/getting-started-web-console-examining-pod.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Interacting with applications and components](/applications/odc-viewing-application-composition-using-topology-view#odc-interacting-with-applications-and-components_viewing-application-composition-using-topology-view)
*   [Scaling application pods and checking builds and routes](/applications/odc-viewing-application-composition-using-topology-view#odc-scaling-application-pods-and-checking-builds-and-routes_viewing-application-composition-using-topology-view)
*   [Labels and annotations used for the Topology view](/applications/odc-viewing-application-composition-using-topology-view#odc-labels-and-annotations-used-for-topology-view_viewing-application-composition-using-topology-view)

{% leveloffset +2 %}{% include "./modules/getting-started-web-console-scaling-app.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended practices for scaling the cluster](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-scale-practices_recommended-control-plane-practices)

{% leveloffset +1 %}{% include "./modules/getting-started-web-console-deploying-python-app.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Adding services to your application](/applications/odc-viewing-application-composition-using-topology-view#odc-adding-services-to-your-application_viewing-application-composition-using-topology-view)
*   [Importing a codebase from Git to create an application](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-importing-codebase-from-git-to-create-application_odc-creating-applications-using-developer-perspective)

{% leveloffset +1 %}{% include "./modules/getting-started-web-console-connecting-a-database.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/getting-started-web-console-creating-secret.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding secrets](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about_nodes-pods-secrets)

{% leveloffset +2 %}{% include "./modules/getting-started-web-console-load-data-output.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/getting-started-web-console-view.md" %}{% endleveloffset %}