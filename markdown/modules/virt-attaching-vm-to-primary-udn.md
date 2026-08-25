{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching a virtual machine to the primary user-defined network by using the CLI {id="virt-attaching-vm-to-primary-udn_{{ context }}"}

You can connect a virtual machine (VM) to the primary user-defined network (UDN) by using the {{ oc_first }}. {._abstract}

{%- set FeatureName = "Using the passt binding plugin to attach a VM to the primary UDN" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `VirtualMachine` manifest to add the UDN interface details, as in the following example:

    Example `VirtualMachine` manifest:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
      namespace: my-namespace
    spec:
      template:
        spec:
          domain:
            devices:
              interfaces:
                - name: default
                  binding:
                    name: l2bridge
    # ...
          networks:
          - name: default
            pod: {}
    # ...
    ```
    *   `metadata.namespace` specifies the namespace in which the VM is located. This value must match the namespace in which the UDN is defined.
    *   `spec.template.spec.domain.devices.interfaces.name` specifies the name of the user-defined network interface.
    *   `spec.template.spec.domain.devices.interfaces.binding.name` specifies the name of the binding plugin that is used to connect the interface to the VM. The possible values are `l2bridge` and `passt`. The default value is `l2bridge`.
    *   `spec.template.spec.networks.name` specifies the name of the network. This must match the value of the `spec.template.spec.domain.devices.interfaces.name` field.
1.  Optional: If you are using the Plug a Simple Socket Transport (passt) network binding plugin, set the `hco.kubevirt.io/deployPasstNetworkBinding` annotation to `true` in the `HyperConverged` custom resource (CR) by running the following command:
    ```terminal
    $ oc annotate {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} hco.kubevirt.io/deployPasstNetworkBinding=true --overwrite
    ```
1.  Apply the `VirtualMachine` manifest by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```