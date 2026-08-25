{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling deployments that run the CSI driver implementations {id="microshift-disabling-lvms-csi-driver_{{ context }}"}

You can disable installation of the CSI implementation pods. {{ microshift_short }} does not delete CSI driver implementation pods. You must configure {{ microshift_short }} to disable installation of the CSI driver implementation pods during the startup process. {._abstract}


:::important

This procedure is for defining the configuration file before installing and running {{ microshift_short }}. If {{ microshift_short }} is already started, then the CSI driver implementation is running. You must manually remove it by following the uninstallation instructions.

:::


**Procedure**

1.  Disable installation of the CSI driver by entering the `driver` value under the `storage` section of the {{ microshift_short }} configuration file in `/etc/microshift/config.yaml`:
    ```yaml
    # ...
      storage
       driver:
       - "none"
    # ...
    ```

    where:

    `storage.driver.none`
    :   Specifies the driver to disable. Valid values are `none` or `lvms`.

    :::note

    By default, the `driver` value is empty or null and LVMS is deployed.
    
    :::


1.  Start {{ microshift_short }} after the `driver` field is specified with a supported value in the `/etc/microshift/config.yaml` file by running the following command:
    ```terminal
    $ sudo systemctl enable --now microshift
    ```

    :::note

    {{ microshift_short }} does not redeploy the disabled components after a restart operation.
    
    :::