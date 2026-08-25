{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the bundles resolver {id="resolver-bundles-config_{{ context }}"}

You can change the default service account name and the default kind for pulling resources from a Tekton bundle by configuring the bundles resolver.

**Procedure**

1.  To edit the `TektonConfig` custom resource, enter the following command:
    ```terminal
    $ oc edit TektonConfig config
    ```
1.  In the `TektonConfig` custom resource, edit the `pipeline.bundles-resolver-config` spec:
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonConfig
    metadata:
      name: config
    spec:
      pipeline:
        bundles-resolver-config:
          default-service-account: pipelines # (1)
          default-kind: task # (2)
    ```
    1.  The default service account name to use for bundle requests.
    1.  The default layer kind in the bundle image.