{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable the automatic image cleanup of the container storage disk {id="ztp-image-based-upgrade-disable-container-storage-image-cleanup_{{ context }}"}

To prevent automatic image cleanup from running during image-based upgrade preparation in {{ product_title }}, you can annotate the `ImageBasedUpgrade` resource. You can also remove the annotation to re-enable automatic cleanup. {._abstract}

**Procedure**

1.  Disable the automatic image cleanup by running the following command:
    ```terminal
    $ oc -n openshift-lifecycle-agent annotate ibu upgrade image-cleanup.lca.openshift.io/on-prep='Disabled'
    ```
1.  (Optional) Enable automatic image cleanup again by running the following command:
    ```terminal
    $ oc -n  openshift-lifecycle-agent annotate ibu upgrade image-cleanup.lca.openshift.io/on-prep-
    ```