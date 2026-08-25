{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing Cluster Network Operator status {id="nw-cno-status_{{ context }}"}

You can inspect the status and view the details of the Cluster Network Operator by using the `oc describe` command. {._abstract}

**Procedure**

*   Run the following command to view the status of the Cluster Network Operator:
    ```terminal
    $ oc describe clusteroperators/network
    ```