{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing Network Observability Operator status and configuration {id="nw-status-configuration-network-observability-operator_{{ context }}"}

Inspect the current status, configuration details, and generated resources of the Network Observability Operator by using the `oc describe flowcollector/cluster` command. {._abstract}

**Procedure**

1.  Run the following command to view the status and configuration of the Network Observability Operator:
    ```terminal
    $ oc describe flowcollector/cluster
    ```