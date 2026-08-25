{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the HostFirmware Settings resource is valid {id="bmo-verifying-the-hostfirmware-settings-resource-is-valid_{{ context }}"}

You can verify that changes to the `HostFirmwareSettings` resource are valid by checking the status conditions, ensuring that BIOS setting values comply with the `FirmwareSchema` constraints. {._abstract}

**Procedure**

1.  Get a list of `HostFirmwareSetting` resources:
    ```terminal
    $ oc get hfs -n openshift-machine-api
    ```
1.  Verify that the `HostFirmwareSettings` resource for a particular host is valid:
    ```terminal
    $ oc describe hfs <host_name> -n openshift-machine-api
    ```

    Where `<host_name>` is the name of the host.
    ```terminal title="Example output:"
    Events:
      Type    Reason            Age    From                                    Message
      ----    ------            ----   ----                                    -------
      Normal  ValidationFailed  2m49s  metal3-hostfirmwaresettings-controller  Invalid BIOS setting: Setting ProcTurboMode is invalid, unknown enumeration value - Foo
    ```

    :::important

    If the response returns `ValidationFailed`, there is an error in the resource configuration and you must update the values to conform to the `FirmwareSchema` resource.
    
    :::