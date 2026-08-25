{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up your cluster {id="cloud-experts-consistent-egress-ip-cluster-cleanup_{{ context }}"}

Clean up your cluster environment after testing the egress IP configuration. {._abstract}

**Procedure**

1.  Clean up your cluster by running the following commands:
    ```terminal
    $ oc delete svc demo-service -n default
    $ oc delete pod demo-service -n default
    $ oc delete project demo-egress-ns
    $ oc delete project demo-egress-pod
    $ oc delete egressip demo-egress-ns
    $ oc delete egressip demo-egress-pod
    ```
1.  Clean up the assigned node labels by running the following command:

    :::warning

    If you rely on node labels for your machine pool, this command replaces those labels. Input your desired labels into the `--labels` field to ensure your node labels remain.
    
    :::

    ```terminal
    $ rosa update machinepool ${ROSA_MACHINE_POOL_NAME} \
      --cluster="${ROSA_CLUSTER_NAME}" \
      --labels ""
    ```