---
title: Source-to-image
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Source-to-image {id="using-s21-images"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-s21-images" %}

To create containerized applications in {{ product_title }} without manually configuring runtime environments, you can use Source-to-Image (S2I) images. S2I images are runtime base images for languages such as Node.js, Python, and Java that you can insert your code into. You can use Red&#160;Hat Software Collections images as a foundation for applications that rely on specific runtime environments, and access S2I images through the Cluster Samples Operator.

{% leveloffset +1 %}{% include "./modules/accessing-s2i-builder-images-in-developer-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-s2i-build-process-overview.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_using-s21-images"}

*   [Red&#160;Hat Software Collections container images](https://access.redhat.com/documentation/en-us/red_hat_software_collections/3/html-single/using_red_hat_software_collections_container_images/index)
*   [Introduction to source-to-image for OpenShift with Red Hat build of OpenJDK](https://docs.redhat.com/en/documentation/red_hat_build_of_openjdk/11/html/using_source-to-image_for_openshift_with_red_hat_build_of_openjdk_11/openjdk-overview-s2i-openshift)
*   [Configuring the Cluster Samples Operator](/openshift_images/configuring-samples-operator#configuring-samples-operator)
{%- if not (openshift_rosa or openshift_dedicated) %}
*   [Using build strategies](/cicd/builds/build-strategies#builds-strategy-s2i-build_build-strategies)
*   [Troubleshooting the Source-to-Image process](/support/troubleshooting/troubleshooting-s2i#troubleshooting-s2i)
{%- endif %}
*   [Creating images from source code with source-to-image](/openshift_images/create-images#images-create-s2i_create-images)
*   [About testing source-to-image images](/openshift_images/create-images#images-test-s2i_create-images)