{%- set _mod_docs_content_type = "PROCEDURE" %}
# View Ingress Operator status {id="nw-ingress-operator-status_{{ context }}"}

You can view and inspect the status of your Ingress Operator.

**Procedure**

*   View your Ingress Operator status:
    ```terminal
    $ oc describe clusteroperators/ingress
    ```