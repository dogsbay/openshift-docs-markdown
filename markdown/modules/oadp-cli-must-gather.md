{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collect diagnostic data {id="oadp-cli-must-gather_{{ context }}"}

You can use the {{ oadp_short }} command-line interface (CLI) to collect diagnostic information for {{ oadp_short }} installations. The `must-gather` command runs the {{ oadp_short }} must-gather tool to collect logs and cluster state information needed for troubleshooting and support cases. {._abstract}

**Prerequisites**

*   The {{ oadp_short }} CLI plugin is installed and configured in admin mode.
*   You are logged in to the {{ product_title }} cluster as a user with `cluster-admin` privileges.
*   The `oc` CLI is installed and available on your `PATH`.

**Procedure**

*   Collect {{ oadp_short }} diagnostic information:
    ```terminal
    $ oc oadp must-gather [flags]
    ```
    **Flags for the `oc oadp must-gather` command**

    | Flag | Description |
    | --- | --- |
    | `--dest-dir` | The directory where the must-gather output is stored. The default value is `./must-gather`. |
    | `--request-timeout` | The timeout for the gather script, for example, `30s` or `1m`. |
    | `--skip-tls` | Specifies whether to skip Transport Layer Security (TLS) verification. |
    ```terminal title="Example of the must-gather command"
    $ oc oadp must-gather --dest-dir=/tmp/oadp-diagnostics --request-timeout=1m
    ```