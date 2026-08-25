{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying vNUMA status of a VM {id="virt-numa-check-config_{{ context }}"}

VM administrators might need to confirm whether non-uniform memory access (NUMA) is configured for a VM, to verify the VM’s resource allocation setup for high-performance, latency-sensitive workloads that rely on memory locality. {._abstract}

You can verify whether an already deployed VM is configured for vNUMA by checking the `spec.domain.cpu.numa` attribute. This is displayed as a **vNUMA** badge in the {{ product_title }} web console.

**Prerequisites**

*   You have access to an {{ product_title }} cluster with {{ VirtProductName }} installed.
*   If you want to use the command line for verification, you must have installed the {{ oc_first }}. Otherwise, you only need access to the {{ product_title }} web console.

**Procedure**

*   To verify vNUMA status on the command line, check that the `spec.domain.cpu.numa` attribute is configured by using the {{ oc_first }}. Run the following command:
    ```terminal
    $ oc get vm <vm_name> -n <namespace> -o jsonpath='{.spec.template.spec.domain.cpu.numa}'
    ```

    If any output other than an empty string is returned, vNUMA is enabled for the VM.
*   To verify vNUMA status in a GUI, check if the VM has a **vNUMA** badge in the {{ product_title }} web console. Go to **VirtualMachines** -> **Virtual machines** -> **VirtualMachine details**, and check either the **Overview** or the **Configuration** tabs.