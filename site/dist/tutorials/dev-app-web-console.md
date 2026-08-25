---
title: "Tutorial: Deploying an application by using the web console"
---

# Tutorial: Deploying an application by using the web console {#dev-app-web-console}

To learn how to stand up an application on OpenShift Container Platform by using the web console, follow the provided tutorial. In this tutorial, you will deploy the services that are required for an application that displays a map of national parks across the world.

To complete this tutorial, you will perform the following steps:

1. [Create a project for the application](/openshift-docs-markdown/tutorials/dev-app-web-console#getting-started-web-console-creating-new-project_dev-app-web-console).

   This step allows your application to be isolated from other cluster user’s workloads.
2. [Grant view permissions](/openshift-docs-markdown/tutorials/dev-app-web-console#getting-started-web-console-granting-permissions_dev-app-web-console).

   This step grants `view` permissions to interact with the OpenShift API to help discover services and other resources running within the project.
3. [Deploy the front-end application](/openshift-docs-markdown/tutorials/dev-app-web-console#getting-started-web-console-deploying-first-image_dev-app-web-console).

   This step deploys the `parksmap` front-end application, exposes it externally, and scales it up to two instances.
4. [Deploy the back-end application](/openshift-docs-markdown/tutorials/dev-app-web-console#getting-started-web-console-deploying-python-app_dev-app-web-console).

   This step deploys the `nationalparks` back-end application and exposes it externally.
5. [Deploy the database application](/openshift-docs-markdown/tutorials/dev-app-web-console#getting-started-web-console-connecting-database_dev-app-web-console).

   This step deploys the `mongodb-nationalparks` MongoDB database, loads data into the database, and sets up the necessary credentials to access the database.

After you complete these steps, you can [view the national parks application in a web browser](/openshift-docs-markdown/tutorials/dev-app-web-console#getting-started-web-console-view_dev-app-web-console).

## Prerequisites {#prerequisites_dev-app-web-console}

Before you start this tutorial, ensure that you have the following required prerequisites:

- You have access to a test OpenShift Container Platform cluster.

  If your organization does not have a cluster to test on, you can request access to the [Developer Sandbox](https://developers.redhat.com/developer-sandbox) to get a trial of OpenShift Container Platform.
- You have the appropriate permissions, such as the `cluster-admin` [cluster role](/openshift-docs-markdown/authentication/using-rbac#viewing-cluster-roles_using-rbac), to create a project and applications within it.

  If you do not have the required permissions, contact your cluster administrator. You need the `self-provisioner` role to create a project and the `admin` role on the project to modify resources in that project.

  If you are using Developer Sandbox, a project is created for you with the required permissions.
- You have [logged in to the OpenShift Container Platform web console](/openshift-docs-markdown/web_console/web-console#web-console-overview).

**Additional resources**

- [Viewing a project by using the web console](/openshift-docs-markdown/applications/projects/working-with-projects#viewing-a-project-using-the-web-console_projects)

**Additional resources**

- [RBAC overview](/openshift-docs-markdown/authentication/using-rbac#authorization-overview_using-rbac)

**Additional resources**

- [Viewing the topology of your application](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-topology_viewing-application-composition-using-topology-view)

**Additional resources**

- [Interacting with applications and components](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-interacting-with-applications-and-components_viewing-application-composition-using-topology-view)
- [Scaling application pods and checking builds and routes](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-scaling-application-pods-and-checking-builds-and-routes_viewing-application-composition-using-topology-view)
- [Labels and annotations used for the Topology view](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-labels-and-annotations-used-for-topology-view_viewing-application-composition-using-topology-view)

**Additional resources**

- [Recommended practices for scaling the cluster](/openshift-docs-markdown/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-scale-practices_recommended-control-plane-practices)

**Additional resources**

- [Adding services to your application](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-adding-services-to-your-application_viewing-application-composition-using-topology-view)
- [Importing a codebase from Git to create an application](/openshift-docs-markdown/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-importing-codebase-from-git-to-create-application_odc-creating-applications-using-developer-perspective)

**Additional resources**

- [Understanding secrets](/openshift-docs-markdown/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about_nodes-pods-secrets)
