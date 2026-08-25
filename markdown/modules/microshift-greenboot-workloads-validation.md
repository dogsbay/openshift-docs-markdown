{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the results of an update {id="microshift-greenboot-workloads-validation_{{ context }}"}

You can view the overall status of system health checks after an update in the system log. After a successful start, greenboot sets the variable `boot_success=` to `1` in GRUB. {._abstract}

**Procedure**

*   To access the overall status of system health checks, run the following command:
    ```terminal
    $ sudo grub2-editenv - list | grep ^boot_success
    ```
    ```terminal title="Example output for a successful system start"
    boot_success=1
    ```
    *   If your command returns `boot_success=0`, either the greenboot health check is still running, or the update is a failure.