---
title: Understanding Helm
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding Helm {id="understanding-helm"}
{%- set context = "understanding-helm" %}

Helm is a software package manager that simplifies deployment of applications and services to {{ product_title }} clusters. {._abstract}

Helm uses a packaging format called _charts_.
A Helm chart is a collection of files that describes the {{ product_title }} resources.

Installing a chart in a cluster creates a running instance of the chart, called a _release_.

Each time you install a chart, or upgrade or roll back a release, Helm creates a revision of the release.

{{ product_title }} supports the following ways to work with Helm:

*   The Helm CLI, a Red Hat build of the `helm` command-line tool that you install on your workstation.
*   The web console, where you can browse, install, and manage Helm charts and releases from your web browser.

## Key features {id="_key_features"}

With Helm, you can:

*   Search for charts in chart repositories.
*   Install a chart to create a release.
*   Upgrade a release, roll it back to an earlier revision, or delete it.
*   Create your own charts with {{ product_title }} or Kubernetes resources, and package and share them.

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{%- endif %}

## Red Hat Certification of Helm charts for OpenShift {id="_red_hat_certification_of_helm_charts_for_openshift"}

You can have Red Hat certify your Helm charts for all components you deploy on {{ product_title }}. Charts go through an automated Red Hat OpenShift certification workflow that checks security compliance and integration with the platform. Certification assures chart integrity and confirms that your Helm chart works on Red Hat OpenShift clusters.

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Installing Helm](/applications/working_with_helm_charts/installing-helm#installing-helm)
*   [Helm CLI for Red Hat OpenShift compatibility matrix](https://access.redhat.com/articles/7145580)
*   [Red Hat Helm chart certification](https://docs.redhat.com/en/documentation/red_hat_software_certification/8.51/html-single/red_hat_software_certification_workflow_guide/index#con_helm-chart-certification_openshift-sw-cert-workflow-running-the-certification-suite-with-redhat-hosted-pipeline)
*   [Red Hat Helm index file](https://charts.openshift.io/index.yaml)