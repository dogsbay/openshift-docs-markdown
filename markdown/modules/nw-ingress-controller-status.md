{%- set _mod_docs_content_type = "PROCEDURE" %}
# View Ingress Controller status {id="nw-ingress-controller-status_{{ context }}"}

You can view the status of a particular Ingress Controller. {._abstract}

**Procedure**

*   View the status of an Ingress Controller:
    ```terminal
    $ oc describe --namespace=openshift-ingress-operator ingresscontroller/<name>
    ```