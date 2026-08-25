{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean custom certificates data {id="microshift-data-cleaning-certs_{{ context }}"}

To recreate {{ microshift_short }} custom certificates upon service restart, reset them by using the `microshift-cleanup-data` script. {._abstract}

When you run the script with the `--cert` argument, you perform the following clean up actions:

*   Stop all {{ microshift_short }} services
*   Delete all {{ microshift_short }} pods
*   Delete all {{ microshift_short }} certificates

**Prerequisites**

*   You are logged into {{ microshift_short }}.
*   You have filed a support case.

**Procedure**

1.  Clean up the {{ microshift_short }} certificates by running the `microshift-cleanup-data` script with the `--cert` argument, by entering the following command:
    ```terminal
    $ sudo microshift-cleanup-data --cert
    ```
    ```terminal title="Example output"
    Stopping MicroShift services
    Removing MicroShift pods
    Removing MicroShift certificates
    MicroShift service was stopped
    Cleanup succeeded
    ```

    :::important

    Running the script stops the {{ microshift_short }} service.
    
    :::

1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl start microshift
    ```