{%- set _mod_docs_content_type = "PROCEDURE" %}
# View Ingress Controller logs {id="nw-ingress-operator-logs_{{ context }}"}

You can view your Ingress Controller logs.

**Procedure**

*   View your Ingress Controller logs:
    ```terminal
    $ oc logs --namespace=openshift-ingress-operator deployments/ingress-operator -c <container_name>
    ```