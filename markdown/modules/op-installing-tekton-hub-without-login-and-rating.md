{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ tekton_hub }} without login and rating {id="installing-tekton-hub-without-login-and-rating_{{ context }}"}

You can install {{ tekton_hub }} on your cluster automatically with default configuration. When using the default configuration, {{ tekton_hub }} does not support login with authorization and ratings for {{ tekton_hub }} artifacts. {._abstract}

**Prerequisites**

*   Ensure that the {{ pipelines_title }} Operator is installed in the default `openshift-pipelines` namespace on the cluster.

**Procedure**

1.  Create a `TektonHub` CR similar to the following example.
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonHub
    metadata:
      name: hub
    spec:
      targetNamespace: openshift-pipelines (1)
      db:                      # Optional: If you want to use custom database
        secret: tekton-hub-db  # Name of db secret should be `tekton-hub-db`

      categories:              # Optional: If you want to use custom categories
        - Automation
        - Build Tools
        - CLI
        - Cloud
        - Code Quality
        - ...

      catalogs:                # Optional: If you want to use custom catalogs
        - name: tekton
          org: tektoncd
          type: community
          provider: github
          url: https://github.com/tektoncd/catalog
          revision: main

      scopes:                   # Optional: If you want to add new users
        - name: agent:create
          users: [abc, qwe, pqr]
        - name: catalog:refresh
          users: [abc, qwe, pqr]
        - name: config:refresh
          users: [abc, qwe, pqr]

      default:                   # Optional: If you want to add custom default scopes
        scopes:
          - rating:read
          - rating:write

      api:
        catalogRefreshInterval: 30m (2)
    ```
    1.  The namespace in which {{ tekton_hub }} must be installed; default is `openshift-pipelines`.
    1.  The time interval after which the catalog refreshes automatically. The supported units of time are seconds (`s`), minutes (`m`), hours (`h`), days (`d`), and weeks (`w`). The default interval is 30 minutes.

        :::note

        If you do not provide custom values for the optional fields in the `TektonHub` CR, the default values configured in the {{ tekton_hub }} API config map is used.
        
        :::

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