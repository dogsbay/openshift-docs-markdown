{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating {{ tekton_hub }} with custom categories and catalogs {id="updating-tekton-hub-with-custom-categories-and-catalogs_{{ context }}"}

Cluster administrators can update Tekton Hub with custom categories, catalogs, scopes, and default scopes that reflect the context of their organization. {._abstract}

**Procedure**

1.  Optional: Edit the `categories`, `catalogs`, `scopes`, and `default:scopes` fields in the Tekton Hub CR.

    :::note

    The default information for categories, catalog, scopes, and default scopes are pulled from the {{ tekton_hub }} API config map. If you provide custom values in the `TektonHub` CR, it overrides the default values.
    
    :::

1.  Apply the {{ tekton_hub }} CR.
    ```terminal
    $ oc apply -f <tekton-hub-cr>.yaml
    ```
1.  Observe the {{ tekton_hub }} status.
    ```terminal
    $ oc get tektonhub.operator.tekton.dev
    ```
    ```terminal title="Sample output"
    NAME   VERSION   READY   REASON   APIURL                  UIURL
    hub    v1.9.0    True             https://api.route.url   https://ui.route.url
    ```