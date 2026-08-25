{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optional: Using a custom database in {{ tekton_hub }} {id="using-a-custom-database-in-tekton-hub_{{ context }}"}

Cluster administrators can use a custom database with {{ tekton_hub }}, instead of the default PostgreSQL database installed by the Operator. You can associate a custom database at the time of installation, and use it with the `db-migration`, `api`, and `ui` interfaces provided by {{ tekton_hub }}. Alternatively, you can associate a custom database with {{ tekton_hub }} even after the installation with the default database is complete. {._abstract}

**Procedure**

1.  Create a secret named `tekton-hub-db` in the target namespace with the following keys:
    *   `POSTGRES_HOST`
    *   `POSTGRES_DB`
    *   `POSTGRES_USER`
    *   `POSTGRES_PASSWORD`
    *   `POSTGRES_PORT`
        ```yaml title="Example: Custom database secrets"
        apiVersion: v1
        kind: Secret
        metadata:
          name: tekton-hub-db
          labels:
            app: tekton-hub-db
        type: Opaque
        stringData:
          POSTGRES_HOST: <The name of the host of the database>
          POSTGRES_DB: <Name of the database>
          POSTGRES_USER: <username>
          POSTGRES_PASSWORD: <password>
          POSTGRES_PORT: <The port that the database is listening on>
        ...
        ```

        :::note

        The default target namespace is `openshift-pipelines`.
        
        :::

1.  In the `TektonHub` CR, set the value of the database secret attribute to `tekton-hub-db`.
    ```yaml title="Example: Adding custom database secret"
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonHub
    metadata:
      name: hub
    spec:
      targetNamespace: openshift-pipelines
      db:
        secret: tekton-hub-db
      api:
        hubConfigUrl: https://raw.githubusercontent.com/tektoncd/hub/main/config.yaml
        catalogRefreshInterval: 30m
    ...
    ```
1.  Use the updated `TektonHub` CR to associate the custom database with {{ tekton_hub }}.
    1.  If you are associating the custom database at the time of installing {{ tekton_hub }} on your cluster, apply the updated `TektonHub` CR.
        ```terminal
        $ oc apply -f <tekton-hub-cr>.yaml
        ```
    1.  Alternatively, if you are associating the custom database after the installation of {{ tekton_hub }} is complete, replace the existing `TektonHub` CR with the updated `TektonHub` CR.
        ```terminal
        $ oc replace -f <tekton-hub-cr>.yaml
        ```
1.  Check the status of the installation. The `TektonHub` CR might take some time to attain steady state.
    ```terminal
    $ oc get tektonhub.operator.tekton.dev
    ```
    ```terminal title="Sample output"
    NAME   VERSION   READY   REASON   APIURL                    UIURL
    hub    v1.9.0    True             https://api.route.url/    https://ui.route.url/
    ```