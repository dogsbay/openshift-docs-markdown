{%- set _mod_docs_content_type = "CONCEPT" %}
# OpenShift administrator commands {id="microshift-oc-cmd_{{ context }}"}

If you have `cluster-admin` or equivalent permissions, you can list administrator commands. {._abstract}

*   Enter the `oc adm -h` command to list all administrator commands:
    ```terminal
    $ oc adm -h
    ```
*   Enter the `oc <command> --help` command to get additional details for a specific command:
    ```terminal
    $ oc <command> --help
    ```

    :::important

    Using `oc <command> --help` lists details for any `oc` command. Not all `oc` commands apply to using {{ product_title }}.
    
    :::