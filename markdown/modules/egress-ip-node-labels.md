{%- set _mod_docs_content_type = "PROCEDURE" %}
# Label the nodes {id="cloud-experts-consistent-egress-ip-node-labels_{{ context }}"}

Apply labels to worker nodes for egress IP assignments. {._abstract}

**Procedure**

1.  Obtain your pending egress IP assignments by running the following command:
    ```terminal
    $ oc get egressips
    ```
    ```terminal title="Example output"
    NAME              EGRESSIPS       ASSIGNED NODE   ASSIGNED EGRESSIPS
    demo-egress-ns    10.10.100.253
    demo-egress-pod   10.10.100.254
    ```

    The egress IP rule that you created only applies to nodes with the `k8s.ovn.org/egress-assignable` label. Make sure that the label is only on a specific machine pool.
1.  Assign the label to your machine pool using the following command:

    :::warning

    If you rely on node labels for your machine pool, this command will replace those labels. Be sure to input your desired labels into the `--labels` field to ensure your node labels remain.
    
    :::

    ```terminal
    $ rosa update machinepool ${ROSA_MACHINE_POOL_NAME} \
      --cluster="${ROSA_CLUSTER_NAME}" \
      --labels "k8s.ovn.org/egress-assignable="
    ```