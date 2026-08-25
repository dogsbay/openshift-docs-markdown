{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the installation status {id="learning-getting-started-cluster-status_{{ context }}"}

To verify that your environment is operating correctly and to monitor the health of your deployments, youu can check the status of your cluster. You can quickly perform this check by using the {{ rosa_cli_first }}. {._abstract}

**Procedure**

1.  Run one of the following commands to check the status of the cluster:
    *   For a detailed view of the cluster status, run:
        ```terminal
        $ rosa describe cluster --cluster $CLUSTER_NAME
        ```
    *   For an abridged view of the cluster status, run:
        ```terminal
        $ rosa list clusters
        ```
    *   To watch the log as it progresses, run:
        ```terminal
        $ rosa logs install --cluster $CLUSTER_NAME --watch
        ```
1.  Once the state changes to “ready” your cluster is installed. It might take a few more minutes for the worker nodes to come online.