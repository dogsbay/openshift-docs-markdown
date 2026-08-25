{%- set _mod_docs_content_type = "PROCEDURE" %}
# Automatically enable the {{ microshift_short }} TuneD profile {id="microshift-low-latency-tuned-auto-activate_{{ context }}"}

Included in the `microshift-low-latency` RPM package is a systemd service that you can configure to automatically enable a TuneD profile when the system starts. This ability is particularly useful if you are installing {{ microshift_short }} in a large fleet of devices. {._abstract}

**Prerequisites**

*   You installed the microshift-low-latency RPM package on the host.
*   You enabled low latency in the {{ microshift_short }} `config.yaml`.
*   You created a TuneD profile.
*   You configured the `microshift-baseline-variables.conf` file.

**Procedure**

1.  Configure the `tuned.yaml` in the `/etc/microshift/` directory, for example:

    Example `tuned.yaml`:
    ```yaml
    profile: microshift-baseline 
    reboot_after_apply: True 
    ```

    `profile`
    :   Controls which TuneD profile is activated. In this example, the name of the profile is `microshift-baseline`.

    `reboot_after_apply`
    :   Controls whether the host must be rebooted after applying the profile. Valid values are `True` and `False`. For example, use the `True` setting to automatically restart the host after a new `ostree` commit is deployed.

    :::important

    The host is restarted when the `microshift-tuned.service` runs, but it does not restart the system when a new commit is deployed. You must restart the host to enable a new commit, then the system starts again when the `microshift-tuned.service` runs on that boot and detects changes to profiles and variables.

    This double-boot can affect rollbacks. Ensure that you adjust the number of reboots in greenboot that are allowed before rollback when using automatic profile activation. For example, if 3 reboots are allowed before a rollback in greenboot, increase that number to 4. See the "Additional resources" list for more information.
    
    :::


1.  Enable the `microshift-tuned.service` to run on each system start by entering the following command:
    ```terminal
    $ sudo systemctl enable microshift-tuned.service
    ```

    :::important

    If you set `reboot_after_apply` to `True`, ensure that a TuneD profile is active and that no other profiles have been activated outside of the {{ microshift_short }} service. Otherwise, starting the `microshift-tuned.service` results in a host reboot.
    
    :::

1.  Start the `microshift-tuned.service` by running the following command:
    ```terminal
    $ sudo systemctl start microshift-tuned.service
    ```

    :::note

    The `microshift-tuned.service` uses collected checksums to detect changes to selected TuneD profiles and variables. If there are no checksums on the disk, the service activates the TuneD profile and restarts the host. Expect a host restart when first starting the `microshift-tuned.service`.
    
    :::


**Next steps**

*   Optional: If you are using the x86_64 architecture, you can install {{ op_system_rt_kernel }}.