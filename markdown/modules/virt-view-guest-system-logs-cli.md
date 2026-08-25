{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing guest system logs with the CLI {id="virt-view-guest-system-logs-cli_{{ context }}"}

To diagnose and troubleshoot issues with a virtual machine (VM) guest operating system, you can view the guest system logs by running the `oc logs` command. {._abstract}

{% include "./snippets/virt-guest-system-logs-about.md" %}

**Prerequisites**

*   Guest system log access is enabled.
*   You have installed the {{ oc_first }}.

**Procedure**

*   View the logs by running the following command, substituting your own values for `<namespace>` and `<vm_name>`:
    ```terminal
    $ oc logs -n <namespace> -l kubevirt.io/domain=<vm_name> --tail=-1 -c guest-console-log
    ```