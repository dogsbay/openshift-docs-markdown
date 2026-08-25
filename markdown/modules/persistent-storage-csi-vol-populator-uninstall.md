{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling volume populators {id="persistent-storage-csi-vol-populator-uninstall_{{ context }}"}

To remove custom volume prepopulation functionality, delete all volume populator resources in reverse order of creation. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   Access to the cluster with cluster-admin privileges.

**Procedure**

*   To uninstall volume populators, delete in reverse order all objects installed in the following procedures:
    1.  "Creating prepopulated volumes using volume populators".
    1.  "Creating CRDs for volume populators".

        Be sure to remove the `VolumePopulator` instance.