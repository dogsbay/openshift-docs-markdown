{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying the catalog refresh interval of {{ tekton_hub }} {id="modifying-catalog-refresh-interval-tekton-hub_{{ context }}"}

The default catalog refresh interval for {{ tekton_hub }} is 30 minutes. Cluster administrators can modify the automatic catalog refresh interval by modifying the value of the `catalogRefreshInterval` field in the `TektonHub` CR. {._abstract}

**Procedure**

1.  Modify the value of the `catalogRefreshInterval` field in the `TektonHub` CR.
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonHub
    metadata:
      name: hub
    spec:
      targetNamespace: openshift-pipelines (1)
      api:
        catalogRefreshInterval: 30m (2)
    ```
    1.  The namespace where {{ tekton_hub }} is installed; default is `openshift-pipelines`.
    1.  The time interval after which the catalog refreshes automatically. The supported units of time are seconds (`s`), minutes (`m`), hours (`h`), days (`d`), and weeks (`w`). The default interval is 30 minutes.
1.  Apply the `TektonHub` CR.
    ```terminal
    $ oc apply -f <tekton-hub-cr>.yaml
    ```
1.  Check the status of the installation. The `TektonHub` CR might take some time to attain steady state.
    ```terminal
    $ oc get tektonhub.operator.tekton.dev
    ```
    ```terminal title="Sample output"
    NAME   VERSION   READY   REASON   APIURL                    UIURL
    hub    v1.9.0    True             https://api.route.url/    https://ui.route.url/
    ```