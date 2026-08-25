{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a VM memory dump {id="virt-generating-a-vm-memory-dump_{{ context }}"}

When a virtual machine (VM) terminates unexpectedly, you can use the `virtctl memory-dump` to generate a memory dump command to output a VM memory dump and save it on a persistent volume claim (PVC). Afterwards, you can analyze the memory dump to diagnose and troubleshoot issues on the VM. {._abstract}

**Procedure**

1.  Optional: You have an existing PVC on which you want to save the memory dump.
    *   The PVC volume mode must be `FileSystem`.
    *   The PVC must be large enough to contain the memory dump.

        The formula for calculating the PVC size is `(VMMemorySize + 100Mi) * (1 + FileSystemOverhead)`, where `100Mi` is the memory dump overhead, and `FileSystemOverhead` is defined in the `HCO` object.
1.  Create a memory dump of the required VM:
    *   If you have an existing PVC selected on which you want to save the memory dump:
        ```terminal
        $ virtctl memory-dump get <vm_name> --claim-name=<pvc_name>
        ```
    *   If you want to create a new PVC for the memory dump:
        ```terminal
        $ virtctl memory-dump get <vm_name> --claim-name=<new_pvc_name> --create-claim
        ```
1.  Download the memory dump:
    ```terminal
    $ virtctl memory-dump download <vm_name> --output=<output_file>
    ```
1.  Attach the memory dump to a Red Hat Support case.

    Alternatively, you can inspect the memory dump, for example by using the volatility3 tool.
1.  Optional: Remove the memory dump:
    ```terminal
    $ virtctl memory-dump remove <vm_name>
    ```