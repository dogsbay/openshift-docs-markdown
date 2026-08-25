{%- set _mod_docs_content_type = "PROCEDURE" %}

# Addressing the "No disk found with matching rootDeviceHints" error message {id="ipi-install-troubleshooting-no-matching-rootdevicehints_{{ context }}"}

To ensure the installer can locate and configure the target storage drive on your node, troubleshoot the No disk found with matching `rootDeviceHints` error.  {._abstract}

After you deploy a cluster, you might receive the following error message:

```text
No disk found with matching rootDeviceHints
```

To address the `No disk found with matching rootDeviceHints` error message, run the following temporary workaround:

**Procedure**

1.  Change the `rootDeviceHints` to `minSizeGigabytes: 300`.
1.  After changing the `rootDeviceHints` settings, boot the CoreOS and then verify the disk information by running the following command:
    ```terminal
    $ udevadm info /dev/sda
    ```

    If you are using DL360 Gen 10 servers, be aware that they have an SD-card slot that might be assigned the `/dev/sda` device name. If no SD card is present in the server, it can cause conflicts. Ensure that the SD card slot is disabled in the server’s BIOS settings.

    If the `minSizeGigabytes` workaround is not fulfilling the requirements, you might need to revert `rootDeviceHints` back to `/dev/sda`. This change allows ironic images to boot successfully.

    An alternative approach to fixing this problem is by using the serial ID of the disk. However, be aware that finding the serial ID can be challenging and might make the configuration file less readable. If you select this path, ensure that you gather the serial ID using the previously documented command and incorporate it into your configuration.