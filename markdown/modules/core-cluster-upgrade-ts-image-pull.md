{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing image pull failures during updates {id="core-cluster-upgrade-ts-image-pull_{{ context }}"}

If image pull failures occur during an update, common causes include registry connectivity issues, images not mirrored to a disconnected registry, and image pull authentication failures. {._abstract}

**Prerequisites**

*   You have image pull failures during a cluster update.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Check image pull status on nodes by running the following command:
    ```terminal
    $ oc get events -A --field-selector reason=Failed --sort-by='.lastTimestamp' | grep -i image
    ```
1.  For disconnected environments, verify image mirroring by running the following command:
    ```terminal
    $ oc get imagedigestmirrorset
    ```

    :::note

    In {{ product_title }} 4.13 and earlier, image mirroring was configured with `ImageContentSourcePolicy` resources. In {{ product_title }} 4.14 and later, `ImageDigestMirrorSet` resources replace `ImageContentSourcePolicy`. If your cluster was originally installed on a version earlier than 4.14, check both resource types.
    
    :::

1.  Test image pull from a node by running the following command:
    ```terminal
    $ oc debug node/<node_name> -- chroot /host podman pull <image_url>
    ```