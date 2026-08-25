{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrading the LokiStack storage schema {id="logging-upgrading-loki-schema_{{ context }}"}

If you are using the {{ clo }} with the {{ loki_op }}, the {{ clo }} 5.9 or later supports the `v13` schema version in the `LokiStack` custom resource. Upgrading to the `v13` schema version is recommended because it is the schema version to be supported going forward.

**Procedure**

*   Add the `v13` schema version in the `LokiStack` custom resource as follows:
    ```yaml
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    # ...
    spec:
    # ...
      storage:
        schemas:
        # ...
          version: v12 # (1)
        - effectiveDate: "<yyyy>-<mm>-<future_dd>" # (2)
          version: v13
    # ...
    ```
    1.  Do not delete. Data persists in its original schema version. Keep the previous schema versions to avoid data loss.
    1.  Set a future date that has not yet started in the Coordinated Universal Time (UTC) time zone.

        :::tip

        To edit the `LokiStack` custom resource, you can run the `oc edit` command:

        ```terminal
        $ oc edit lokistack <name> -n openshift-logging
        ```
        
        :::


**Verification**

*   On or after the specified `effectiveDate` date, check that there is no **LokistackSchemaUpgradesRequired** alert in the web console in **Administrator** -> **Observe** -> **Alerting**.