---
title: Configuring Jenkins images
---

# Configuring Jenkins images {#images-other-jenkins}

OpenShift Container Platform provides a container image for running Jenkins. This image provides a Jenkins server instance, which can be used to set up a basic flow for continuous testing, integration, and delivery.

The image is based on the Red Hat Universal Base Images (UBI).

OpenShift Container Platform follows the [LTS](https://jenkins.io/changelog-stable/) release of Jenkins. OpenShift Container Platform provides an image that contains Jenkins 2.x.

The OpenShift Container Platform Jenkins images are available on [Quay.io](https://quay.io) or [registry.redhat.io](https://registry.redhat.io).

For example:

```terminal
$ podman pull registry.redhat.io/ocp-tools-4/jenkins-rhel8:<image_tag>
```

To use these images, you can either access them directly from these registries or push them into your OpenShift Container Platform container image registry. Additionally, you can create an image stream that points to the image, either in your container image registry or at the external location. Your OpenShift Container Platform resources can then reference the image stream.

But for convenience, OpenShift Container Platform provides image streams in the `openshift` namespace for the core Jenkins image as well as the example Agent images provided for OpenShift Container Platform integration with Jenkins.

## Configuration and customization {#images-other-jenkins-config-customization_images-other-jenkins}

You can manage Jenkins authentication in two ways:

- OpenShift Container Platform OAuth authentication provided by the OpenShift Container Platform Login plugin.
- Standard authentication provided by Jenkins.

## Jenkins cross volume mount points {#images-other-jenkins-cross-volume-mount_images-other-jenkins}

The Jenkins image can be run with mounted volumes to enable persistent storage for the configuration:

- `/var/lib/jenkins` is the data directory where Jenkins stores configuration files, including job definitions.

**Additional resources**

- [Important changes to OpenShift Jenkins images](/openshift-docs-markdown/cicd/jenkins/important-changes-to-openshift-jenkins-images#important-changes-to-openshift-jenkins-images)

**Additional resources**

- [Important changes to OpenShift Jenkins images](/openshift-docs-markdown/cicd/jenkins/important-changes-to-openshift-jenkins-images#important-changes-to-openshift-jenkins-images)

## Additional resources {#_additional_resources}

- See [Base image options](/openshift-docs-markdown/architecture/understanding-development#base-image-options) for more information about the [Red Hat Universal Base Images](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/getting_started_with_containers/index#using_red_hat_base_container_images_standard_and_minimal) (UBI).
- [Important changes to OpenShift Jenkins images](/openshift-docs-markdown/cicd/jenkins/important-changes-to-openshift-jenkins-images#important-changes-to-openshift-jenkins-images)
