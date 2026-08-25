{%- set _mod_docs_content_type = "PROCEDURE" %}
# Filtering application logs at input by including or excluding the namespace or container name {id="log6x-input-spec-filter-namespace-container_{{ context }}"}

You can include or exclude the application logs based on the namespace and container name by using the `input` selector.

**Procedure**

1.  Add a configuration to include or exclude the namespace and container names in the `ClusterLogForwarder` CR.

    The following example shows how to configure the `ClusterLogForwarder` CR to include or exclude namespaces and container names:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    # ...
    spec:
      serviceAccount:
        name: <service_account_name>
      inputs:
        - name: mylogs
          application:
            includes:
              - namespace: "my-project" # (1)
                container: "my-container" # (2)
            excludes:
              - container: "other-container*" # (3)
                namespace: "other-namespace" # (4)
          type: application
    # ...
    ```
    1.  Specifies that the logs are only collected from these namespaces.
    1.  Specifies that the logs are only collected from these containers.
    1.  Specifies the pattern of namespaces to ignore when collecting the logs.
    1.  Specifies the set of containers to ignore when collecting the logs.

        :::note

        The `excludes` field takes precedence over the `includes` field.
        
        :::

1.  Apply the `ClusterLogForwarder` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```