{%- set _mod_docs_content_type = "PROCEDURE" %}
# Check the status of greenboot health checks {id="microshift-greenboot-check-status_{{ context }}"}

You can check the status of greenboot health checks before making changes to the system or while troubleshooting. By using helpful commands to verify that greenboot scripts have finished running. {._abstract}

**Procedure**

*   Check the current greenboot health check status by running the following command:
    ```terminal
    $ systemctl show --property=SubState --value greenboot-healthcheck.service
    ```

    where:

    `start`
    :   Greenboot checks are still running.

    `exited`
    :   Checks have passed and greenboot has exited. Greenboot runs the scripts in the `green.d` directory when the system is in a healthy state.

    `failed`
    :   Checks have not passed. Greenboot runs the scripts in the `red.d` directory when the system is in this state and restarts the system.

*   Check the numerical exit code of the greenboot health check service by running the following command:
    ```terminal
    $ systemctl show --property=ExecMainStatus --value greenboot-healthcheck.service
    ```

    An exit code of `0` means the health check succeeded. A non-zero exit code means the health check failed.
*   To see a report showing a message about boot status, such as `Boot Status is GREEN - Health Check SUCCESS`, use the following command:
    ```terminal
    $ cat /run/motd.d/boot-status
    ```
    ```text title="Example output"
    Boot Status is GREEN - Health Check SUCCESS
    ```