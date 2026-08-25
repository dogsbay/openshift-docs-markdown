{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing Cluster Network Operator logs {id="nw-cno-logs_{{ context }}"}

You can view Cluster Network Operator logs by using the `oc logs` command. {._abstract}

**Procedure**

*   Run the following command to view the logs of the Cluster Network Operator:
    ```terminal
    $ oc logs --namespace=openshift-network-operator deployment/network-operator
    ```