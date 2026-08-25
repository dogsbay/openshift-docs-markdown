{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing Ingress Node Firewall Operator rules {id="nw-infw-operator-viewing_{{ context }}"}

Inspect existing rules and configs to confirm the firewall is applied as intended. {._abstract}

**Procedure**

1.  Run the following command to view all current rules :
    ```terminal
    $ oc get ingressnodefirewall
    ```
1.  Choose one of the returned `<resource>` names and run the following command to view the rules or configs:
    ```terminal
    $ oc get <resource> <name> -o yaml
    ```