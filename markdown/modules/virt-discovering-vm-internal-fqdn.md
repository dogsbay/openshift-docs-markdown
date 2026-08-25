{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mapping a virtual machine to a headless service by using the CLI {id="virt-discovering-vm-internal-fqdn_{{ context }}"}

To connect to a virtual machine (VM) from within the cluster by using its internal fully qualified domain name (FQDN), you must first map the VM to a headless service. Set the `spec.hostname` and `spec.subdomain` parameters in the VM configuration file. {._abstract}

If a headless service exists with a name that matches the subdomain, a unique DNS A record is created for the VM in the form of `<vm.spec.hostname>.<vm.spec.subdomain>.<vm.metadata.namespace>.svc.cluster.local`.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `VirtualMachine` manifest to add the service selector label and subdomain by running the following command:
    ```terminal
    $ oc edit vm <vm_name>
    ```

    Example `VirtualMachine` manifest file:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-fedora
    spec:
      template:
        metadata:
          labels:
            expose: me
        spec:
          hostname: "myvm"
          subdomain: "mysubdomain"
    # ...
    ```
    *   `spec.template.metadata.labels.expose` defines a label that must match the `spec.selector` attribute of the `Service` manifest that you previously created.
    *   `spec.template.spec.hostname` defines the hostname. If this attribute is not specified, the resulting DNS A record takes the form of `<vm.metadata.name>.<vm.spec.subdomain>.<vm.metadata.namespace>.svc.cluster.local`.
    *   `spec.template.spec.subdomain` defines the subdomain. The `spec.subdomain` attribute must match the `metadata.name` value of the `Service` object.
1.  Save your changes and exit the editor.
1.  Restart the VM to apply the changes.