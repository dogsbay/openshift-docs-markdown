{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching a virtual machine to an OVN-Kubernetes secondary network using the CLI {id="virt-attaching-vm-to-ovn-secondary-nw-cli_{{ context }}"}

You can connect a virtual machine (VM) to the OVN-Kubernetes secondary network by including the network details in the VM configuration. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` privileges.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `VirtualMachine` manifest to add the OVN-Kubernetes secondary network interface details, as in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-server
    spec:
      runStrategy: Always
      template:
        spec:
          domain:
            devices:
              interfaces:
              - name: secondary
                bridge: {}
            resources:
              requests:
                memory: 1024Mi
          networks:
          - name: secondary
            multus:
              networkName: <nad_name>
          nodeSelector:
            node-role.kubernetes.io/worker: ''
    # ...
    ```
    *   `spec.template.spec.domain.devices.interfaces.name` specifies the name of the OVN-Kubernetes secondary interface.
    *   `spec.template.spec.networks.name` specifies the name of the network. This must match the value of the `spec.template.spec.domain.devices.interfaces.name` field.
    *   `spec.template.spec.networks.multus.networkName` specifies the name of the `NetworkAttachmentDefinition` object.
    *   `spec.template.spec.nodeSelector` specifies the nodes on which the VM can be scheduled. The recommended node selector value is `node-role.kubernetes.io/worker: ''`.
1.  Apply the `VirtualMachine` manifest:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Optional: If you edited a running virtual machine, you must restart it for the changes to take effect.