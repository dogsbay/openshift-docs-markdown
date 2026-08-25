{%- set _mod_docs_content_type = "REFERENCE" %}
# Listing available event sources by using the Knative CLI {id="serverless-list-source-cli_{{ context }}"}

You can list existing event sources by using the `kn source list` command.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

1.  List the existing event sources in the terminal:
    ```terminal
    $ kn source list
    ```
    ```terminal title="Example output"
    NAME   TYPE              RESOURCE                               SINK         READY
    a1     ApiServerSource   apiserversources.sources.knative.dev   ksvc:eshow2   True
    b1     SinkBinding       sinkbindings.sources.knative.dev       ksvc:eshow3   False
    p1     PingSource        pingsources.sources.knative.dev        ksvc:eshow1   True
    ```
1.  Optional: You can list event sources of a specific type only, by using the `--type` flag:
    ```terminal
    $ kn source list --type <event_source_type>
    ```
    ```terminal title="Example command"
    $ kn source list --type PingSource
    ```
    ```terminal title="Example output"
    NAME   TYPE              RESOURCE                               SINK         READY
    p1     PingSource        pingsources.sources.knative.dev        ksvc:eshow1   True
    ```