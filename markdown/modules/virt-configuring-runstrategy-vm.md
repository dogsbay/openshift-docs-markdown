{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure VM run strategy {id="virt-configuring-runstrategy-vm_{{ context }}"}

You can configure a run strategy for a virtual machine (VM) by using the command line. The run strategy controls whether a VM automatically restarts after disruptions such as node failures or maintenance events. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Edit the `VirtualMachine` resource by running the following command:
    ```terminal
    $ oc edit vm <vm_name> -n <namespace>
    ```

    Example run strategy:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    spec:
      runStrategy: Always
    # ...
    ```