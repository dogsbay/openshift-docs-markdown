{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling a managed route {id="zero-trust-manager-disabling-route_{{ context }}"}

If you want to fully control the behavior of exposing the OIDC Discovery Provider service, you can disable the managed route based on your requirements. {._abstract}

**Procedure**

*   To manually configure the OIDC Discovery Provider, set `managedRoute` to `false` by running the following command:
    ```terminal
    $ oc patch SpireOIDCDiscoveryProvider cluster --type=merge -p='
    spec:
      managedRoute: "false"
    ```