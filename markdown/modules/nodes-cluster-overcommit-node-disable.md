{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling overcommitment for a node {id="nodes-cluster-overcommit-node-disable_{{ context }}"}

When overcommitment is enabled on a node, you can disable overcommitment on that node. Disabling overcommit can help ensure predictability, stability, and high performance in your cluster. {._abstract}

**Procedure**

*   Run the following command on a node to disable overcommitment on that node:
    ```terminal
    $ sysctl -w vm.overcommit_memory=0
    ```