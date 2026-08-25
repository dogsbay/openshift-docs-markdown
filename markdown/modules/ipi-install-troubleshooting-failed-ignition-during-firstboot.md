{%- set _mod_docs_content_type = "PROCEDURE" %}

# Failed Ignition during Firstboot {id="ipi-install-troubleshooting-failed-ignition-during-firstboot_{{ context }}"}

During the Firstboot, the Ignition configuration may fail.

**Procedure**

1.  Connect to the node where the Ignition configuration failed:
    ```terminal
    Failed Units: 1
      machine-config-daemon-firstboot.service
    ```
1.  Restart the `machine-config-daemon-firstboot` service:
    ```terminal
    [core@worker-X ~]$ sudo systemctl restart machine-config-daemon-firstboot.service
    ```