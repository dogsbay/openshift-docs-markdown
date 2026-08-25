{%- set _mod_docs_content_type = "PROCEDURE" %}
# Hot plugging a secondary network interface by using the CLI {id="virt-hot-plugging-bridge-network-interface_{{ context }}"}

You can hot plug a secondary network interface to a virtual machine (VM) while the VM is running. {._abstract}

**Prerequisites**

*   A network attachment definition is configured in the same namespace as your VM.
*   The VM to which you want to hot plug the network interface is running.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Use your preferred text editor to edit the `VirtualMachine` manifest, as shown in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-fedora
    template:
      spec:
        domain:
          devices:
            interfaces:
            - name: defaultnetwork
              masquerade: {}
            # new interface
            - name: <secondary_nic>
              bridge: {}
        networks:
        - name: defaultnetwork
          pod: {}
        # new network
        - name: <secondary_nic>
          multus:
            networkName: <nad_name>
    # ...
    ```
    *   `spec.template.spec.domain.devices.interfaces.name` specifies the name of the new network interface.
    *   `spec.template.spec.networks.name` specifies the name of the network. This must be the same as the `name` of the new network interface that you defined in the `template.spec.domain.devices.interfaces` list.
    *   `spec.template.spec.networks.multus.networkName` specifies the name of the `NetworkAttachmentDefinition` object.
1.  Save your changes and exit the editor.
1.  For the new configuration to take effect, apply the changes by running the following command. Applying the changes triggers automatic VM live migration and attaches the network interface to the running VM.
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    where:

    &lt;filename>
    :   Specifies the name of your `VirtualMachine` manifest YAML file.

**Verification**

1.  Verify that the VM live migration is successful by using the following command:
    ```terminal
    $ oc get VirtualMachineInstanceMigration -w
    ```

    Example output:
    ```terminal
    NAME                        PHASE             VMI
    kubevirt-migrate-vm-lj62q   Scheduling        vm-fedora
    kubevirt-migrate-vm-lj62q   Scheduled         vm-fedora
    kubevirt-migrate-vm-lj62q   PreparingTarget   vm-fedora
    kubevirt-migrate-vm-lj62q   TargetReady       vm-fedora
    kubevirt-migrate-vm-lj62q   Running           vm-fedora
    kubevirt-migrate-vm-lj62q   Succeeded         vm-fedora
    ```
1.  Verify that the new interface is added to the VM by checking the status of the virtual machine instance (VMI):
    ```terminal
    $ oc get vmi vm-fedora -ojsonpath="{ @.status.interfaces }"
    ```

    Example output:
    ```json
    [
      {
        "infoSource": "domain, guest-agent",
        "interfaceName": "eth0",
        "ipAddress": "10.130.0.195",
        "ipAddresses": [
          "10.130.0.195",
          "fd02:0:0:3::43c"
        ],
        "mac": "52:54:00:0e:ab:25",
        "name": "default",
        "queueCount": 1
      },
      {
        "infoSource": "domain, guest-agent, multus-status",
        "interfaceName": "eth1",
        "mac": "02:d8:b8:00:00:2a",
        "name": "bridge-interface",
        "queueCount": 1
      }
    ]
    ```

    The hot plugged interface appears in the VMI status.