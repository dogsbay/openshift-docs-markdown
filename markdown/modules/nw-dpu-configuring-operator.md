{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the DPU Operator {id="nw-dpu-configuring-operator_{{ context }}"}

You can configure the DPU Operator after installation to enable management of DPU devices and network attachments in both dual cluster and single cluster deployment modes. {._abstract}

You can configure the DPU Operator to manage the DPU devices and network attachments in your cluster.

To configure the DPU Operator follow these steps:

**Procedure**

1.  Create the `DpuOperatorConfig` Custom Resource (CR) based on your deployment mode:
    *   Dual Cluster Deployment: You must create the `DpuOperatorConfig` CR on both the host {{ product_title }} cluster and on each of the {{ ms }} DPU clusters.
    *   Single Cluster Deployment: This deployment uses a standard {{ product_title }} cluster. You only need to create the `DpuOperatorConfig` CR once on this cluster.

        The content of the CR is the same for all clusters.
1.  Create a file named `dpu-operator-config.yaml` by using the following YAML:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: DpuOperatorConfig
    metadata:
     name: dpu-operator-config
    spec:
     logLevel: 0
    ```
    *   `metadata.name`: Specifies the name of the Custom Resource, which must be `dpu-operator-config`.
    *   `spec.logLevel`: Sets the required logging verbosity in the Operator container logs. The value `0` is the default setting.
1.  Create the resource by running the following command:
    ```terminal
    $ oc apply -f dpu-operator-config.yaml
    ```
1.  Label all nodes that either have an attached DPU or are functioning as a DPU. You can apply this label by running the following command:
    ```terminal
    $ oc label node <node_name> dpu=true
    ```

    where:

    `node_name`
    :   Refers to the name of your node, such as `worker-1`.

    :::note

    There are two ways to deploy clusters that are compatible with DPUs:

    *   Dual cluster deployment: This consists of {{ product_title }} running on the hosts and {{ ms }} running on the DPU. In this mode, the {{ ms }} instance also needs to deploy the DPU Operator, and you must set the label `dpu=true` on the node.
    *   Single cluster deployment: This consists of only {{ product_title }} running on hosts, where the DPUs are integrated into the main cluster. DPUs just require the label `dpu=true` for both the host nodes with DPUs installed and the DPU nodes themselves. The DPU Operator automatically detects the role of the node whether it is running as a DPU or a host with an attached DPU.
    
    :::