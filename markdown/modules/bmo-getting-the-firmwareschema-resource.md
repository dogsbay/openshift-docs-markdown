{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting the FirmwareSchema resource {id="bmo-getting-the-firmwareschema-resource_{{ context }}"}

Each host model from each vendor has different BIOS settings. When editing the `HostFirmwareSettings` resource’s `spec` section, the name/value pairs you set must conform to that host’s firmware schema. To ensure you are setting valid name/value pairs, get the `FirmwareSchema` for the host and review it. {._abstract}

**Procedure**

1.  Get the list of `FirmwareSchema` resource instances by running the following command:
    ```terminal
    $ oc get firmwareschema -n openshift-machine-api
    ```
1.  Get a particular `FirmwareSchema` instance by running the following command:
    ```terminal
    $ oc get firmwareschema <instance_name> -n openshift-machine-api -o yaml
    ```

    Where `<instance_name>` is the name of the schema instance stated in the `HostFirmwareSettings` resource (see Table 3).