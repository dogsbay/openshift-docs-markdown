{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring debugging parameters {id="configuring-debugging-parameters_{{ context }}"}

You can specify a remote port with `odo config` command and a local port with the `odo debug` command.

**Procedure**

*   To set a remote port on which the debugging agent should run, run:
    ```terminal
    $ odo config set DebugPort 9292
    ```

    :::note

    You must redeploy your component for this value to be reflected on the component.
    
    :::

*   To set a local port to port forward, run:
    ```terminal
    $ odo debug port-forward --local-port 9292
    ```

    :::note

    The local port value does not persist. You must provide it every time you need to change the port.
    
    :::