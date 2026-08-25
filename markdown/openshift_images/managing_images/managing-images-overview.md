---
title: Managing images overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing images overview {id="managing-images-overview"}

{%- set context = "managing-images-overview" %}

Image streams in {{ product_title }} provide a layer of abstraction over container images, enabling automation for your CI/CD pipelines. You can configure builds and deployments to watch image streams and automatically trigger new builds or deployments when images are updated. {._abstract}

The main advantage of using image streams is the automation they enable for your continuous integration and continuous delivery (CI/CD) pipelines. For example:

*   Image streams allow {{ product_title }} resources such as Builds and Deployments to "watch" them.
*   When a new image is added to the stream, or when an existing tag is modified to point to a new image, the watching resources receive notifications.
*   When notifications are received, the watching resources can automatically react by performing a new build or a new deployment.