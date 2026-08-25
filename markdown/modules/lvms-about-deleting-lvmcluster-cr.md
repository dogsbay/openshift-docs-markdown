{%- set _mod_docs_content_type = "CONCEPT" %}
# Ways to delete an LVMCluster custom resource {id="about-deleting-lvmcluster-cr_{{ context }}"}

Delete an `LVMCluster` custom resource (CR) when decommissioning {{ lvms }} or reconfiguring storage by using the OpenShift CLI (`oc`), {{ product_title }} web console, or {{ rh_rhacm_first }}. {._abstract}

You must have installed {{ lvms }} by using {{ rh_rhacm }} to delete an `LVMCluster` CR by using {{ rh_rhacm }}.

After deleting the `LVMCluster` CR, {{ lvms }} deletes the following CRs:

*   `storageClass`
*   `volumeSnapshotClass`
*   `LVMVolumeGroup`
*   `LVMVolumeGroupNodeStatus`