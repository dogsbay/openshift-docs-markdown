{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling a node pool {id="hcp-virt-scale-nodpool_{{ context }}"}

You can manually scale a node pool for a hosted cluster on {{ VirtProductName }} by using the `oc scale` command. {._abstract}

**Procedure**

1.  Run the following command:
    ```terminal
    NODEPOOL_NAME=${CLUSTER_NAME}-work
    NODEPOOL_REPLICAS=5

    $ oc scale nodepool/$NODEPOOL_NAME --namespace clusters \
      --replicas=$NODEPOOL_REPLICAS
    ```
1.  After a few moments, enter the following command to see the status of the node pool:
    ```terminal
    $ oc --kubeconfig $CLUSTER_NAME-kubeconfig get nodes
    ```
    ```terminal title="Example output"
    NAME                  STATUS   ROLES    AGE     VERSION
    example-9jvnf         Ready    worker   97s     v1.27.4+18eadca
    example-n6prw         Ready    worker   116m    v1.27.4+18eadca
    example-nc6g4         Ready    worker   117m    v1.27.4+18eadca
    example-thp29         Ready    worker   4m17s   v1.27.4+18eadca
    example-twxns         Ready    worker   88s     v1.27.4+18eadca
    ```