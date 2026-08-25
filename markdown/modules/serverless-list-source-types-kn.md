{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing available event source types by using the Knative CLI {id="serverless-list-source-types-kn_{{ context }}"}

You can list event source types that can be created and used on your cluster by using the `kn source list-types` CLI command.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

1.  List the available event source types in the terminal:
    ```terminal
    $ kn source list-types
    ```
    ```terminal title="Example output"
    TYPE              NAME                                            DESCRIPTION
    ApiServerSource   apiserversources.sources.knative.dev            Watch and send Kubernetes API events to a sink
    PingSource        pingsources.sources.knative.dev                 Periodically send ping events to a sink
    SinkBinding       sinkbindings.sources.knative.dev                Binding for connecting a PodSpecable to a sink
    ```

{% if openshift_enterprise %}
1.  Optional: You can also list the available event source types in YAML format:
    ```terminal
    $ kn source list-types -o yaml
    ```
{%- endif %}