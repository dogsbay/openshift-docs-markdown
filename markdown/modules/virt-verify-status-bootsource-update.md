{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the status of a boot source {id="virt-verify-status-bootsource-update_{{ context }}"}

You can determine if a boot source is system-defined or custom by viewing the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  View the contents of the `HyperConverged` CR by running the following command:
    ```terminal {minja}
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} -o yaml
    ```

    Example output:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
    # ...
    status:
    # ...
      dataImportCronTemplates:
      - metadata:
          annotations:
            cdi.kubevirt.io/storage.bind.immediate.requested: "true"
          name: centos-9-image-cron
        spec:
          garbageCollect: Outdated
          managedDataSource: centos-stream9
          schedule: 55 8/12 * * *
          template:
            metadata: {}
            spec:
              source:
                registry:
                  url: docker://quay.io/containerdisks/centos-stream:9
              storage:
                resources:
                  requests:
                    storage: 30Gi
            status: {}
        status:
          commonTemplate: true
    # ...
      - metadata:
          annotations:
            cdi.kubevirt.io/storage.bind.immediate.requested: "true"
          name: user-defined-dic
        spec:
          garbageCollect: Outdated
          managedDataSource: user-defined-centos-stream9
          schedule: 55 8/12 * * *
          template:
            metadata: {}
            spec:
              source:
                registry:
                  pullMethod: node
                  url: docker://quay.io/containerdisks/centos-stream:9
              storage:
                resources:
                  requests:
                    storage: 30Gi
            status: {}
        status: {}
    # ...
    ```
    *   `status.dataImportCronTemplates.status.commonTemplate` specifies a system-defined boot source.
    *   `status.dataImportCronTemplates.status` specifies a custom boot source.
1.  Verify the status of the boot source by reviewing the `status.dataImportCronTemplates.status` field.
    *   If the field contains `commonTemplate: true`, it is a system-defined boot source.
    *   If the `status.dataImportCronTemplates.status` field has the value `{}`, it is a custom boot source.