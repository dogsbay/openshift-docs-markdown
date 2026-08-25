{%- set _mod_docs_content_type = "PROCEDURE" %}

# Addressing the failed Ignition during firstboot error {id="ipi-install-troubleshooting-failed-ignition-during-firstboot_{{ context }}"}

Troubleshoot and resolve Ignition configuration failures that occur during the firstboot of your nodes to prevent cluster deployment failures. {._abstract}

**Procedure**

1.  Connect to the node where the Ignition configuration failed:
    ```terminal
    Failed Units: 1
      machine-config-daemon-firstboot.service
    ```
1.  Restart the `machine-config-daemon-firstboot` service by running the following command:
    ```terminal
    [core@worker-X ~]$ sudo systemctl restart machine-config-daemon-firstboot.service
    ```