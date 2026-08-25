{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling VMs to run {{ ibm_title }} Secure Execution on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="virt-enabling-vms-ibm-secure-execution-ibm-z_{{ context }}"}

To enable {{ ibm_name }} Secure Execution virtual machines (VMs) on {{ ibm_z_name }} and {{ ibm_linuxone_name }} on the compute nodes of your cluster, you must ensure that you meet the prerequisites and complete the following steps. {._abstract}

**Prerequisites**

*   Your cluster has logical partition (LPAR) nodes running on {{ ibm_name }} z15 or later, or {{ ibm_linuxone_name }} III or later.
*   You have {{ ibm_name }} Secure Execution workloads available to run on the cluster.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  To run {{ ibm_name }} Secure Execution VMs, you must add the `prot_virt=1` kernel parameter for each compute node. To enable all compute nodes, create a file named `secure-execution.yaml` that contains the following machine config manifest:
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      name: secure-execution
      labels:
        machineconfiguration.openshift.io/role: worker
    spec:
      kernelArguments:
        - prot_virt=1
    ```

    where:

    `prot_virt=1`
    :   Specifies that the ultravisor can store memory security information.

1.  Apply the changes by running the following command:
    ```terminal
    $ oc apply -f secure-execution.yaml
    ```

    The Machine Config Operator (MCO) applies the changes and reboots the nodes in a controlled rollout.