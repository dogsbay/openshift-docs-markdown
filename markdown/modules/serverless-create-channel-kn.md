{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a channel by using the Knative CLI {id="serverless-create-channel-kn_{{ context }}"}

Using the Knative (`kn`) CLI to create channels provides a more streamlined and intuitive user interface than modifying YAML files directly. You can use the `kn channel create` command to create a channel.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

*   Create a channel:
    ```terminal
    $ kn channel create <channel_name> --type <channel_type>
    ```

    The channel type is optional, but where specified, must be given in the format `Group:Version:Kind`.
    For example, you can create an `InMemoryChannel` object:
    ```terminal
    $ kn channel create mychannel --type messaging.knative.dev:v1:InMemoryChannel
    ```
    ```terminal title="Example output"
    Channel 'mychannel' created in namespace 'default'.
    ```

**Verification**

*   To confirm that the channel now exists, list the existing channels and inspect the output:
    ```terminal
    $ kn channel list
    ```
    ```terminal title="Example output"
    kn channel list
    NAME        TYPE              URL                                                     AGE   READY   REASON
    mychannel   InMemoryChannel   http://mychannel-kn-channel.default.svc.cluster.local   93s   True
    ```

**Deleting a channel**

*   Delete a channel:
    ```terminal
    $ kn channel delete <channel_name>
    ```