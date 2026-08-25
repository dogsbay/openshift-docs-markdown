{%- set _mod_docs_content_type = "CONCEPT" %}
# Transport mode for fencing validator script {id="transport-mode-for-fencing-validator-script_{{ context }}"}

The `fencing_validator` script connects to control-plane nodes to run validation commands. Use the `--transport` flag or the `TRANSPORT` environment variable to define the connection method. {._abstract}

The `--transport` flag supports the following options:

*   `auto`: This is the default option. The script first attempts `SSH` to both nodes. If `SSH` succeeds, it uses `SSH` for the session. If `SSH` fails, it falls back to `oc debug`. If neither works on both nodes, the script exits with an error.
*   `ssh`: This option uses `SSH` to connect as the user defined by `--user`. The `--user` value defaults to `core`.
    *   Permissions: Requires password-less `sudo` access on all nodes.
    *   Automation: The script runs in `BatchMode`, disables interactive prompts, and skips host-key checking.
    *   Authentication: Use the `--ssh-key` flag to provide a specific SSH key for all connections.
*   `oc debug`: Connects by running the following command against each node: 
    ```terminal
    $ oc debug node/<node> --chroot /host 
    ```

You do not need SSH access. The `fencing_validator` script only requires a valid `KUBECONFIG` with `cluster-admin` privileges.

For non-disruptive checks, both transports behave identically. However, the transport mode is critical when using the `--disruptive` option. During these tests, the script dispatches the `fence` command asynchronously using `systemd-run` or no hup as a fallback. This fire-and-forget method ensures the command completes even if the `oc debug` session terminates when the node fences.