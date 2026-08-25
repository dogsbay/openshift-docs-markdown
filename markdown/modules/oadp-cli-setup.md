{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up the OADP CLI plugin {id="oadp-cli-setup_{{ context }}"}

After you install the {{ oadp_short }} command-line interface (CLI) plugin, you must run the setup command to configure it for your user permissions. {._abstract}

The setup command automatically detects whether you have cluster-wide administrator permissions and configures the CLI accordingly. The CLI operates in one of the following two modes:

*   **Admin mode**: Provides access to cluster-wide Velero backup and restore commands.
*   **Non-administrator mode**: Provides access to namespace-scoped self-service backup and restore commands.

**Prerequisites**

*   The {{ oadp_short }} CLI plugin is installed.
*   You are logged in to the {{ product_title }} cluster by using the `oc login` command.

**Procedure**

1.  Run the setup command to auto-detect your permissions and configure the CLI:
    ```terminal
    $ oc oadp setup
    ```

    The CLI checks whether you can create `backups.velero.io` resources across all namespaces. If you can, admin mode is enabled. Otherwise, non-administrator mode is enabled. The configuration is saved to `~/.config/velero/config.json`.
1.  To reconfigure the CLI after a change in permissions, run the setup command with the `--force` flag:
    ```terminal
    $ oc oadp setup --force
    ```

**Verification**

*   Run the following command to confirm that the available commands match your configured mode:
    ```terminal
    $ oc oadp --help
    ```

    :::note

    {{ oadp_short }} CLI commands support both noun-verb and verb-noun ordering. For example, `oc oadp backup create` and `oc oadp create backup` are equivalent.
    
    :::