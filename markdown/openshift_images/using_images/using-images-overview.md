---
title: Using images overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using images overview {id="using-images-overview"}

{%- set context = "using-images-overview" %}

To build and deploy containerized applications in {{ product_title }}, you can use Source-to-Image (S2I), database, and other container images. These images provide the base components you need to run applications on your cluster. {._abstract}

Red&#160;Hat official container images are provided in the Red&#160;Hat Registry at registry.redhat.io. {{ product_title }}'s supported S2I, database, and Jenkins images are provided in the `openshift4` repository in the {{ quay }} Registry. For example, `quay.io/openshift-release-dev/ocp-v4.0-<address>` is the name of an {{ product_title }} image.

The xPaaS middleware images are provided in their product repositories on the Red Hat Registry but suffixed with a `-openshift`. For example, `registry.redhat.io/jboss-eap-6/eap64-openshift` is the name of the Red Hat JBoss Enterprise Application Platform (JBoss EAP) image.

All Red&#160;Hat supported images are described in the Red Hat Ecosystem Catalog. For every version of each image, you can find details on its contents and usage.


:::important

The newer versions of container images are not compatible with earlier versions of {{ product_title }}. Verify and use the correct version of container images, based on your version of {{ product_title }}.

:::


## Additional resources {id="additional-resources_using-images-overview" ._additional-resources}

*   [Red Hat container registry](https://registry.redhat.io)
*   [Container images section of the Red Hat Ecosystem Catalog](https://catalog.redhat.com/software/containers/explore)