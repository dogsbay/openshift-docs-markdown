{%- set _mod_docs_content_type = "PROCEDURE" %}
# Automatically scaling machines to the number of available bare-metal hosts {id="automatically-scaling-machines-to-available-bare-metal-hosts_{{ context }}"}

To automatically create the number of `Machine` objects that matches the number of available `BareMetalHost` objects, add a `metal3.io/autoscale-to-hosts` annotation to the `MachineSet` object. {._abstract}

**Prerequisites**

*   Install {{ op_system }} bare-metal compute machines for use in the cluster, and create corresponding `BareMetalHost` objects.
*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  To configure automatic scaling for a compute machine set, annotate the compute machine set by running the following command:
    ```terminal
    $ oc annotate machineset <machineset> -n openshift-machine-api 'metal3.io/autoscale-to-hosts=<any_value>'
    ```
    *   `<machineset>`: Specifies the name of the compute machine set that you want to configure for automatic scaling.
    *   `<any_value>` Specifies is a value, such as `true` or `""`.
1.  Wait for the new scaled machines to start.

    :::note

    The `BareMetalHost` object continues to be counted against the `MachineSet` that the `Machine` object was created from when the following conditions are met:

    *   You use a `BareMetalHost` object to create a machine in the cluster.
    *   You subsequently change labels or selectors on the `BareMetalHost`.
    
    :::