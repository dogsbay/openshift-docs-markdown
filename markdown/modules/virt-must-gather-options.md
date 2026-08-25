{%- set _mod_docs_content_type = "REFERENCE" %}
# must-gather tool options {id="virt-must-gather-options_{{ context }}"}

To troubleshoot complex issues and collect specific data beyond the default logs, add optional parameters to the `must-gather` command when gathering information from your cluster. {._abstract}

You can specify a combination of scripts and environment variables for the following options:

*   Collecting detailed virtual machine (VM) information from a namespace
*   Collecting detailed information about specified VMs
*   Collecting image, image-stream, and image-stream-tags information
*   Limiting the maximum number of parallel processes used by the `must-gather` tool

## Environment variables {id="must-gather-environment-variables_{{ context }}"}

You can specify environment variables for a compatible script.


`NS=<namespace_name>`
:   Collect virtual machine information, including `virt-launcher` pod details, from the namespace that you specify. The `VirtualMachine` and `VirtualMachineInstance` CR data is collected for all namespaces.


`VM=<vm_name>`
:   Collect details about a particular virtual machine. To use this option, you must also specify a namespace by using the `NS` environment variable.


`PROS=<number_of_processes>`
:   Modify the maximum number of parallel processes that the `must-gather` tool uses. The default value is `5`.

    :::important


    Using too many parallel processes can cause performance issues. Increasing the maximum number of parallel processes is not recommended.
    
    :::


## Scripts {id="must-gather-scripts_{{ context }}"}

Each script is compatible only with certain environment variable combinations.


`/usr/bin/gather`
:   Use the default `must-gather` script, which collects cluster data from all namespaces and includes only basic VM information. This script is compatible only with the `PROS` variable.


`/usr/bin/gather --vms_details`
:   Collect VM log files, VM definitions, control-plane logs, and namespaces that belong to {{ VirtProductName }} resources. Specifying namespaces includes their child objects. If you use this parameter without specifying a namespace or VM, the `must-gather` tool collects this data for all VMs in the cluster. This script is compatible with all environment variables, but you must specify a namespace if you use the `VM` variable.


`/usr/bin/gather --images`
:   Collect image, image-stream, and image-stream-tags custom resource information. This script is compatible only with the `PROS` variable.


`/usr/bin/gather --instancetypes`
:   Collect instance types information. This information is not currently collected by default; you can, however, optionally collect it.

## Usage and examples {id="usage-and-examples_{{ context }}"}

You can run a script by itself or with one or more compatible environment variables.

```terminal title="must-gather syntax with optional parameters" {minja}
$ oc adm must-gather \
  --image=registry.redhat.io/container-native-virtualization/cnv-must-gather-rhel9:v{{ HCOVersion }} \
  -- <environment_variable_1> <environment_variable_2> <script_name>
```

**Compatible parameters**

| Script | Compatible environment variable |
| --- | --- |
| `/usr/bin/gather` | * `PROS=<number_of_processes>` |
| `/usr/bin/gather --vms_details` | * For a namespace: `NS=<namespace_name>`<br>* For a VM: `VM=<vm_name> NS=<namespace_name>`<br>* `PROS=<number_of_processes>` |
| `/usr/bin/gather --images` | * `PROS=<number_of_processes>` |