{%- set _mod_docs_content_type = "PROCEDURE" %}
# View the default Ingress Controller {id="nw-ingress-view_{{ context }}"}

The Ingress Operator is a core feature of {{ product_title }} and is enabled out of the
box.

Every new {{ product_title }} installation has an `ingresscontroller` named default. It
can be supplemented with additional Ingress Controllers. If the default
`ingresscontroller` is deleted, the Ingress Operator will automatically recreate it
within a minute.

**Procedure**

*   View the default Ingress Controller:
    ```terminal
    $ oc describe --namespace=openshift-ingress-operator ingresscontroller/default
    ```