---
title: "Tutorial: Deploying an application by using the CLI"
---

# Tutorial: Deploying an application by using the CLI {#dev-app-cli}

To learn how to stand up an application on OpenShift Container Platform by using the {{ oc_first }}, follow the provided tutorial. In this tutorial, you will deploy the services that are required for an application that displays a map of national parks across the world.

To complete this tutorial, you will perform the following steps:

1. [Create a project for the application](/tutorials/dev-app-cli#getting-started-cli-creating-new-project_dev-app-cli).

   This step allows your application to be isolated from other cluster user’s workloads.
2. [Grant view permissions](/tutorials/dev-app-cli#getting-started-cli-granting-permissions_dev-app-cli).

   This step grants `view` permissions to interact with the OpenShift API to help discover services and other resources running within the project.
3. [Deploy the front-end application](/tutorials/dev-app-cli#getting-started-cli-deploying-first-image_dev-app-cli).

   This step deploys the `parksmap` front-end application, exposes it externally, and scales it up to two instances.
4. [Deploy the back-end application](/tutorials/dev-app-cli#getting-started-cli-deploying-python-app_dev-app-cli).

   This step deploys the `nationalparks` back-end application and exposes it externally.
5. [Deploy the database application](/tutorials/dev-app-cli#getting-started-cli-connecting-database_dev-app-cli).

   This step deploys the `mongodb-nationalparks` MongoDB database, loads data into the database, and sets up the necessary credentials to access the database.

After you complete these steps, you can [view the national parks application in a web browser](/tutorials/dev-app-cli#getting-started-cli-view_dev-app-cli).

## Prerequisites {#prerequisites_dev-app-cli}

Before you start this tutorial, ensure that you have the following required prerequisites:

- You have installed the [{{ oc_first }}](/cli_reference/openshift_cli/getting-started-cli#installing-openshift-cli).
- You have access to a test OpenShift Container Platform cluster.

  If your organization does not have a cluster to test on, you can request access to the [Developer Sandbox](https://developers.redhat.com/developer-sandbox) to get a trial of OpenShift Container Platform.
- You have the appropriate permissions, such as the `cluster-admin` [cluster role](/authentication/using-rbac#viewing-cluster-roles_using-rbac), to create a project and applications within it.

  If you do not have the required permissions, contact your cluster administrator. You need the `self-provisioner` role to create a project and the `admin` role on the project to modify resources in that project.

  If you are using Developer Sandbox, a project is created for you with the required permissions.
- You have [logged in to your cluster by using the {{ oc_first }}](/cli_reference/openshift_cli/getting-started-cli#cli-logging-in_cli-developer-commands).

**Additional resources**

- [oc new-project](/cli_reference/openshift_cli/developer-cli-commands#oc-new-project)

**Additional resources**

- [RBAC overview](/authentication/using-rbac#authorization-overview_using-rbac)
- [oc adm policy add-role-to-user](/cli_reference/openshift_cli/administrator-cli-commands#oc-adm-policy-add-role-to-user)

**Additional resources**

- [oc new-app](/cli_reference/openshift_cli/developer-cli-commands#oc-new-app)

**Additional resources**

- [oc create route edge](/cli_reference/openshift_cli/developer-cli-commands#oc-create-route-edge)
- [oc get](/cli_reference/openshift_cli/developer-cli-commands#oc-get)

**Additional resources**

- [oc describe](/cli_reference/openshift_cli/developer-cli-commands#oc-describe)
- [oc get](/cli_reference/openshift_cli/developer-cli-commands#oc-get)
- [Viewing pods](/cli_reference/openshift_cli/getting-started-cli#viewing-pods)
- [Viewing pod logs](/cli_reference/openshift_cli/getting-started-cli#viewing-pod-logs)

**Additional resources**

- [oc scale](/cli_reference/openshift_cli/developer-cli-commands#oc-scale)

**Additional resources**

- [oc label](/cli_reference/openshift_cli/developer-cli-commands#oc-label)

**Additional resources**

- [Understanding secrets](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about_nodes-pods-secrets)
- [oc create secret generic](/cli_reference/openshift_cli/developer-cli-commands#oc-create-secret-generic)
- [oc set env](/cli_reference/openshift_cli/developer-cli-commands#oc-set-env)
- [oc rollout status](/cli_reference/openshift_cli/developer-cli-commands#oc-rollout-status)

**Additional resources**

- [oc exec](/cli_reference/openshift_cli/developer-cli-commands#oc-exec)
