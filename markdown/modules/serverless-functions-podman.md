{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up Podman {id="serverless-functions-podman_{{ context }}"}

To use advanced container management features, you might want to use Podman with {{ FunctionsProductName }}. To do so, you need to start the Podman service and configure the Knative (`kn`) CLI to connect to it.

**Procedure**

1.  Start the Podman service that serves the Docker API on a UNIX socket at `${{ XDG_RUNTIME_DIR }}/podman/podman.sock`:
    ```terminal
    $ systemctl start --user podman.socket
    ```

    :::note

    On most systems, this socket is located at `/run/user/$(id -u)/podman/podman.sock`.
    
    :::

1.  Establish the environment variable that is used to build a function:
    ```terminal
    $ export DOCKER_HOST="unix://${XDG_RUNTIME_DIR}/podman/podman.sock"
    ```
1.  Run the build command inside your function project directory with the `-v` flag to see verbose output. You should see a connection to your local UNIX socket:
    ```terminal
    $ kn func build -v
    ```