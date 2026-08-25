{%- set _mod_docs_content_type = "PROCEDURE" %}
# Switching between ephemeral and persistent storage {id="switching-between-ephemeral-and-persistent-storage_{{ context }}"}

You can switch between ephemeral and persistent storage in your project by using the `odo preference` command. `odo preference` modifies the global preference in your cluster.

When persistent storage is enabled, the cluster stores the information between the restarts.

When ephemeral storage is enabled, the cluster does not store the information between the restarts.

Ephemeral storage is enabled by default.

**Procedure**

1.  See the preference currently set in your project:
    ```terminal
    $ odo preference view
    ```
    ```terminal title="Example output"
    PARAMETER             CURRENT_VALUE
    UpdateNotification
    NamePrefix
    Timeout
    BuildTimeout
    PushTimeout
    Experimental
    PushTarget
    Ephemeral             true
    ```
1.  To unset the ephemeral storage and set the persistent storage:
    ```terminal
    $ odo preference set Ephemeral false
    ```
1.  To set the ephemeral storage again:
    ```terminal
    $ odo preference set Ephemeral true
    ```

    The `odo preference` command changes the global settings of all your currently deployed components as well as ones you will deploy in future.
1.  Run `odo push` to make `odo` create a specified storage for your component:
    ```terminal
    $ odo push
    ```