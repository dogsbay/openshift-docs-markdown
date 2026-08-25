{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gather diagnostic information for network reconfiguration issues {id="cnf-gathering-sno-ip-configuration-diagnostics_{{ context }}"}

You can gather diagnostic information to help troubleshoot network reconfiguration issues on {{ sno }} clusters. {._abstract}

**Procedure**

1.  Inspect the `IPConfig` custom resource (CR) status by running the following command:
    ```terminal
    $ oc get ipc ipconfig -o yaml
    ```

    Review the `status.conditions` field for the current state, reason, and message. Check `status.validNextStages` for possible stage transitions, and `status.history` for timestamps of stage progression.
1.  View the {{ lcao }} controller logs by running the following command:
    ```terminal
    $ oc logs -n openshift-lifecycle-agent deployment/lifecycle-agent-controller-manager -c manager
    ```
1.  Create a debug session on the target node by running the following command:
    ```terminal
    $ oc debug node/<node_name>
    # chroot /host
    ```
    *   Replace `<node_name>` with the name of your {{ sno }} node.
1.  View the relevant service logs depending on which phase you are troubleshooting by running one of the following commands:
    *   View the logs for pre-pivot issues by running the following command:
        ```terminal
        $ sudo journalctl -u lca-ipconfig-pre-pivot -b --no-pager
        ```
    *   View the logs for post-pivot issues by running the following command:
        ```terminal
        $ sudo journalctl -u ip-configuration.service -b --no-pager
        ```
    *   View the logs for `init-monitor` watchdog issues by running the following command:
        ```terminal
        $ sudo journalctl -u lca-init-monitor.service -b --no-pager
        ```
    *   View the logs for rollback issues by running the following command:
        ```terminal
        $ sudo journalctl -u lca-ipconfig-rollback -b --no-pager
        ```