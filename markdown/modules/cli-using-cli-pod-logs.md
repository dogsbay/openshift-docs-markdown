{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing pod logs {id="cli-using-cli-pod-logs_{{ context }}"}

Use the `oc logs` command to view logs for a particular pod. {._abstract}

**Procedure**

*   View logs for a pod by running the following command:
    ```terminal
    $ oc logs cakephp-ex-1-deploy
    ```
    ```terminal title="Example output"
    --> Scaling cakephp-ex-1 to 1
    --> Success
    ```