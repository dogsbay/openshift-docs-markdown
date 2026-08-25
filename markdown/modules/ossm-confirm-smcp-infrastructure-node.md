{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the {{ SMProductShortName }} control plane is running on infrastructure nodes {id="ossm-confirm-smcp-infrastructure-node_{{ context }}"}

**Procedure**

*   Confirm that the nodes associated with Istiod, Ingress Gateway, and Egress Gateway pods are infrastructure nodes:
    ```terminal
    $ oc -n istio-system get pods -owide
    ```