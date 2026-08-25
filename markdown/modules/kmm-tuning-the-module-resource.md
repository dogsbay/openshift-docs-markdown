{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tuning the Module resource {id="kmm-tuning-the-module-resource_{{ context }}"}

To configure firmware file paths for kernel modules on {{ product_title }}, you can set `.spec.moduleLoader.container.modprobe.firmwarePath` in the `Module` CR. {._abstract}

**Procedure**

*   Set `.spec.moduleLoader.container.modprobe.firmwarePath` in the `Module` custom resource (CR):
    ```yaml
    apiVersion: kmm.sigs.x-k8s.io/v1beta1
    kind: Module
    metadata:
      name: my-kmod
    spec:
      moduleLoader:
        container:
          modprobe:
            moduleName: my-kmod  # Required

            firmwarePath: /firmware
    ```

    where:

    `spec.moduleLoader.container.modprobe.firmwarePath`
    :   Specifies that `/firmware/*` is copied into the files path `/var/lib/firmware/` on the node. This parameter is optional.