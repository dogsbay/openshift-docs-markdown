{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing outdated VM workloads {id="virt-viewing-outdated-workloads_{{ context }}"}

You can view a list of outdated virtual machine (VM) workloads by using the CLI. {._abstract}


:::note

If there are outdated virtualization pods in your cluster, the `OutdatedVirtualMachineInstanceWorkloads` alert fires.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   To view a list of outdated virtual machine instances (VMIs), run the following command:
    ```terminal
    $ oc get vmi -l kubevirt.io/outdatedLauncherImage --all-namespaces
    ```