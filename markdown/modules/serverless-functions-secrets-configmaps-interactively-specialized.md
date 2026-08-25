{%- set _mod_docs_content_type = "REFERENCE" %}
# Modifying function access to secrets and config maps interactively by using specialized commands {id="serverless-functions-secrets-configmaps-interactively-specialized_{{ context }}"}

Every time you run the `kn func config` utility, you need to navigate the entire dialogue to select the operation you need, as shown in the previous section. To save steps, you can directly execute a specific operation by running a more specific form of the `kn func config` command:

*   To list configured environment variables:
    ```terminal
    $ kn func config envs [-p <function-project-path>]
    ```
*   To add environment variables to the function configuration:
    ```terminal
    $ kn func config envs add [-p <function-project-path>]
    ```
*   To remove environment variables from the function configuration:
    ```terminal
    $ kn func config envs remove [-p <function-project-path>]
    ```
*   To list configured volumes:
    ```terminal
    $ kn func config volumes [-p <function-project-path>]
    ```
*   To add a volume to the function configuration:
    ```terminal
    $ kn func config volumes add [-p <function-project-path>]
    ```
*   To remove a volume from the function configuration:
    ```terminal
    $ kn func config volumes remove [-p <function-project-path>]
    ```