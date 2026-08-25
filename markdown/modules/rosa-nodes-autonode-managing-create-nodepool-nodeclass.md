{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a node pool with a non-default `OpenshiftEC2NodeClass` {id="rosa-nodes-autonode-managing-create-nodepool-nodeclass_{{ context }}"}

After creating a non-default `OpenshiftEC2NodeClass` resource, create a `NodePool` that references it. This binds the node pool’s provisioned nodes to the custom configuration defined in the non-default `OpenshiftEC2NodeClass`. {._abstract}

**Prerequisites**

*   A non-default `OpenshiftEC2NodeClass` resource exists and is in a `Ready` state.

**Procedure**

1.  Create a node pool manifest that references the non-default `OpenshiftEC2NodeClass`:
    ```terminal
    $ cat > nodepool.yaml <<'EOF'
    apiVersion: karpenter.sh/v1
    kind: NodePool
    metadata:
      name: custom-np
    spec:
      template:
        spec:
          requirements:
          - key: "karpenter.k8s.aws/instance-cpu"
            operator: Gte
            values: ["4"]
          - key: karpenter.k8s.aws/instance-category
            operator: In
            values: ["c","r","m"]
          nodeClassRef:
            group: karpenter.k8s.aws
            kind: EC2NodeClass
            name: <non-default-nodeclass-name>

    EOF
    ```

    where:

    `nodeClassRef.name`
    :   The name of the non-default `OpenshiftEC2NodeClass` resource. This value must match the `metadata.name` of an existing `OpenshiftEC2NodeClass`.

1.  Apply the node pool:
    ```terminal
    $ oc apply -f nodepool.yaml
    ```

**Verification**

*   Verify that the node pool references the non-default `OpenshiftEC2NodeClass`:
    ```terminal
    $ oc get nodepool
    ```
    ```terminal title="Example output"
    NAME        NODECLASS          NODES   READY   AGE
    custom-np   custom-nodeclass   0       True    3s
    ```