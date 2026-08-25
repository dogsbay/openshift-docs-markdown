{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking updates with a health check script {id="greenboot-check-updates_{{ context }}"}

To verify the success or failure of a recent system update, you can review the output of greenboot health check scripts in the system log after an update. {._abstract}

**Procedure**

*   To access the result of update checks, run the following command:
    ```terminal
    $ sudo grub2-editenv - list | grep ^boot_success
    ```
    ```terminal title="Example output for a successful update"
    boot_success=1
    ```
    *   If your command returns `boot_success=0`, either the greenboot health check is still running, or the update is a failure.