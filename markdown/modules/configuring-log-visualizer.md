{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the log visualizer {id="configuring-log-visualizer_{{ context }}"}

You can configure which log visualizer type your {{ logging }} uses by modifying the `ClusterLogging` custom resource (CR).

**Prerequisites**

*   You have administrator permissions.
*   You have installed the {{ oc_first }}.
*   You have installed the {{ clo }}.
*   You have created a `ClusterLogging` CR.


:::important

If you want to use the {{ product_title }} web console for visualization, you must enable the {{ log_plug }}. See the documentation about "Log visualization with the web console".

:::


**Procedure**

1.  Modify the `ClusterLogging` CR `visualization` spec:
    ```yaml title="ClusterLogging CR example"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogging
    metadata:
    # ...
    spec:
    # ...
      visualization:
        type: <visualizer_type> (1)
        kibana: (2)
          resources: {}
          nodeSelector: {}
          proxy: {}
          replicas: {}
          tolerations: {}
        ocpConsole: (3)
          logsLimit: {}
          timeout: {}
    # ...
    ```
    1.  The type of visualizer you want to use for your {{ logging }}. This can be either `kibana` or `ocp-console`. The Kibana console is only compatible with deployments that use Elasticsearch log storage, while the {{ product_title }} console is only compatible with LokiStack deployments.
    1.  Optional configurations for the Kibana console.
    1.  Optional configurations for the {{ product_title }} web console.
1.  Apply the `ClusterLogging` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```