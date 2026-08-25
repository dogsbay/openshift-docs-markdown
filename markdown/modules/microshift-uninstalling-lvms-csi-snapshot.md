{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the CSI snapshot implementation {id="microshift-uninstalling-lvms-csi-snapshot_{{ context }}"}

To remove the Container Storage Interface (CSI) snapshot capability from your cluster, uninstall the CSI snapshot implementation.  {._abstract}

**Prerequisites**

*   {{ microshift_short }} is installed and running.
*   The CSI snapshot implementation is deployed on the {{ microshift_short }} node.

**Procedure**

*   Uninstall the CSI snapshot implementation by running the following command:
    ```terminal
    $ oc delete -n kube-system deployment.apps/snapshot-controller
    ```
    ```terminal title="Example output"
    deployment.apps "snapshot-controller" deleted
    ```