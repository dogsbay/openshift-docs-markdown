{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking cluster Operators {id="troubleshooting-clusters-check-cluster-operators_{{ context }}"}

Periodically check the status of your cluster Operators to find issues early. {._abstract}

**Procedure**

*   Check the status of the cluster Operators by running the following command:
    ```terminal
    $ oc get co
    ```