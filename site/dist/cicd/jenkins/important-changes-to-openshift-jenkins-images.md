---
title: Important changes to OpenShift Jenkins images
---

# Important changes to OpenShift Jenkins images {#important-changes-to-openshift-jenkins-images}

> [!IMPORTANT]
> Openshift Jenkins receives periodic updates from Jenkins LTS releases and associated plugins. These updates may include bug fixes, security vulnerability patches, and occasionally new features. However, Red Hat does not plan to introduce further enhancements or major changes to the functionality or contents of the OpenShift Jenkins container image, other than updates to its dependent plugins.
>
> Additionally, the following three Red Hat-maintained Jenkins plugins are now in maintenance mode. Only critical bug fixes will be addressed, and no new enhancements or feature development are planned.
>
> - Jenkins Client Plugin
> - Jenkins Login Plugin
> - Jenkins Sync Plugin

OpenShift Container Platform 4.11 moves the OpenShift Jenkins and OpenShift Agent Base images to the `ocp-tools-4` repository at `registry.redhat.io`. It also removes the OpenShift Jenkins Maven and NodeJS Agent images from its payload:

- OpenShift Container Platform 4.11 moves the OpenShift Jenkins and OpenShift Agent Base images to the `ocp-tools-4` repository at `registry.redhat.io` so that Red Hat can produce and update the images outside the OpenShift Container Platform lifecycle. Previously, these images were in the OpenShift Container Platform install payload and the `openshift4` repository at `registry.redhat.io`.
- OpenShift Container Platform 4.10 deprecated the OpenShift Jenkins Maven and NodeJS Agent images. OpenShift Container Platform 4.11 removes these images from its payload. Red Hat no longer produces these images, and they are not available from the `ocp-tools-4` repository at `registry.redhat.io`. Red Hat maintains the 4.10 and earlier versions of these images for any significant bug fixes or security CVEs, following the [OpenShift Container Platform lifecycle policy](https://access.redhat.com/support/policy/updates/openshift).

These changes support the OpenShift Container Platform 4.10 recommendation to use [multiple container Pod Templates with the Jenkins Kubernetes Plugin](/cicd/jenkins/images-other-jenkins#images-other-jenkins-config-kubernetes_images-other-jenkins).

## Additional resources {#additional-resources_important-changes-to-openshift-jenkins-images_important-changes-to-openshift-jenkins-images}

- [Adding tags to image streams](/openshift_images/managing_images/tagging-images#images-add-tags-to-imagestreams_tagging-images)
- [Configuring periodic importing of image stream tags](/openshift_images/image-streams-manage#images-imagestream-import_image-streams-managing)
- [Jenkins agent](/cicd/jenkins/images-other-jenkins-agent#images-other-jenkins-agent)
- [Certified `jenkins` images](https://catalog.redhat.com/software/containers/search?q=Jenkins%202&p=1)
- [Certified `jenkins-agent-base` images](https://catalog.redhat.com/software/containers/search?q=Jenkins%20Agent%20Base&p=1)
- [Certified `jenkins-agent-maven` images](https://catalog.redhat.com/software/containers/search?q=jenkins-agent-maven&p=1)
- [Certified `jenkins-agent-nodejs` images](https://catalog.redhat.com/software/containers/search?q=jenkins-agent-nodejs&p=1)
