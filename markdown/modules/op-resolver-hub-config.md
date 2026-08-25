{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring the hub resolver {id="resolver-hub-config_{{ context }}"}

You can change the default hub for pulling a resource, and the default catalog settings, by configuring the hub resolver.

**Procedure**

1.  To edit the `TektonConfig` custom resource, enter the following command:
    ```terminal
    $ oc edit TektonConfig config
    ```
1.  In the `TektonConfig` custom resource, edit the `pipeline.hub-resolver-config` spec:
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonConfig
    metadata:
      name: config
    spec:
      pipeline:
        hub-resolver-config:
          default-tekton-hub-catalog: Tekton # (1)
          default-artifact-hub-task-catalog: tekton-catalog-tasks # (2)
          default-artifact-hub-pipeline-catalog: tekton-catalog-pipelines # (3)
          defailt-kind: pipeline # (4)
          default-type: tekton # (5)
          tekton-hub-api: "https://my-custom-tekton-hub.example.com" # (6)
          artifact-hub-api: "https://my-custom-artifact-hub.example.com" # (7)
    ```
    1.  The default {{ tekton_hub }} catalog for pulling a resource.
    1.  The default {{ artifact_hub }} catalog for pulling a task resource.
    1.  The default {{ artifact_hub }} catalog for pulling a pipeline resource.
    1.  The default object kind for references.
    1.  The default hub for pulling a resource, either `artifact` for {{ artifact_hub }} or `tekton` for {{ tekton_hub }}.
    1.  The {{ tekton_hub }} API used, if the `default-type` option is set to `tekton`.
    1.  Optional: The {{ artifact_hub }} API used, if the `default-type` option is set to `artifact`.

        :::important

        If you set the `default-type` option to `tekton`, you must configure your own instance of the {{ tekton_hub }} by setting the `tekton-hub-api` value.

        If you set the `default-type` option to `artifact` then the resolver uses the public hub API at https://artifacthub.io/ by default. You can configure your own {{ artifact_hub }} API by setting the `artifact-hub-api` value.
        
        :::