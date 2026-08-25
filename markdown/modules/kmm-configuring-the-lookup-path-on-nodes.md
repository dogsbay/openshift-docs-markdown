{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the lookup path on nodes {id="kmm-configuring-the-lookup-path-on-nodes_{{ context }}"}

To add `/var/lib/firmware` to the kernel firmware lookup path on {{ product_title }} nodes, you can create a `MachineConfig` custom resource that sets the `firmware_class.path` kernel argument. {._abstract}

On {{ product_title }} nodes, the set of default lookup paths for firmwares does not include the `/var/lib/firmware` path.

**Procedure**

1.  Use the Machine Config Operator to create a `MachineConfig` custom resource (CR) that contains the `/var/lib/firmware` path:
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 99-worker-kernel-args-firmware-path
    spec:
      kernelArguments:
        - 'firmware_class.path=/var/lib/firmware'
    ```

    You can configure the label based on your needs. In the case of {{ sno }}, use either `control-pane` or `master` objects.
1.  By applying the `MachineConfig` CR, the nodes are automatically rebooted.