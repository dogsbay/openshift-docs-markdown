{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up Podman on macOS {id="serverless-functions-podman-macos_{{ context }}"}

To use advanced container management features, you might want to use Podman with {{ FunctionsProductName }}. To do so on macOS, you need to start the Podman machine and configure the Knative (`kn`) CLI to connect to it.

**Procedure**

1.  Create the Podman machine:
    ```terminal
    $ podman machine init --memory=8192 --cpus=2 --disk-size=20
    ```
1.  Start the Podman machine, which serves the Docker API on a UNIX socket:
    ```terminal
    $ podman machine start
    Starting machine "podman-machine-default"
    Waiting for VM ...
    Mounting volume... /Users/myuser:/Users/user

    [...truncated output...]

    You can still connect Docker API clients by setting DOCKER_HOST using the
    following command in your terminal session:

    	export DOCKER_HOST='unix:///Users/myuser/.local/share/containers/podman/machine/podman-machine-default/podman.sock'

    Machine "podman-machine-default" started successfully
    ```

    :::note

    On most macOS systems, this socket is located at `/Users/myuser/.local/share/containers/podman/machine/podman-machine-default/podman.sock`.
    
    :::

1.  Establish the environment variable that is used to build a function:
    ```terminal
    $ export DOCKER_HOST='unix:///Users/myuser/.local/share/containers/podman/machine/podman-machine-default/podman.sock'
    ```
1.  Run the build command inside your function project directory with the `-v` flag to see verbose output. You should see a connection to your local UNIX socket:
    ```terminal
    $ kn func build -v
    ```