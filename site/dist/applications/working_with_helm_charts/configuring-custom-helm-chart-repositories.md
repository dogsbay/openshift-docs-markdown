---
title: Configuring custom Helm chart repositories
---

# Configuring custom Helm chart repositories {#configuring-custom-helm-chart-repositories}

{% include "./_attributes/common-attributes.md" %} You can create Helm releases on an OpenShift Container Platform cluster using the following methods:

- The CLI.
- The **Developer** perspective of the web console.

The **Developer Catalog**, in the **Developer** perspective of the web console, displays the Helm charts available in the cluster. By default, it lists the Helm charts from the Red Hat OpenShift Helm chart repository. For a list of the charts, see [the Red Hat `Helm index` file](https://charts.openshift.io/index.yaml).

As a cluster administrator, you can add multiple cluster-scoped and namespace-scoped Helm chart repositories, separate from the default cluster-scoped Helm repository, and display the Helm charts from these repositories in the **Developer Catalog**.

As a regular user or project member with the appropriate role-based access control (RBAC) permissions, you can add multiple namespace-scoped Helm chart repositories, apart from the default cluster-scoped Helm repository, and display the Helm charts from these repositories in the **Developer Catalog**.

In the **Developer** perspective of the web console, you can use the **Helm** page to:

- Create Helm Releases and Repositories using the **Create** button.
- Create, update, or delete a cluster-scoped or namespace-scoped Helm chart repository.
- View the list of the existing Helm chart repositories in the Repositories tab, which can also be easily distinguished as either cluster scoped or namespace scoped.

## Using Helm in the web terminal {#_using_helm_in_the_web_terminal}

You can use Helm by [Accessing the web terminal](/web_console/web_terminal/odc-using-web-terminal#odc-access-web-terminal_odc-using-web-terminal) in the **Developer** perspective of the web console.

{% include "./modules/helm-adding-helm-chart-repositories.md" %}
