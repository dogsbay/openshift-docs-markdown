{%- set _mod_docs_content_type = "PROCEDURE" %}
# Hot unplugging a secondary network interface by using the CLI {id="virt-hot-unplugging-bridge-network-interface_{{ context }}"}

You can remove a secondary network interface from a running virtual machine (VM). {._abstract}


:::note

Hot unplugging is not supported for Single Root I/O Virtualization (SR-IOV) interfaces.

:::


**Prerequisites**

*   Your VM must be running.
*   The VM must be created on a cluster running {{ VirtProductName }} 4.14 or later.
*   The VM must have a bridge network interface attached.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Using your preferred text editor, edit the `VirtualMachine` manifest file and set the interface state to `absent`. Setting the interface state to `absent` detaches the network interface from the guest, but the interface still exists in the pod.

    Example VM configuration:
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
              # set the interface state to absent
              - name: <secondary_nic>
                state: absent
                bridge: {}
        networks:
          - name: defaultnetwork
            pod: {}
          - name: <secondary_nic>
            multus:
              networkName: <nad_name>
    # ...
    ```

    Set the interface state to `absent` to detach it from the running VM. Removing the interface details from the VM specification does not hot unplug the secondary network interface.
1.  Save your changes and exit the editor.
1.  For the new configuration to take effect, apply the changes by running the following command. Applying the changes triggers automatic VM live migration and removes the interface from the pod.
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    where:

    &lt;filename>
    :   Specifies the name of your `VirtualMachine` manifest YAML file.