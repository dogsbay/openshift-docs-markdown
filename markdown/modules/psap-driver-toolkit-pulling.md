{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pulling the Driver Toolkit container image {id="pulling-the-driver-toolkit_{{ context }}"}

You can pull the `driver-toolkit` image from the Red Hat Ecosystem Catalog or extract its URL from the {{ product_title }} release payload by using the `oc adm` CLI. {._abstract}

The `driver-toolkit` image is available from the [Container images section of the Red Hat Ecosystem Catalog](https://registry.redhat.io/) and in the {{ product_title }} release payload. The image corresponding to the most recent minor release of {{ product_title }} will be tagged with the version number in the catalog. The image URL for a specific release can be found using the `oc adm` CLI command.

Instructions for pulling the `driver-toolkit` image from `registry.redhat.io` with `podman` or in {{ product_title }} can be found on the [Red Hat Ecosystem Catalog](https://catalog.redhat.com/software/containers/openshift4/driver-toolkit-rhel8/604009d6122bd89307e00865?container-tabs=gti).
The driver-toolkit image for the latest minor release is tagged with the minor release version on `registry.redhat.io`, for example: `registry.redhat.io/openshift4/driver-toolkit-rhel8:v{{ product_version }}`{minja}.

**Prerequisites**

*   You obtained the image {{ cluster_manager_url_pull }}.
*   You installed the OpenShift CLI (`oc`).

**Procedure**

1.  Use the `oc adm` command to extract the image URL of the `driver-toolkit` corresponding to a certain release:
    *   For an x86 image, the command is as follows:
        ```terminal {minja}
        $ oc adm release info quay.io/openshift-release-dev/ocp-release:{{ product_version }}.z-x86_64 --image-for=driver-toolkit
        ```
    *   For an ARM image, the command is as follows:
        ```terminal {minja}
        $ oc adm release info quay.io/openshift-release-dev/ocp-release:{{ product_version }}.z-aarch64 --image-for=driver-toolkit
        ```
    ```terminal title="Example output"
    quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:b53883ca2bac5925857148c4a1abc300ced96c222498e3bc134fe7ce3a1dd404
    ```
1.  Obtain this image using a valid pull secret, such as the pull secret required to install {{ product_title }}:
    ```terminal
    $ podman pull --authfile=path/to/pullsecret.json quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:<SHA>
    ```