{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing health check output in the system log {id="microshift-greenboot-access-health-check_{{ context }}"}

If the system update fails or the boot process stops, you can query the system logs for detailed troubleshooting information. These logs provide the detailed steps necessary to troubleshoot failed boot checks. {._abstract}

**Procedure**

*   To access the results of a health check, run the following command:
    ```terminal
    $ sudo journalctl -o cat -u greenboot-healthcheck.service
    ```
    ```terminal title="Example output of a failed health check"
    ...
    ...
    Running Required Health Check Scripts...
    STARTED
    GRUB boot variables:
    boot_success=0
    boot_indeterminate=0
    boot_counter=2
    ...
    ...
    Waiting 600s for MicroShift service to be active and not failed
    FAILURE
    ...
    ...
    ```