---
title: Configuring custom Helm chart repositories
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring custom Helm chart repositories {id="configuring-custom-helm-chart-repositories"}
{%- set context = "configuring-custom-helm-chart-repositories" %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
You can create Helm releases on an {{ product_title }} cluster using the following methods: {._abstract}

*   The CLI.
*   The **Developer** perspective of the web console.
{% endif %}

The **Developer Catalog**, in the **Developer** perspective of the web console, displays the Helm charts available in the cluster. By default, it lists the Helm charts from the Red Hat OpenShift Helm chart repository. For a list of the charts, see [the Red Hat `Helm index` file](https://charts.openshift.io/index.yaml).

As a cluster administrator, you can add multiple cluster-scoped and namespace-scoped Helm chart repositories, separate from the default cluster-scoped Helm repository, and display the Helm charts from these repositories in the **Developer Catalog**.

As a regular user or project member with the appropriate role-based access control (RBAC) permissions, you can add multiple namespace-scoped Helm chart repositories, apart from the default cluster-scoped Helm repository, and display the Helm charts from these repositories in the **Developer Catalog**.

In the **Developer** perspective of the web console, you can use the **Helm** page to:

*   Create Helm Releases and Repositories using the **Create** button.
*   Create, update, or delete a cluster-scoped or namespace-scoped Helm chart repository.
*   View the list of the existing Helm chart repositories in the Repositories tab, which can also be easily distinguished as either cluster scoped or namespace scoped.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/helm-installing-a-helm-chart-on-an-openshift-cluster.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/odc-creating-helm-releases-using-developer-perspective.md" %}{% endleveloffset %}

## Using Helm in the web terminal {id="_using_helm_in_the_web_terminal"}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
You can use Helm by [Accessing the web terminal](/web_console/web_terminal/odc-using-web-terminal#odc-access-web-terminal_odc-using-web-terminal) in the **Developer** perspective of the web console.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
You can use Helm by Accessing the web terminal in the **Developer** perspective of the web console.
{% endif %}

{% leveloffset +1 %}{% include "./modules/helm-creating-a-custom-helm-chart-on-openshift.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/helm-adding-helm-chart-repositories.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/helm-adding-namespace-scoped-helm-chart-repositories.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/helm-creating-credentials-and-certificates-to-add-helm-repositories.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/helm-filtering-helm-charts-by-certification-level.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/helm-disabling-helm-chart-repositories.md" %}{% endleveloffset %}
{% endif %}