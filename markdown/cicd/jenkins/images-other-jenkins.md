---
title: Configuring Jenkins images
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring Jenkins images {id="images-other-jenkins"}
{%- set context = "images-other-jenkins" %}

{{ product_title }} provides a container image for running Jenkins. This image provides a Jenkins server instance, which can be used to set up a basic flow for continuous testing, integration, and delivery.

The image is based on the Red Hat Universal Base Images (UBI).

{{ product_title }} follows the [LTS](https://jenkins.io/changelog-stable/) release of Jenkins. {{ product_title }} provides an image that contains Jenkins 2.x.

The {{ product_title }} Jenkins images are available on [Quay.io](https://quay.io) or [registry.redhat.io](https://registry.redhat.io).

For example:

```terminal
$ podman pull registry.redhat.io/ocp-tools-4/jenkins-rhel8:<image_tag>
```

To use these images, you can either access them directly from these registries or push them into your {{ product_title }} container image registry. Additionally, you can create an image stream that points to the image, either in your container image registry or at the external location. Your {{ product_title }} resources can then reference the image stream.

But for convenience, {{ product_title }} provides image streams in the `openshift` namespace for the core Jenkins image as well as the example Agent images provided for {{ product_title }} integration with Jenkins.

## Configuration and customization {id="images-other-jenkins-config-customization_{{ context }}"}

You can manage Jenkins authentication in two ways:

*   {{ product_title }} OAuth authentication provided by the {{ product_title }} Login plugin.
*   Standard authentication provided by Jenkins.

{% leveloffset +2 %}{% include "./modules/images-other-jenkins-oauth-auth.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-other-jenkins-auth.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-env-var.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-cross-project.md" %}{% endleveloffset %}

## Jenkins cross volume mount points {id="images-other-jenkins-cross-volume-mount_{{ context }}"}

The Jenkins image can be run with mounted volumes to enable persistent storage for the configuration:

*   `/var/lib/jenkins` is the data directory where Jenkins stores configuration files, including job definitions.

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-customize-s2i.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-config-kubernetes.md" %}{% endleveloffset %}

**Additional resources**

*   [Important changes to OpenShift Jenkins images](/cicd/jenkins/important-changes-to-openshift-jenkins-images#important-changes-to-openshift-jenkins-images)

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-create-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-kubernetes-plugin.md" %}{% endleveloffset %}

**Additional resources**

*   [Important changes to OpenShift Jenkins images](/cicd/jenkins/important-changes-to-openshift-jenkins-images#important-changes-to-openshift-jenkins-images)

{% leveloffset +1 %}{% include "./modules/images-other-jenkins-memory.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   See [Base image options](/architecture/understanding-development#base-image-options) for more information about the [Red Hat Universal Base Images](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/getting_started_with_containers/index#using_red_hat_base_container_images_standard_and_minimal) (UBI).
{%- endif %}
*   [Important changes to OpenShift Jenkins images](/cicd/jenkins/important-changes-to-openshift-jenkins-images#important-changes-to-openshift-jenkins-images)