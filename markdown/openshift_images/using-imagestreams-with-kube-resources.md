---
title: Using image streams with Kubernetes resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using image streams with Kubernetes resources {id="using-imagestreams-with-kube-resources"}

{%- set context = "using-imagestreams-with-kube-resources" %}

To use image streams with both {{ product_title }} native resources and standard Kubernetes resources, reference them in your resource definitions. Image streams work with resources such as `Build`, `DeploymentConfigs`, `Job`, `ReplicationController`, `ReplicaSet`, and `Deployment` resources. {._abstract}

{% leveloffset +1 %}{% include "./modules/images-managing-images-enabling-imagestreams-kube.md" %}{% endleveloffset %}