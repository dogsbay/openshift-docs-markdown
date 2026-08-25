{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting images from a disconnected environment {id="oc-mirror-procedure-delete-v2_{{ context }}"}

You can delete images from a disconnected environment using the oc-mirror plugin. {._abstract}

**Prerequisites**

*   You have enabled garbage collection in your environment to delete images that no longer reference manifests.

**Procedure**

1.  Create a `delete-image-set-config.yaml` file and include the following content:
    ```yaml title="DeleteImageSetConfiguration file"
    apiVersion: mirror.openshift.io/v2alpha1
    kind: DeleteImageSetConfiguration
    delete:
      platform:
        channels:
          - name: <channel_name>
            minVersion: <channel_min_version>
            maxVersion: <channel_max_version>
      operators:
        - catalog: <operator_catalog_name>
          packages:
          - name: <operator_name>
             minVersion: <operator_max_version>
             maxVersion: <operator_min_version>
      additionalImages:
        - name: <additional_images>
    ```

    where:

    `delete.platform.channels.name`
    :   Specifies the name of the {{ product_title }} channel to delete, for example `stable-4.15`.

    `delete.platform.channels.minVersion` and `delete.platform.channels.maxVersion`
    :   Specifies a version range of the images to delete within the channel, for example `4.15.0` for the minimum version and `4.15.1` for the maximum version.
        To delete only one version’s images, use that version number for both the `minVersion` and `maxVersion` fields.

    `delete.operators.catalog`
    :   Specifies an Operator catalog image containing the Operators to delete, for example `registry.redhat.io/redhat/redhat-operator-index:v4.14`.
        The Operator catalog image will not get deleted. Its presence in the registry might be necessary for other Operators still remaining on the cluster.

    `delete.operators.packages.name`
    :   Specifies a specific Operator to delete, for example `aws-load-balancer-operator`.

    `delete.operators.packages.minVersion` and `delete.operators.packages.maxVersion`
    :   Specifies a version range of the images to delete for the Operator, for example `0.0.1` for the minimum version and `0.0.2` for the maximum version.

1.  Create a `delete-images.yaml` file by running the following command:
    ```terminal
    $ oc-mirror delete --config delete-image-set-config.yaml --workspace file://<previously_mirrored_work_folder> --v2 --generate docker://<remote_registry>
    ```

    where:

    `<previously_mirrored_work_folder>`
    :   Specifies the directory where images were previously mirrored to or stored during the mirroring process.

    `<remote_registry>`
    :   Specifies the URL or address of the remote container registry from which images will be deleted.

    :::important

    When deleting images, specify the correct workspace directory. Modify or delete the cache directory only when starting mirroring from scratch, such as setting up a new cluster. Incorrect changes to the cache directory might disrupt further mirroring operations.
    
    :::


1.  Go to the `<previously_mirrored_work_folder>/delete` directory that was created.
1.  Verify that the `delete-images.yaml` file has been generated.
1.  Manually ensure that each image listed in the file is no longer needed by the cluster and can be safely removed from the registry.
1.  After you generate the `delete-images` YAML file, delete the images from the remote registry by running the following command:
    ```terminal
    $ oc-mirror delete --v2 --delete-yaml-file <previously_mirrored_work_folder>/working-dir/delete/delete-images.yaml docker://<remote_registry>
    ```

    where:

    &lt;previously_mirrored_work_folder>
    :   Specifies the directory where images were previously mirrored or stored during the mirroring process.

    &lt;remote_registry>
    :   Specifies the URL or address of the remote container registry from which images will be deleted.

    :::important

    When using the mirror-to-mirror method to mirror images, images are not cached locally, so you cannot delete images from a local cache.
    
    :::