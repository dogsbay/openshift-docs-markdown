{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a pull secret {id="creating-pull-secret_{{ context }}"}

To authenticate with container registries in {{ product_title }}, you can create pull secrets from existing Docker or Podman authentication files. You can also create secrets by providing registry credentials directly by using the `oc create secret docker-registry` command. {._abstract}

**Procedure**

1.  Create a secret from an existing authentication file:
    1.  For Docker clients using `.docker/config.json`, enter the following command:
        ```terminal
        $ oc create secret generic <pull_secret_name> \
            --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
            --type=kubernetes.io/dockerconfigjson
        ```
    1.  For Podman clients using `.config/containers/auth.json`, enter the following command:
        ```terminal
        $ oc create secret generic <pull_secret_name> \
             --from-file=<path/to/.config/containers/auth.json> \
             --type=kubernetes.io/podmanconfigjson
        ```
1.  Optional: If you do not already have a Docker credentials file for the secured registry, you can create a secret by running the following command:
    ```terminal
    $ oc create secret docker-registry <pull_secret_name> \
        --docker-server=<registry_server> \
        --docker-username=<user_name> \
        --docker-password=<password> \
        --docker-email=<email>
    ```