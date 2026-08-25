{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring huge pages for virtual machines {id="virt-configuring-huge-pages-for-vms_{{ context }}"}

You can configure virtual machines to use pre-allocated huge pages by including the
`memory.hugepages.pageSize` and `resources.requests.memory` parameters in your virtual machine configuration. {._abstract}

The memory request must be divisible by the page size. For example, you cannot request `500Mi` memory with a page size of `1Gi`.


:::note

The memory layouts of the host and the guest OS are unrelated.
Huge pages requested in the virtual machine manifest apply to QEMU.
Huge pages inside the guest can only be configured based on the amount of available memory of the virtual machine instance.

:::


If you edit a running virtual machine, the virtual machine must be rebooted for the changes to take effect.

**Prerequisites**

*   Nodes must have pre-allocated huge pages configured.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  In your virtual machine configuration, add the `resources.requests.memory` and
`memory.hugepages.pageSize` parameters to the `spec.domain`. The following configuration snippet is
for a virtual machine that requests a total of `4Gi` memory with a page size of `1Gi`:

    ```yaml
    kind: VirtualMachine
    # ...
    spec:
      domain:
        resources:
          requests:
            memory: "4Gi"
        memory:
          hugepages:
            pageSize: "1Gi"
    # ...
    ```
    *   `memory` defines the total amount of memory requested for the virtual machine. This value must be divisible by the page size.
    *   `pageSize` defines the size of each huge page. Valid values for x86_64 architecture are `1Gi` and `2Mi`. The page size must be smaller than the requested memory.
1.  Apply the virtual machine configuration:
    ```terminal
    $ oc apply -f <virtual_machine>.yaml
    ```