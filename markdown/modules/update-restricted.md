{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the disconnected cluster {id="update-disconnected_{{ context }}"}

Update the disconnected cluster to the {{ product_title }} version that you downloaded the release images for. {._abstract}


:::note

If you have a local OpenShift Update Service, you can update by using the connected web console or CLI instructions instead of this procedure.

:::


**Prerequisites**

*   You mirrored the images for the new release to your registry.
*   You applied the release image signature ConfigMap for the new release to your cluster.

    :::note

    The release image signature config map allows the Cluster Version Operator (CVO) to ensure the integrity of release images by verifying that the actual image signatures match the expected signatures.
    
    :::

*   You obtained the sha256 digest for your targeted release image.
*   You installed the OpenShift CLI (`oc`).
*   You paused all `MachineHealthCheck` resources.

**Procedure**

*   Update the cluster:
    ```terminal
    $ oc adm upgrade --allow-explicit-upgrade --to-image <defined_registry>/<defined_repository>@<digest>
    ```
    Where:


    `<defined_registry>`
    :   Specifies the name of the mirror registry you mirrored your images to.


    `<defined_repository>`
    :   Specifies the name of the image repository you want to use on the mirror registry.


    `<digest>`
    :   Specifies the sha256 digest for the targeted release image, for example, `sha256:81154f5c03294534e1eaf0319bef7a601134f891689ccede5d705ef659aa8c92`.

    :::note

    *   See "Mirroring {{ product_title }} images" to review how your mirror registry and repository names are defined.
    *   If you used an `ImageContentSourcePolicy` or `ImageDigestMirrorSet`, you can use the canonical registry and repository names instead of the names you defined.
    The canonical registry name is `quay.io` and the canonical repository name is `openshift-release-dev/ocp-release`.
    *   You can only configure global pull secrets for clusters that have an `ImageContentSourcePolicy`, `ImageDigestMirrorSet`, or `ImageTagMirrorSet` object. You cannot add a pull secret to a project.
    
    :::