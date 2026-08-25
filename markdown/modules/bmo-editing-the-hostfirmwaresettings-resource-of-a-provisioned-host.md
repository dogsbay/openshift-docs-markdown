{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing the HostFirmwareSettings resource of a provisioned host {id="bmo-editing-the-hostfirmwaresettings-resource-of-a-provisioned-host_{{ context }}"}

You can modify BIOS settings on a provisioned host by editing the `HostFirmwareSettings` resource, then scaling the machine set down and up to apply the changes. {._abstract}


:::important

You can only edit hosts when they are in the `provisioned` state, excluding read-only values. You cannot edit hosts in the `externally provisioned` state.

:::


**Procedure**

1.  Get the list of `HostFirmwareSettings` resources by running the following command:
    ```terminal
    $ oc get hfs -n openshift-machine-api
    ```
1.  Edit the host `HostFirmwareSettings` resource by running the following command:
    ```terminal
    $ oc edit hfs <hostname> -n openshift-machine-api
    ```

    Where `<hostname>` is the name of a provisioned host. The `HostFirmwareSettings` resource will open in the default editor for your terminal.
1.  Add name and value pairs to the `spec.settings` section by running the following command:
    ```terminal title="Example"
    spec:
      settings:
        name: value
    ```

    where:

    `spec.settings.name`
    :   Specifies the firmware setting name and value. Use the `FirmwareSchema` resource to identify the available settings for the host. You cannot set values that are read-only.
1.  Save the changes and exit the editor.
1.  Get the host machine name by running the following command:
    ```terminal
     $ oc get bmh <hostname> -n openshift-machine name
    ```

    Where `<hostname>` is the name of the host. The terminal displays the machine name under the `CONSUMER` field.
1.  Annotate the machine to delete it from the machine set by running the following command:
    ```terminal
    $ oc annotate machine <machine_name> machine.openshift.io/delete-machine=true -n openshift-machine-api
    ```

    Where `<machine_name>` is the name of the machine to delete.
1.  Get a list of nodes and count the number of worker nodes by running the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Get the machine set by running the following command:
    ```terminal
    $ oc get machinesets -n openshift-machine-api
    ```
1.  Scale the machine set by running the following command:
    ```terminal
    $ oc scale machineset <machineset_name> -n openshift-machine-api --replicas=<n-1>
    ```

    Where `<machineset_name>` is the name of the machine set and `<n-1>` is the decremented number of worker nodes.
1.  When the host enters the `Available` state, scale up the machine set to make the `HostFirmwareSettings` resource changes take effect by running the following command:
    ```terminal
    $ oc scale machineset <machineset_name> -n openshift-machine-api --replicas=<n>
    ```

    Where `<machineset_name>` is the name of the machine set and `<n>` is the number of worker nodes.