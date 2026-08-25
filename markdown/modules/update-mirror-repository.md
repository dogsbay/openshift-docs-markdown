{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring images to a mirror registry {id="update-mirroring-images-to-registry_{{ context }}"}

Before you can update a cluster in a disconnected environment, you must mirror the required {{ product_title }} release images onto a local registry mirror. {._abstract}


:::important

To avoid excessive memory usage by the OpenShift Update Service application, you must mirror release images to a separate repository as described in the following procedure.

:::


**Prerequisites**

*   You configured a mirror registry to use in your disconnected environment and can access the certificate and credentials that you configured.
{%- if not openshift_origin %}
*   You downloaded the {{ cluster_manager_url_pull }} and modified it to include authentication to your mirror repository.
{%- endif %}
{%- if openshift_origin %}
*   You have created a pull secret for your mirror repository.
{%- endif %}
*   If you use self-signed certificates, you have specified a Subject Alternative Name in the certificates.

**Procedure**

1.  Use the [Red Hat {{ product_title }} Update Graph visualizer and update planner](https://access.redhat.com/labs/ocpupgradegraph/update_channel) to plan an update from one version to another. The OpenShift Update Graph provides channel graphs and a way to confirm that there is an update path between your current and intended cluster versions.
1.  Set the required environment variables:
    1.  Export the release version:
        ```terminal
        $ export OCP_RELEASE=<release_version>
        ```

        For `<release_version>`, specify the tag that corresponds to the version of {{ product_title }} to which you want to update, such as `4.5.4`.
    1.  Export the local registry name and host port:
        ```terminal
        $ LOCAL_REGISTRY='<local_registry_host_name>:<local_registry_host_port>'
        ```
        *   For `<local_registry_host_name>`, specify the registry domain name for your mirror
        repository.
        *   For `<local_registry_host_port>`, specify the port that it
        serves content on.
    1.  Export the local repository name:
        ```terminal
        $ LOCAL_REPOSITORY='<local_repository_name>'
        ```

        For `<local_repository_name>`, specify the name of the repository to create in your
        registry, such as `ocp4/openshift4`.
    1.  If you are using the OpenShift Update Service, export an additional local repository name to contain the release images:
        ```terminal
        $ LOCAL_RELEASE_IMAGES_REPOSITORY='<local_release_images_repository_name>'
        ```

        For `<local_release_images_repository_name>`, specify the name of the repository to
        create in your registry, such as `ocp4/openshift4-release-images`.
    1.  Export the name of the repository to mirror:
        ```terminal
        $ PRODUCT_REPO='openshift-release-dev'
        ```

        For a production release, you must specify `openshift-release-dev`.
    1.  Export the path to your registry pull secret:
        ```terminal
        $ LOCAL_SECRET_JSON='<path_to_pull_secret>'
        ```

        For `<path_to_pull_secret>`, specify the absolute path to and file name of the pull secret for your mirror registry that you created.

        :::note

        If your cluster uses an `ImageContentSourcePolicy` object to configure repository mirroring, you can use only global pull secrets for mirrored registries. You cannot add a pull secret to a project.
        
        :::

    1.  Export the release mirror:
        ```terminal
        $ RELEASE_NAME="ocp-release"
        ```

        For a production release, you must specify `ocp-release`.
    1.  Export the type of architecture for your cluster:
        ```terminal
        $ ARCHITECTURE=<cluster_architecture>
        ```

        For `<cluster_architecture>`, specify the architecture of the cluster, such as `x86_64`, `aarch64`, `s390x`, or `ppc64le`.
    1.  Export the path to the directory to host the mirrored images:
        ```terminal
        $ REMOVABLE_MEDIA_PATH=<path>
        ```

        For `<path>`, specify the full path, including the initial forward slash (/) character.
1.  Review the images and configuration manifests to mirror:
    ```terminal
    $ oc adm release mirror -a ${LOCAL_SECRET_JSON} --to-dir=${REMOVABLE_MEDIA_PATH}/mirror quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE} --dry-run
    ```
1.  Mirror the version images to the mirror registry.
    *   If your mirror host does not have internet access, take the following actions:
        1.  Connect the removable media to a system that is connected to the internet.
        1.  Mirror the images and configuration manifests to a directory on the removable media:
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON} --to-dir=${REMOVABLE_MEDIA_PATH}/mirror quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE}
            ```

            :::note

            This command also generates and saves the mirrored release image signature config map onto the removable media.
            
            :::

        1.  Take the media to the disconnected environment and upload the images to the local container registry.
            ```terminal
            $ oc image mirror  -a ${LOCAL_SECRET_JSON} --from-dir=${REMOVABLE_MEDIA_PATH}/mirror "file://openshift/release:${OCP_RELEASE}*" ${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}
            ```

            For `REMOVABLE_MEDIA_PATH`, you must use the same path that you specified when you mirrored the images.
        1.  Use `oc` command-line interface (CLI) to log in to the cluster that you are updating.
        1.  Apply the mirrored release image signature config map to the connected cluster:
            ```terminal
            $ oc apply -f ${REMOVABLE_MEDIA_PATH}/mirror/config/<image_signature_file>
            ```

            For `<image_signature_file>`, specify the path and name of the file, for example, `signature-sha256-81154f5c03294534.yaml`.
        1.  If you are using the OpenShift Update Service, mirror the release image to a separate repository:
            ```terminal
            $ oc image mirror -a ${LOCAL_SECRET_JSON} ${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE} ${LOCAL_REGISTRY}/${LOCAL_RELEASE_IMAGES_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE}
            ```
    *   If the local container registry and the cluster are connected to the mirror host, take the following actions:
        1.  Directly push the release images to the local registry and apply the config map  to the cluster by using following command:
            ```terminal
            $ oc adm release mirror -a ${LOCAL_SECRET_JSON} --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE} \
              --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} --apply-release-image-signature
            ```

            :::note

            If you include the `--apply-release-image-signature` option, do not create the config map for image signature verification.
            
            :::

        1.  If you are using the OpenShift Update Service, mirror the release image to a separate repository:
            ```terminal
            $ oc image mirror -a ${LOCAL_SECRET_JSON} ${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE} ${LOCAL_REGISTRY}/${LOCAL_RELEASE_IMAGES_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE}
            ```