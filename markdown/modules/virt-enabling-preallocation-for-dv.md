{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling preallocation for a data volume {id="virt-enabling-preallocation-for-dv_{{ context }}"}

You can enable preallocation for specific data volumes by including the `spec.preallocation` field in the data volume manifest. You can enable preallocation mode in either the web console or by using the OpenShift CLI (`oc`). {._abstract}

Preallocation mode is supported for all CDI source types. However, preallocation is ignored for cloning operations.

**Procedure**

*   Specify the `spec.preallocation` field in the data volume manifest:
    ```yaml
    apiVersion: cdi.kubevirt.io/v1beta1
    kind: DataVolume
    metadata:
      name: preallocated-datavolume
    spec:
      source:
        registry:
          url: <image_url>
      storage:
        resources:
          requests:
            storage: 1Gi
      preallocation: true
    # ...
    ```

    where:

    `<image_url>`
    :   Specifies the URL of the data source in your registry.