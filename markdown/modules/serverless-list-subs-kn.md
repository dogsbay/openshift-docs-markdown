{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing subscriptions by using the Knative CLI {id="serverless-list-subs-kn_{{ context }}"}

You can use the `kn subscription list` command to list existing subscriptions on your cluster by using the Knative (`kn`) CLI. Using the Knative CLI to list subscriptions provides a streamlined and intuitive user interface.

**Prerequisites**

*   You have installed the Knative (`kn`) CLI.

**Procedure**

*   List subscriptions on your cluster:
    ```terminal
    $ kn subscription list
    ```
    ```terminal title="Example output"
    NAME             CHANNEL             SUBSCRIBER           REPLY   DEAD LETTER SINK   READY   REASON
    mysubscription   Channel:mychannel   ksvc:event-display                              True
    ```