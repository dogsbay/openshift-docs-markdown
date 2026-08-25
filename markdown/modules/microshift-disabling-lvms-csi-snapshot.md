{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling deployments that run CSI snapshot implementations {id="microshift-disabling-lvms-csi-snapshot_{{ context }}"}

To prevent the installation of CSI implementation pods, disable the deployments that run CSI snapshot implementations. This configuration conserves system resources by ensuring that snapshot components are not deployed when they are not required. {._abstract}


:::important

Use the procedure if you are defining the configuration file before installing and running {{ microshift_short }}. If {{ microshift_short }} is already started, the CSI snapshot implementation will be running. You must manually remove the implementation by following the uninstallation instructions.

:::



:::note

{{ microshift_short }} does not delete CSI snapshot implementation pods. You must configure {{ microshift_short }} to disable installation of the CSI snapshot implementation pods during the startup process.

:::


**Procedure**

1.  Disable installation of the CSI snapshot controller by entering the `optionalCsiComponents` value under the `storage` section of the {{ microshift_short }} configuration file in `/etc/microshift/config.yaml`:
    ```yaml
    # ...
      storage: {}
    # ...
    ```

    where:

    `storage`
    :   Specifies the storage details. You can choose to not define `optionalCsiComponents`. If you do specify the `optionalCsiComponents` field, valid values include: an empty value (`[]`) or a single empty string element (`[""]`), `snapshot-controller`, or `none`. A value of `none` is mutually exclusive with all other values.

    :::note

    If the `optionalCsiComponents` value is empty or null, {{ microshift_short }} defaults to deploying `snapshot-controller`.
    
    :::


1.  After the `optionalCsiComponents` field is specified with a supported value in the `config.yaml`, start {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl start microshift
    ```

    :::note

    {{ microshift_short }} does not redeploy the disabled components after a restart.
    
    :::