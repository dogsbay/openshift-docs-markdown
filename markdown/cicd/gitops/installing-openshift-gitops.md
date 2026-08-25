{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing {{ gitops_title }} {id="getting-started-with-openshift-gitops"}
{%- set context = "installing-openshift-gitops" %}

{{ gitops_title }} uses Argo CD to manage specific cluster-scoped resources, including cluster Operators, optional Operator Lifecycle Manager (OLM) Operators, and user management. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You have access to the {{ product_title }} web console.
*   You are logged in as a user with the `cluster-admin` role.
*   You are logged in to the {{ product_title }} cluster as an administrator.
*   Your cluster has the [Marketplace capability](/installing/overview/cluster-capabilities#marketplace-operator_cluster-capabilities) enabled or the Red Hat Operator catalog source configured manually.


:::warning

If you have already installed the Community version of the Argo CD Operator, remove the Argo CD Community Operator before you install the {{ gitops_title }} Operator.

:::


This guide explains how to install the {{ gitops_title }} Operator to an {{ product_title }} cluster and log in to the Argo CD instance.


:::important

The `latest` channel enables installation of the most recent stable version of the {{ gitops_title }} Operator. Currently, it is the default channel for installing the {{ gitops_title }} Operator.

To install a specific version of the {{ gitops_title }} Operator, cluster administrators can use the corresponding `gitops-<version>` channel. For example, to install the {{ gitops_title }} Operator version 1.8.x, you can use the `gitops-1.8` channel.

:::


{% leveloffset +1 %}{% include "./modules/installing-gitops-operator-in-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-gitops-operator-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-to-the-argo-cd-instance-by-using-the-argo-cd-admin-account.md" %}{% endleveloffset %}