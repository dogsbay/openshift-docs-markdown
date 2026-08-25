{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a node pool {id="rosa-nodes-autonode-managing-nodepool_{{ context }}"}

Create a node pool to define the compute capacity that the {{ autonode }} can provision. {._abstract}

**Prerequisites**

*   The {{ autonode }} is enabled on the cluster.
*   The default `OpenshiftEC2NodeClass` is in a `Ready` state.
*   You have installed the `oc` CLI and are logged in to the cluster.

**Procedure**

1.  Create a node pool manifest:
    ```terminal
    $ cat > nodepool.yaml <<'EOF'
    apiVersion: karpenter.sh/v1
    kind: NodePool
    metadata:
      name: default-np
    spec:
      template:
        metadata:
          labels:
            autonode: "true"
        spec:
          requirements:
          - key: node.kubernetes.io/instance-type
            operator: In
            values:
            - c5.xlarge
          - key: karpenter.sh/capacity-type
            operator: In
            values: ["on-demand"]
          nodeClassRef:
            group: karpenter.k8s.aws
            kind: EC2NodeClass
            name: default
    EOF
    ```

    where:

    `nodeClassRef.kind`
    :   Required field that must use the `EC2NodeClass` type.

    `spec.labels`
    :   Optional field that you can use to place pods by using labels.

    :::note

    For a list of all requirements available under `spec.requirements`, see the _Additional resources_.
    
    :::


1.  Apply the node pool:
    ```terminal
    $ oc apply -f nodepool.yaml
    ```
1.  Verify the node pool is ready:
    ```terminal
    $ oc get nodepool
    ```
    ```terminal title="Example output"
    NAME         NODECLASS   NODES   READY   AGE
    default-np   default     0       True    3s
    ```