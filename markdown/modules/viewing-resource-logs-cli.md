{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing resource logs by using the CLI {id="viewing-resource-logs-cli_{{ context }}"}

You can view resource logs by using the command-line interface (CLI). By viewing logs for resources, you can troubleshoot issues and monitor resource behavior. {._abstract}

**Prerequisites**

*   Access to the {{ oc_first }}.

**Procedure**

*   View the log for a specific pod by entering the following command:
    ```terminal
    $ oc logs -f <pod_name> -c <container_name>
    ```
    where:


    `-f`
    :   Optional: Specifies that the output follows what is being written into the logs.

    `<pod_name>`
    :   Specifies the name of the pod.

    `<container_name>`
    :   Optional: Specifies the name of a container. When a pod has more than one container, you must specify the container name.

    For example:
    ```terminal
    $ oc logs -f ruby-57f7f4855b-znl92 -c ruby
    ```
*   View the log for a specific resource by entering the following command:
    ```terminal
    $ oc logs <object_type>/<resource_name>
    ```

    For example:
    ```terminal
    $ oc logs deployment/ruby
    ```