{%- set _mod_docs_content_type = "PROCEDURE" %}
# Hot swapping a virtual machine secondary network by using the command line {id="virt-live-updating-vm-nad-udn_{{ context }}"}

You can hot swap a virtual machine (VM) secondary network by using the command line. {._abstract}

**Prerequisites**

*   The VM to which you want to hot swap the network is running and is live migratable.
*   You have installed the {{ oc_first }}.
*   The target `NetworkAttachmentDefinition` object exists in the same namespace as the VM. If you created a `ClusterUserDefinedNetwork` object, verify that the cluster user-defined network controller has created the corresponding `NetworkAttachmentDefinition` object.

    Example `NetworkAttachmentDefinition` manifest:
    ```yaml
    apiVersion: k8s.cni.cncf.io/v1
    kind: NetworkAttachmentDefinition
    metadata:
      name: nad-with-vlan20
    spec:
      config: '{
        "cniVersion": "0.3.1",
        "name": "nad-with-vlan20",
        "type": "bridge",
        "bridge": "br2",
        "vlan": 20
      }'
    ```

**Procedure**

1.  Use your preferred text editor to edit the `VirtualMachine` manifest, as shown in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    ...
      template:
        spec:
          domain:
            devices:
              interfaces:
              - bridge: {}
                name: bridge-net
          networks:
          - name: bridge-net
            multus:
              networkName: nad-with-vlan20
    #...
    ```
    *   `spec.networks.name` specifies the name of the network. This must be the same as the `name` of the new network interface that you defined in the `template.spec.domain.devices.interfaces` list.
    *   `spec.networks.multus.networkName` specifies the name of the target `NetworkAttachmentDefinition` object.
1.  Save your changes and exit the editor.
1.  For the new configuration to take effect, apply the changes by running the following command. If your {{ product_title }} cluster has live migration enabled, applying the changes triggers automatic VM live migration and connects the new network to the running VM.
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    where:

    `<filename>`
    :   Specifies the name of your `VirtualMachine` manifest YAML file.

**Verification**

1.  Verify that the VM live migration is progressing successfully by using the following command.
    ```terminal
    $ oc get vmi vm-fedora -w -o jsonpath='{.status.conditions[?(@.type=="MigrationRequired")]}{"\n"}'
    ```

    Example output:
    ```terminal
    {"type":"MigrationRequired","status":"True","lastProbeTime":null,"lastTransitionTime":"2024-05-27T10:15:30Z","reason":"AutoMigrationDueToLiveUpdate","message":""}
    ```
1.  Use the following command to connect to the VM console and to devices on the new network:
    ```terminal
    $ virtctl console vm-fedora
    ```