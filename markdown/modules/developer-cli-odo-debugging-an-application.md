{%- set _mod_docs_content_type = "PROCEDURE" %}

# Debugging an application {id="debugging-an-application_{{ context }}"}

You can debug your application in `odo` with the `odo debug` command.

**Procedure**

1.  Download the sample application that contains the necessary `debugrun` step within its devfile:
    ```terminal
    $ odo create nodejs --starter
    ```
    ```terminal title="Example output"
    Validation
     ✓  Checking devfile existence [11498ns]
     ✓  Checking devfile compatibility [15714ns]
     ✓  Creating a devfile component from registry: DefaultDevfileRegistry [17565ns]
     ✓  Validating devfile component [113876ns]

    Starter Project
     ✓  Downloading starter project nodejs-starter from https://github.com/odo-devfiles/nodejs-ex.git [428ms]

    Please use `odo push` command to create the component with source deployed
    ```
1.  Push the application with the `--debug` flag, which is required for all debugging deployments:
    ```terminal
    $ odo push --debug
    ```
    ```terminal title="Example output"
    Validation
     ✓  Validating the devfile [29916ns]

    Creating Kubernetes resources for component nodejs
     ✓  Waiting for component to start [38ms]

    Applying URL changes
     ✓  URLs are synced with the cluster, no changes are required.

    Syncing to component nodejs
     ✓  Checking file changes for pushing [1ms]
     ✓  Syncing files to the component [778ms]

    Executing devfile commands for component nodejs
     ✓  Executing install command "npm install" [2s]
     ✓  Executing debug command "npm run debug" [1s]

    Pushing devfile component nodejs
     ✓  Changes successfully pushed to component
    ```

    :::note

    You can specify a custom debug command by using the `--debug-command="custom-step"` flag.
    
    :::

1.  Port forward to the local port to access the debugging interface:
    ```terminal
    $ odo debug port-forward
    ```
    ```terminal title="Example output"
    Started port forwarding at ports - 5858:5858
    ```

    :::note

    You can specify a port by using the `--local-port` flag.
    
    :::

1.  Check that the debug session is running in a separate terminal window:
    ```terminal
    $ odo debug info
    ```
    ```terminal title="Example output"
    Debug is running for the component on the local port : 5858
    ```
1.  Attach the debugger that is bundled in your IDE of choice. Instructions vary depending on your IDE, for example: [VSCode debugging interface](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_remote-debugging).