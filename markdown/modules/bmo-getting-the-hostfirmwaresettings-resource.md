{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting the HostFirmwareSettings resource {id="bmo-getting-the-hostfirmwaresettings-resource_{{ context }}"}

The `HostFirmwareSettings` resource contains the vendor-specific BIOS properties of a physical host. You must get the `HostFirmwareSettings` resource for a physical host to review its BIOS properties. {._abstract}

**Procedure**

1.  Get the detailed list of `HostFirmwareSettings` resources by running the following command:
    ```terminal
    $ oc get hfs -n openshift-machine-api -o yaml
    ```

    :::note

    You can use `hostfirmwaresettings` as the long form of `hfs` with the `oc get` command.
    
    :::

1.  Get the list of `HostFirmwareSettings` resources by running the following command:
    ```terminal
    $ oc get hfs -n openshift-machine-api
    ```
1.  Get the `HostFirmwareSettings` resource for a particular host by running the following command:
    ```terminal
    $ oc get hfs <host_name> -n openshift-machine-api -o yaml
    ```

    Where `<host_name>` is the name of the host.