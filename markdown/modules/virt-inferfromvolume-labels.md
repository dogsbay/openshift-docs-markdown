{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the inferFromVolume labels {id="inferfromvolume-labels_{{ context }}"}

Use the following labels on your PVC, data source, or data volume to instruct the inference mechanism which instance type, preference, or both to use when trying to boot from a volume. {._abstract}

*   A cluster-wide instance type: `instancetype.kubevirt.io/default-instancetype` label.
*   A namespaced instance type: `instancetype.kubevirt.io/default-instancetype-kind` label. Defaults to the `VirtualMachineClusterInstancetype` label if left empty.
*   A cluster-wide preference: `instancetype.kubevirt.io/default-preference` label.
*   A namespaced preference: `instancetype.kubevirt.io/default-preference-kind` label. Defaults to `VirtualMachineClusterPreference` label, if left empty.

**Prerequisites**

*   You must have an instance type, preference, or both on the cluster.
*   You have installed the {{ oc_first }}.

**Procedure**

*   To apply a label to a data source, use `oc label`. The following command applies a label that points to a cluster-wide instance type:
    ```terminal
    $ oc label DataSource foo instancetype.kubevirt.io/default-instancetype=<my_instancetype>
    ```