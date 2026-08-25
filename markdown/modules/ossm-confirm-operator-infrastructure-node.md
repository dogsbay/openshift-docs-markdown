{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the {{ SMProductShortName }} Operator is running on infrastructure node {id="ossm-confirm-operator-infrastructure-node_{{ context }}"}

**Procedure**

*   Verify that the node associated with the Operator pod is an infrastructure node:
    ```terminal
    $ oc -n openshift-operators get po -l name=istio-operator -owide
    ```