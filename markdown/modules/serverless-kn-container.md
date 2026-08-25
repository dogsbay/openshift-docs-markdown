{%- set _mod_docs_content_type = "REFERENCE" %}
# Knative client multi-container support {id="serverless-kn-container_{{ context }}"}

You can use the `kn container add` command to print YAML container spec to standard output. This command is useful for multi-container use cases because it can be used along with other standard `kn` flags to create definitions.

The `kn container add` command accepts all container-related flags that are supported for use with the `kn service create` command. The `kn container add` command can also be chained by using UNIX pipes (`|`) to create multiple container definitions at once.

## Example commands {id="serverless-kn-container-examples_{{ context }}"}

*   Add a container from an image and print it to standard output:
    ```terminal
    $ kn container add <container_name> --image <image_uri>
    ```
    ```terminal title="Example command"
    $ kn container add sidecar --image docker.io/example/sidecar
    ```
    ```terminal title="Example output"
    containers:
    - image: docker.io/example/sidecar
      name: sidecar
      resources: {}
    ```
*   Chain two `kn container add` commands together, and then pass them to a `kn service create` command to create a Knative service with two containers:
    ```terminal
    $ kn container add <first_container_name> --image <image_uri> | \
    kn container add <second_container_name> --image <image_uri> | \
    kn service create <service_name> --image <image_uri> --extra-containers -
    ```

    `--extra-containers -` specifies a special case where `kn` reads the pipe input instead of a YAML file.
    ```terminal title="Example command"
    $ kn container add sidecar --image docker.io/example/sidecar:first | \
    kn container add second --image docker.io/example/sidecar:second | \
    kn service create my-service --image docker.io/example/my-app:latest --extra-containers -
    ```

    The `--extra-containers` flag can also accept a path to a YAML file:
    ```terminal
    $ kn service create <service_name> --image <image_uri> --extra-containers <filename>
    ```
    ```terminal title="Example command"
    $ kn service create my-service --image docker.io/example/my-app:latest --extra-containers my-extra-containers.yaml
    ```