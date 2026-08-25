{%- set _mod_docs_content_type = "PROCEDURE" %}
# vSphere topology results {id="persistent-storage-csi-vsphere-top-aware-results_{{ context }}"}

To verify that topology-aware storage provisioning is working correctly, check that persistent volumes include zone and region node affinity labels that match the pod scheduling requirements. {._abstract}

Creating persistent volume claims (PVCs) and PVs from the topology aware storage class are truly zonal, and should use the datastore in their respective zone depending on how pods are scheduled:

**Procedure**

*   Check that persistent volumes include zone and region labels as expected by running the following command:
    ```terminal
    $ oc get pv <pv_name> -o yaml
    ```
    ```terminal title="Example output"
    ...
    nodeAffinity:
      required:
        nodeSelectorTerms:
        - matchExpressions:
          - key: topology.csi.vmware.com/openshift-zone
            operator: In
            values:
            - <openshift_zone>
          - key: topology.csi.vmware.com/openshift-region
            operator: In
            values:
            - <openshift_region>
    ...
    peristentVolumeclaimPolicy: Delete
    storageClassName: <zoned_storage_class_name>
    volumeMode: Filesystem
    ...
    ```
    *   `nodeAffinity.required.nodeSelectorTerms.matchExpressions.key`: PV has zoned keys.
    *   `storageClassName`: PV is using the zoned storage class.