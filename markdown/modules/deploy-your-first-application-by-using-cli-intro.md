{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploy your first application by using the CLI {id="deploy-your-first-application-by-using-cli-intro_{{ context }}"}

To learn how to stand up an application on {{ product_title }} by using the {{ oc_first }}, follow the provided tutorial. In this tutorial, you will deploy the services that are required for an application that displays a map of national parks across the world. {._abstract}

To complete this tutorial, you will perform the following steps:

1.  Create a project for the application.

    This step allows your application to be isolated from other cluster user’s workloads.
1.  Grant view permissions.

    This step grants `view` permissions to interact with the OpenShift API to help discover services and other resources running within the project.
1.  Deploy the front-end application.

    This step deploys the `parksmap` front-end application, exposes it externally, and scales it up to two instances.
1.  Deploy the back-end application.

    This step deploys the `nationalparks` back-end application and exposes it externally.
1.  Deploy the database application.

    This step deploys the `mongodb-nationalparks` MongoDB database, loads data into the database, and sets up the necessary credentials to access the database.

After you complete these steps, you can view the national parks application in a web browser.

## Prerequisites {id="prerequisites_{{ context }}"}

Before you start this tutorial, ensure that you have the following required prerequisites:

*   You have installed the {{ oc_first }}.
*   You have access to a test {{ product_title }} cluster.

    If your organization does not have a cluster to test on, you can request access to the Developer Sandbox to get a trial of {{ product_title }}.
*   You have the appropriate permissions, such as the `cluster-admin` cluster role, to create a project and applications within it.

    If you do not have the required permissions, contact your cluster administrator. You need the `self-provisioner` role to create a project and the `admin` role on the project to modify resources in that project.

    If you are using Developer Sandbox, a project is created for you with the required permissions.
*   You have logged in to your cluster by using the {{ oc_first }}.

**Additional resources**
{._additional-resources}

*   [Developer Sandbox](https://developers.redhat.com/developer-sandbox)