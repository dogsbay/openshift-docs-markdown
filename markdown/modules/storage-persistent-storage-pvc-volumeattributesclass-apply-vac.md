{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying a Volume Attributes Class to a PVC {id="storage-persistent-storage-pvc-volumeattributesclass-apply-vac_{{ context }}"}

Apply a Volume Attributes Class to a new or existing persistent volume claim (PVC) by setting the `volumeAttributesClassName` parameter to dynamically configure storage attributes, such as performance tiers without recreating the volume. {._abstract}

**Procedure**

*   Set the PVC’s `volumeAttributesClassName` parameter to the Volume Attributes Class’s name:
    ```yaml title="Example"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: test-pv-claim
    spec:
      …
      volumeAttributesClassName: silver
    ```

    Where `spec.volumeAttributesClassName` specifies using the Volume Attributes Class `silver` for this PVC.