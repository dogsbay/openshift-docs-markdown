{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reclaiming a persistent volume manually {id="reclaim-manual_{{ context }}"}

Manually reclaim released persistent volumes (PVs) to make them available for new claims or to properly clean up storage assets.  {._abstract}

{% if not microshift %}
When a persistent volume claim (PVC) is deleted, the persistent volume (PV) still exists and is considered "released". However, the PV is not yet available for another claim because the data of the previous claimant remains on the volume.
{% endif %}

{% if microshift %}
When a persistent volume claim (PVC) is deleted, the underlying logical volume is handled according to the `reclaimPolicy`.
{% endif %}

**Procedure**

1.  Delete the persistent volume (PV) by running the following command:
    ```terminal
    $ oc delete pv <pv_name>
    ```
{% if not (openshift_dedicated or openshift_rosa) %}

    The associated storage asset in the external infrastructure, such as an AWS EBS, GCE PD, Azure Disk, or Cinder volume, still exists after the PV is deleted.
{% endif %}
{% if openshift_dedicated %}
    The associated storage asset in the external infrastructure, such as an AWS EBS or GCE PD volume, still exists after the PV is deleted.
{% endif %}
{% if openshift_rosa %}
    The associated storage asset in the external infrastructure, such as an Amazon Elastic Block Store (Amazon EBS) volume, still exists after the PV is deleted.
{% endif %}
1.  Clean up the data on the associated storage asset.
1.  Delete the associated storage asset. Alternately, to reuse the same storage asset, create a new PV with the storage asset definition.

**Result**

The reclaimed PV is now available for use by another PVC.