---
title: Overview of images
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Overview of images {id="overview-of-images"}

{%- set context = "overview-of-images" %}

To understand how containerized applications work in {{ product_title }}, you need to know about containers, images, and image streams. This overview explains these core concepts and how they work together in your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/images-about.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="additional-resources-about-images_{{ context }}" ._additional-resources}

*   [podman](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/managing_containers/#using_podman_to_work_with_containers)
*   [Creating images](/openshift_images/create-images#creating-images)
*   [Managing images](/openshift_images/managing_images/managing-images-overview#managing-images-overview)
*   [Using images](/openshift_images/using_images/using-images-overview#using-images-overview)
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
## Additional resources {id="additional-resources-about-images-managed_{{ context }}" ._additional-resources}

*   [podman](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/managing_containers/#using_podman_to_work_with_containers)
*   [Creating images](/openshift_images/create-images#creating-images)
*   [Managing images](/openshift_images/managing_images/managing-images-overview#managing-images-overview)
*   [Using images](/openshift_images/using_images/using-images-overview#using-images-overview)
{% endif %}

{% leveloffset +1 %}{% include "./modules/images-image-registry-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-container-repository-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-tag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-id.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/containers-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-use.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-imagestream-use_{{ context }}" ._additional-resources}

*   [Open Container Initiative](https://github.com/opencontainers/)
*   [Podman](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/managing_containers/#using_podman_to_work_with_containers)
*   [Managing image streams](/openshift_images/image-streams-manage#managing-image-streams)
*   [Using image streams with Kubernetes resources](/openshift_images/using-imagestreams-with-kube-resources#using-imagestreams-with-kube-resources)
*   [Triggering updates on image stream updates](/openshift_images/triggering-updates-on-imagestream-changes#triggering-updates-on-imagestream-changes)

{% leveloffset +1 %}{% include "./modules/images-imagestream-tag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-trigger.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/how-you-can-use-the-cluster-samples-operator.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Configuring the Cluster Samples Operator](/openshift_images/configuring-samples-operator#configuring-samples-operator)
{% endif %}
*   [Use the Operator with an alternate registry](/openshift_images/samples-operator-alt-registry#samples-operator-alt-registry)

{% if openshift_rosa or openshift_enterprise %}
*   [Understanding templates](/applications/creating_applications/using-templates#templates-overview)
*   [Creating applications using Ruby on Rails](/applications/creating_applications/templates-using-ruby-on-rails#templates-using-ruby-on-rails)
{% endif %}
*   [registry.redhat.io](https://catalog.redhat.com/en)