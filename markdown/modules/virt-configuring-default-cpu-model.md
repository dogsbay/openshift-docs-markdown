{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the default CPU model {id="virt-configuring-default-cpu-model_{{ context }}"}

Use the `defaultCPUModel` setting in the `HyperConverged` custom resource (CR) to define a cluster-wide default CPU model. {._abstract}

When you set a cluster-wide default CPU model:

*   Every new virtual machine (VM) that does not have an explicit CPU model defined receives a node selector for the chosen CPU model.
*   Only nodes labeled with `cpu-model.node.kubevirt.io/<cpuModel>` are eligible to run VMs using the default model.
*   Nodes that do not support the selected CPU model are not considered during VM scheduling.


:::note

The `defaultCPUModel` is case sensitive and must match a CPU model supported by nodes in your cluster.

:::


A CPU model configured at the VM level always takes precedence over the cluster-wide default CPU model.

**Prerequisites**

*   Install the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add the `defaultCPUModel` field to the CR and set the value to the name of a CPU model that exists in the cluster:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
     name: kubevirt-hyperconverged
     namespace: {{ CNVNamespace }}
    spec:
      defaultCPUModel: "EPYC-IBPB"
    ```

    where:

    `EPYC-IBPB`
    :   Specifies a CPU model that is supported by nodes in your cluster.

1.  Apply the YAML file to your cluster.