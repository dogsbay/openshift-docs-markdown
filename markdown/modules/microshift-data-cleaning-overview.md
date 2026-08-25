{%- set _mod_docs_content_type = "PROCEDURE" %}
# Data cleanup script overview {id="microshift-data-cleaning-overview_{{ context }}"}

You can see the usage and list available options of the `microshift-cleanup-data` script by running the script without arguments. Running the script without arguments does not delete any data or stop the {{ microshift_short }} service. {._abstract}

**Procedure**

1.  See the usage and list the available options of the `microshift-cleanup-data` script by entering the following command:

    :::warning

    Some script operations are destructive and can cause data loss. Review the specific procedure for each argument for detailed warnings.
    
    :::

    ```terminal
    $ microshift-cleanup-data
    ```
    ```terminal title="Example output"
    Stop all MicroShift services, also cleaning their data

    Usage: microshift-cleanup-data <--all [--keep-images] | --ovn | --cert>
       --all         Clean all MicroShift and OVN data
       --keep-images Keep container images when cleaning all data
       --ovn         Clean OVN data only
       --cert        Clean certificates only
    ```