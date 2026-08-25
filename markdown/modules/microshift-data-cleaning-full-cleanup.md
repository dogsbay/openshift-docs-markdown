{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean all data and configuration {id="microshift-data-cleaning-full-cleanup_{{ context }}"}

You can clean up all the {{ microshift_short }} data and configuration by running the `microshift-cleanup-data` script. {._abstract}

When you run the script with the `--all` argument, you perform the following clean up actions:

*   Stop and disable all {{ microshift_short }} services
*   Delete all {{ microshift_short }} pods
*   Delete all container image storage
*   Reset network configuration
*   Delete the `/var/lib/microshift` data directory
*   Delete OVN-K networking configuration

**Prerequisites**

*   You are logged into {{ microshift_short }}.
*   You have filed a support case.

**Procedure**

1.  Clean up all the {{ microshift_short }} data and configuration by running the `microshift-cleanup-data` script with the `--all` argument, by entering the following command:

    :::warning

    This option deletes all {{ microshift_short }} data and user workloads. Use with caution.
    
    :::

    ```terminal
    $ sudo microshift-cleanup-data --all
    ```

    :::tip

    The script prompts you to confirm the operation. Enter `1` or `Yes` to continue. Any other entry cancels the cleanup.
    
    :::

    ```terminal title="Example output when you continue the cleanup"
    DATA LOSS WARNING: Do you wish to stop and clean ALL MicroShift data AND cri-o container workloads?
    1) Yes
    2) No
    #? 1
    Stopping MicroShift services
    Disabling MicroShift services
    Removing MicroShift pods
    Removing crio image storage
    Deleting the br-int interface
    Killing conmon, pause and OVN processes
    Removing MicroShift configuration
    Removing OVN configuration
    MicroShift service was stopped
    MicroShift service was disabled
    Cleanup succeeded
    ```
    ```terminal title="Example output when you cancel the cleanup"
    DATA LOSS WARNING: Do you wish to stop and clean ALL MicroShift data AND cri-o container workloads?
    1) Yes
    2) No
    #? no
    Aborting cleanup
    ```

    :::important

    The `microshift-cleanup-data` script stops and disables the {{ microshift_short }} service.
    
    :::

1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl enable --now microshift
    ```