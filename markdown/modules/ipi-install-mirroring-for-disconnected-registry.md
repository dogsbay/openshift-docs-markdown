{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring the {{ product_title }} image repository for a disconnected registry {id="ipi-install-mirroring-for-disconnected-registry_{{ context }}"}

Mirror the {{ product_title }} image repository to a local registry to provide your disconnected environment with the container images. {._abstract}

Complete the following steps to mirror the {{ product_title }} image repository for a disconnected registry.

{% include "./snippets/oc-adm-release-mirror-depr.md" %}

**Prerequisites**

*   Your mirror host has access to the internet.
*   You configured a mirror registry to use in your restricted network and
can access the certificate and credentials that you configured.
{%- if not openshift_origin %}
*   You downloaded the {{ cluster_manager_url_pull }} and modified it to include authentication to your mirror repository.
{% endif %}
{% if openshift_origin %}
*   You have created a pull secret for your mirror repository.
{% endif %}

**Procedure**

1.  Review the
{%- if not openshift_origin %}
[Download {{ product_title }}](https://access.redhat.com/downloads/content/290/) page to determine the version of {{ product_title }} that you want to install and determine the corresponding tag on the [Repository Tags](https://quay.io/repository/openshift-release-dev/ocp-release?tab=tags) page.
{% endif %}
{% if openshift_origin %}
[{{ product_title }} releases page](https://github.com/okd-project/okd/releases/)
to determine the version and tag of {{ product_title }} that you want to install.
{% endif %}
1.  Set the required environment variables:
    1.  Export the release version:
        ```terminal
        $ OCP_RELEASE=<release_version>
        ```

        For `<release_version>`, specify the tag that corresponds to the version of {{ product_title }} to install, such as `4.5.4`.
    1.  Export the local registry name and host port:
        ```terminal
        $ LOCAL_REGISTRY='<local_registry_host_name>:<local_registry_host_port>'
        ```

        For `<local_registry_host_name>`, specify the registry domain name for your mirror repository, and for `<local_registry_host_port>`, specify the port that it serves content on.
    1.  Export the local repository name:
        ```terminal
        $ LOCAL_REPOSITORY='<local_repository_name>'
        ```

        For `<local_repository_name>`, specify the name of the repository to create in your registry, such as `ocp4/openshift4`.
    1.  Export the name of the repository to mirror:
        {%- if not openshift_origin %}
        ```terminal
        $ PRODUCT_REPO='openshift-release-dev'
        ```

        For a production release, you must specify `openshift-release-dev`.
{% endif %}
{% if openshift_origin %}
        ```terminal
        $ PRODUCT_REPO='okd'
        ```
{% endif %}
    1.  Export the path to your registry pull secret:
        ```terminal
        $ LOCAL_SECRET_JSON='<path_to_pull_secret>'
        ```

        For `<path_to_pull_secret>`, specify the absolute path to and file name of the pull secret for your mirror registry that you created.
    1.  Export the release mirror:
        {%- if not openshift_origin %}
        ```terminal
        $ RELEASE_NAME="ocp-release"
        ```

        For a production release, you must specify `ocp-release`.
{% endif %}
{% if openshift_origin %}
        ```terminal
        $ RELEASE_NAME="scos-release"
        ```
{% endif %}

{% if not openshift_origin %}
    1.  Export the type of architecture for your cluster:
        ```terminal
        $ ARCHITECTURE=<cluster_architecture> (1)
        ```

        For `<cluster_architecture>`, specify the architecture of the cluster, such as `x86_64`, `aarch64`, `s390x`, or `ppc64le`.

{% endif %}
    1.  Export the path to the directory to host the mirrored images:
        ```terminal
        $ REMOVABLE_MEDIA_PATH=<path> (1)
        ```

        For `<path>`, specify the full path, including the initial forward slash (/) character.
1.  Mirror the version images to the mirror registry:
    *   If your mirror host does not have internet access, take the following actions:
        1.  Connect the removable media to a system that is connected to the internet.
        1.  Review the images and configuration manifests to mirror:
            {%- if openshift_origin %}
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON}  \
                 --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE} \
                 --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} \
                 --to-release-image=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE} --dry-run
            ```
{% endif %}
{% if not openshift_origin %}
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON}  \
                 --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE} \
                 --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} \
                 --to-release-image=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE} --dry-run
            ```
{% endif %}
        1.  Record the entire `imageContentSources` section from the output of the previous
        command. The information about your mirrors is unique to your mirrored repository, and you must add the `imageContentSources` section to the `install-config.yaml` file during installation.
        1.  Mirror the images to a directory on the removable media:
            {%- if openshift_origin %}
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON} --to-dir=${REMOVABLE_MEDIA_PATH}/mirror quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}
            ```
{% endif %}
{% if not openshift_origin %}
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON} --to-dir=${REMOVABLE_MEDIA_PATH}/mirror quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE}
            ```
{% endif %}
        1.  Take the media to the restricted network environment and upload the images to the local container registry.
            ```terminal
            $ oc image mirror -a ${LOCAL_SECRET_JSON} --from-dir=${REMOVABLE_MEDIA_PATH}/mirror "file://openshift/release:${OCP_RELEASE}*" ${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} (1)
            ```

            For `REMOVABLE_MEDIA_PATH`, you must use the same path that you specified when you mirrored the images.
    *   If the local container registry is connected to the mirror host, take the following actions:
        1.  Directly push the release images to the local registry by using following command:
            {%- if openshift_origin %}
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON}  \
                 --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE} \
                 --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} \
                 --to-release-image=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}
            ```
{% endif %}
{% if not openshift_origin %}
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON}  \
                 --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE} \
                 --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} \
                 --to-release-image=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE}
            ```
{%- endif %}

            This command pulls the release information as a digest, and its output includes the `imageContentSources` data that you require when you install your cluster.
        1.  Record the entire `imageContentSources` section from the output of the previous
        command. The information about your mirrors is unique to your mirrored repository, and you must add the `imageContentSources` section to the `install-config.yaml` file during installation.

            :::note

            The image name gets patched to Quay.io during the mirroring process, and the podman images will show Quay.io in the registry on the bootstrap virtual machine.
            
            :::

1.  To create the installation program that is based on the content that you
mirrored, extract it and pin it to the release:
    *   If your mirror host does not have internet access, run the following command:
        ```terminal
        $ oc adm release extract -a ${LOCAL_SECRET_JSON} --command=openshift-baremetal-install "${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}"
        ```
    *   If the local container registry is connected to the mirror host, run the following command:
        {%- if openshift_origin %}
        ```terminal
        $ oc adm release extract -a ${LOCAL_SECRET_JSON} --command=openshift-baremetal-install "${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}"
        ```
{% endif %}
{% if not openshift_origin %}
        ```terminal
        $ oc adm release extract -a ${LOCAL_SECRET_JSON} --command=openshift-baremetal-install "${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE}"
        ```
{%- endif %}

        :::important

        To ensure that you use the correct images for the version of {{ product_title }} that you selected, you must extract the installation program from the mirrored content.

        You must perform this step on a machine with an active internet connection.

        If you are in a disconnected environment, use the `--image` flag as part of must-gather and point to the payload image.
        
        :::

1.  For clusters using installer-provisioned infrastructure, run the following command:
    ```terminal
    $ openshift-baremetal-install
    ```