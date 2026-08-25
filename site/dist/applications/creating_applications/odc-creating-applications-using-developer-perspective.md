---
title: Creating applications by using the Developer perspective
---

# Creating applications by using the Developer perspective {#odc-creating-applications-using-developer-perspective}

The **Developer** perspective in the web console provides you the following options from the **+Add** view to create applications and associated services and deploy them on OpenShift Container Platform:

- **Getting started resources**: Use these resources to help you get started with Developer Console. You can choose to hide the header using the Options menu {{ kebab }}.

  - **Creating applications using samples**: Use existing code samples to get started with creating applications on the OpenShift Container Platform.
  - **Build with guided documentation**: Follow the guided documentation to build applications and familiarize yourself with key concepts and terminologies.
  - **Explore new developer features**: Explore the new features and resources within the **Developer** perspective.
- **Developer catalog**: Explore the Developer Catalog to select the required applications, services, or source to image builders, and then add it to your project.

  - **All Services**: Browse the catalog to discover services across OpenShift Container Platform.
  - **Database**: Select the required database service and add it to your application.
  - **Operator Backed**: Select and deploy the required Operator-managed service.
  - **Helm chart**: Select the required Helm chart to simplify deployment of applications and services.
  - **Devfile**: Select a devfile from the **Devfile registry** to declaratively define a development environment.
  - **Event Source**: Select an event source to register interest in a class of events from a particular system.

    > [!NOTE]
    > The Managed services option is also available if the RHOAS Operator is installed.
- **Git repository**: Import an existing codebase, Devfile, or Dockerfile from your Git repository using the **From Git**, **From Devfile**, or **From Dockerfile** options respectively, to build and deploy an application on OpenShift Container Platform.
- **Container images**: Use existing images from an image stream or registry to deploy it on to the OpenShift Container Platform.
- **Pipelines**: Use Tekton pipeline to create CI/CD pipelines for your software delivery process on the OpenShift Container Platform.
- **Serverless**: Explore the **Serverless** options to create, build, and deploy stateless and serverless applications on the OpenShift Container Platform.

  - **Channel**: Create a Knative channel to create an event forwarding and persistence layer with in-memory and reliable implementations.
- **Samples**: Explore the available sample applications to create, build, and deploy an application quickly.
- **Quick Starts**: Explore the quick start options to create, import, and run applications with step-by-step instructions and tasks.
- **From Local Machine**: Explore the **From Local Machine** tile to import or upload files on your local machine for building and deploying applications easily.

  - **Import YAML**: Upload a YAML file to create and define resources for building and deploying applications.
  - **Upload JAR file**: Upload a JAR file to build and deploy Java applications.
- **Share my Project**: Use this option to add or remove users to a project and provide accessibility options to them.
- **Helm Chart repositories**: Use this option to add Helm Chart repositories in a namespace.
- **Re-ordering of resources**: Use these resources to re-order pinned resources added to your navigation pane. The drag-and-drop icon is displayed on the left side of the pinned resource when you hover over it in the navigation pane. The dragged resource can be dropped only in the section where it resides.

Note that certain options, such as **Pipelines**, **Event Source**, and **Import Virtual Machines**, are displayed only when the [OpenShift Pipelines Operator](https://docs.openshift.com/pipelines/latest/install_config/installing-pipelines.html#op-installing-pipelines-operator-in-web-console_installing-pipelines), [{{ ServerlessOperatorName }}](https://docs.openshift.com/serverless/1.28/install/install-serverless-operator.html#serverless-install-web-console_install-serverless-operator), and [OpenShift Virtualization Operator](/openshift-docs-markdown/virt/install/installing-virt#virt-subscribing-cli_installing-virt) are installed, respectively.

## Prerequisites {#prerequisites_odc-creating-applications-using-developer-perspective}

To create applications using the **Developer** perspective ensure that:

- You have [logged in to the web console](/openshift-docs-markdown/web_console/web-console#web-console).
- You have created a project or have access to a project with the appropriate [roles and permissions](/openshift-docs-markdown/authentication/using-rbac#default-roles_using-rbac) to create applications and other workloads in OpenShift Container Platform.

To create serverless applications, in addition to the preceding prerequisites, ensure that:

- You have [installed the {{ ServerlessOperatorName }}](https://docs.openshift.com/serverless/1.28/install/install-serverless-operator.html#install-serverless-operator).
- You have [created a `KnativeServing` resource in the `knative-serving` namespace](https://docs.openshift.com/serverless/1.28/install/installing-knative-serving.html#installing-knative-serving).

## Additional resources {#additional-resources_odc-creating-applications-using-developer-perspective}

- For more information about Knative routing settings for {{ ServerlessProductName }}, see [Routing](https://docs.openshift.com/serverless/1.28/knative-serving/external-ingress-routing/routing-overview.html#routing-overview).
- For more information about domain mapping settings for {{ ServerlessProductName }}, see [Configuring a custom domain for a Knative service](https://docs.openshift.com/serverless/1.28/knative-serving/config-custom-domains/serverless-custom-domains.html#serverless-custom-domains).
- For more information about Knative autoscaling settings for {{ ServerlessProductName }}, see [Autoscaling](https://docs.openshift.com/serverless/1.28/knative-serving/autoscaling/serverless-autoscaling-developer.html#serverless-autoscaling-developer).
- For more information about adding a new user to a project, see [Working with projects](/openshift-docs-markdown/applications/projects/working-with-projects#odc-providing-project-permissions-using-developer-perspective_projects).
- For more information about creating a Helm Chart repository, see [Creating Helm Chart repositories](/openshift-docs-markdown/applications/working_with_helm_charts/configuring-custom-helm-chart-repositories#odc-creating-helm-releases-using-developer-perspective_configuring-custom-helm-chart-repositories).
