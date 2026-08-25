{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean the OVN-Kubernetes data {id="microshift-data-cleaning-ovn-data_{{ context }}"}

Reset OVN-Kubernetes (OVN-K) network configurations by running the `microshift-cleanup-data` script. {._abstract}

When you run the script with the `--ovn` argument, you perform the following clean up actions:

*   Stop all {{ microshift_short }} services
*   Delete all {{ microshift_short }} pods
*   Delete the OVN-K networking configuration

**Prerequisites**

*   You are logged into {{ microshift_short }}.
*   You have filed a support case.

**Procedure**

1.  Clean up the OVN-K data by running the `microshift-cleanup-data` script with the `--ovn` argument, by entering the following command:
    ```terminal
    $ sudo microshift-cleanup-data --ovn
    ```
    ```terminal title="Example output"
    Stopping MicroShift services
    Removing MicroShift pods
    Killing conmon, pause and OVN processes
    Removing OVN configuration
    MicroShift service was stopped
    Cleanup succeeded
    ```

    :::important

    The `microshift-cleanup-data` script stops the {{ microshift_short }} service.
    
    :::

1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl start microshift
    ```