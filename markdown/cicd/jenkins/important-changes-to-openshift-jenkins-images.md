---
title: Important changes to OpenShift Jenkins images
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Important changes to OpenShift Jenkins images {id="important-changes-to-openshift-jenkins-images"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "important-changes-to-openshift-jenkins-images" %}


:::important

Openshift Jenkins receives periodic updates from Jenkins LTS releases and associated plugins. These updates may include bug fixes, security vulnerability patches, and occasionally new features. However, Red&#160;Hat does not plan to introduce further enhancements or major changes to the functionality or contents of the OpenShift Jenkins container image, other than updates to its dependent plugins.

Additionally, the following three Red&#160;Hat-maintained Jenkins plugins are now in maintenance mode. Only critical bug fixes will be addressed, and no new enhancements or feature development are planned.

*   Jenkins Client Plugin
*   Jenkins Login Plugin
*   Jenkins Sync Plugin

:::


{{ product_title }} 4.11 moves the OpenShift Jenkins and OpenShift Agent Base images to the `ocp-tools-4` repository at `registry.redhat.io`. It also removes the OpenShift Jenkins Maven and NodeJS Agent images from its payload:

*   {{ product_title }} 4.11 moves the OpenShift Jenkins and OpenShift Agent Base images to the `ocp-tools-4` repository at `registry.redhat.io` so that Red Hat can produce and update the images outside the {{ product_title }} lifecycle. Previously, these images were in the {{ product_title }} install payload and the `openshift4` repository at `registry.redhat.io`.
*   {{ product_title }} 4.10 deprecated the OpenShift Jenkins Maven and NodeJS Agent images. {{ product_title }} 4.11 removes these images from its payload. Red Hat no longer produces these images, and they are not available from the `ocp-tools-4` repository at `registry.redhat.io`. Red Hat maintains the 4.10 and earlier versions of these images for any significant bug fixes or security CVEs, following the [{{ product_title }} lifecycle policy](https://access.redhat.com/support/policy/updates/openshift).

These changes support the {{ product_title }} 4.10 recommendation to use [multiple container Pod Templates with the Jenkins Kubernetes Plugin](/cicd/jenkins/images-other-jenkins#images-other-jenkins-config-kubernetes_images-other-jenkins).

{% leveloffset +1 %}{% include "./modules/relocation-of-openshift-jenkins-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customizing-the-jenkins-image-stream-tag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-the-openshift-cli-in-jenkins-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ocp-jenkins-release-oc-client-table.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/specifying-oc-ocp-jenkins-image.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_important-changes-to-openshift-jenkins-images_{{ context }}"}

*   [Adding tags to image streams](/openshift_images/managing_images/tagging-images#images-add-tags-to-imagestreams_tagging-images)
*   [Configuring periodic importing of image stream tags](/openshift_images/image-streams-manage#images-imagestream-import_image-streams-managing)
*   [Jenkins agent](/cicd/jenkins/images-other-jenkins-agent#images-other-jenkins-agent)
*   [Certified `jenkins` images](https://catalog.redhat.com/software/containers/search?q=Jenkins%202&p=1)
*   [Certified `jenkins-agent-base` images](https://catalog.redhat.com/software/containers/search?q=Jenkins%20Agent%20Base&p=1)
*   [Certified `jenkins-agent-maven` images](https://catalog.redhat.com/software/containers/search?q=jenkins-agent-maven&p=1)
*   [Certified `jenkins-agent-nodejs` images](https://catalog.redhat.com/software/containers/search?q=jenkins-agent-nodejs&p=1)