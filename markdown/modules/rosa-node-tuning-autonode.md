{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure node tuning for {{ autonode }} nodes {id="rosa-node-tuning-autonode_{{ context }}"}

You can apply `sysctl` node tuning configurations to nodes that the {{ autonode }} provisions. To apply a `TuningConfig` to {{ autonode }}-managed nodes, create a Karpenter node pool with a label that maps it to a {{ product_title }} machine pool that has the `TuningConfig` applied. {._abstract}


:::important

Only `sysctl` configurations are supported for {{ autonode }} nodes. Boot-time kernel parameters are not available.

:::


**Prerequisites**

*   The {{ autonode }} is enabled on the cluster.
*   You have installed the `oc` CLI and are logged in to the cluster.
*   You have created a `TuningConfig` for your cluster.
*   You have created a {{ product_title }} machine pool with the `TuningConfig` applied.

**Procedure**

1.  Create a Karpenter node pool manifest that includes the `hypershift.openshift.io/nodePool` label:
    ```yaml
    apiVersion: karpenter.sh/v1
    kind: NodePool
    metadata:
      name: tuned-nodepool
    spec:
      template:
        metadata:
          labels:
            hypershift.openshift.io/nodePool: <rosa_machinepool_name>
        spec:
          requirements:
          - key: node.kubernetes.io/instance-type
            operator: In
            values:
            - m5.xlarge
          - key: karpenter.sh/capacity-type
            operator: In
            values: ["on-demand"]
          nodeClassRef:
            group: karpenter.k8s.aws
            kind: EC2NodeClass
            name: default
    ```

    where:

    `<rosa_machinepool_name>`
    :   The name of the {{ product_title }} machine pool that has the `TuningConfig` applied.

1.  Apply the node pool manifest:
    ```terminal
    $ oc apply -f <nodepool_manifest>.yaml
    ```

**Verification**

*   Verify the node pool is ready:
    ```terminal
    $ oc get nodepool
    ```
    ```terminal title="Example output"
    NAME             NODECLASS   NODES   READY   AGE
    tuned-nodepool   default     0       True    3s
    ```