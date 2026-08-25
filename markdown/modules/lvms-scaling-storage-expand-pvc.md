{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expanding a persistent volume claim {id="lvms-scaling-expand-pvc_{{ context }}"}

After scaling up cluster storage, you can expand existing persistent volume claims (PVCs) to increase their storage capacity by updating the `storage` field in the PVC. {._abstract}

**Prerequisites**

*   Dynamic provisioning is used.
*   The `StorageClass` object associated with the PVC has the `allowVolumeExpansion` field set to `true`.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Update the value of the `spec.resources.requests.storage` field to a value that is greater than the current value by running the following command:
    ```terminal
    $ oc patch pvc <pvc_name> -n <application_namespace> \
      --type=merge -p \ '{ "spec": { "resources": { "requests": { "storage": "<desired_size>" }}}}'
    ```
    *   Replace `<pvc_name>` with the name of the PVC that you want to expand.
    *   Replace `<desired_size>` with the new size to expand the PVC.

**Verification**

*   To verify that resizing is completed, run the following command:
    ```terminal
    $ oc get pvc <pvc_name> -n <application_namespace> -o=jsonpath={.status.capacity.storage}
    ```

    {{ lvms }} adds the `Resizing` condition to the PVC during expansion. It deletes the `Resizing` condition after the PVC expansion.