---
title: Custom image builds with Buildah
---

# Custom image builds with Buildah {#custom-builds-buildah}

With OpenShift Container Platform 4.22, a docker socket will not be present on the host nodes. This means the *mount docker socket* option of a custom build is not guaranteed to provide an accessible docker socket for use within a custom build image.

If you require this capability in order to build and push images, add the Buildah tool your custom build image and use it to build and push the image within your custom build logic. The following is an example of how to run custom builds with Buildah.

> [!NOTE]
> Using the custom build strategy requires permissions that normal users do not have by default because it allows the user to execute arbitrary code inside a privileged container running on the cluster. This level of access can be used to compromise the cluster and therefore should be granted only to users who are trusted with administrative privileges on the cluster.

## Prerequisites {#_prerequisites}

- Review how to [grant custom build permissions](/openshift-docs-markdown/cicd/builds/securing-builds-by-strategy#securing-builds-by-strategy).

{% include "./modules/builds-create-custom-build-artifacts.md" %}
