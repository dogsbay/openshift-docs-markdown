{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing bare-metal hosts from the provisioner node {id="removing-bare-metal-hosts-from-provisioner_{{ context }}"}

In certain circumstances, you might want to temporarily remove bare-metal hosts from the provisioner node. For example, to prevent the management of the number of `Machine` objects that matches the number of available `BareMetalHost` objects, add a `baremetalhost.metal3.io/detached` annotation to the `MachineSet` object. {._abstract}

Consider an example during provisioning when a bare-metal host reboot is triggered by using the {{ product_title }} administration console or as a result of a Machine Config Pool update. In this case, {{ product_title }} logs into the integrated Dell Remote Access Controller (iDRAC) and issues a delete of the job queue.


:::note

This annotation has an effect for only `BareMetalHost` objects that are in either `Provisioned`, `ExternallyProvisioned`, or `Ready/Available` states.

:::


**Prerequisites**

*   Install {{ op_system }} bare-metal compute machines for use in the cluster and create corresponding `BareMetalHost` objects.
*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  To configure automatic scaling for a compute machine set, annotate the compute machine set by running the following command:
    ```terminal
    $ oc annotate machineset <machineset> -n openshift-machine-api 'baremetalhost.metal3.io/detached'
    ```

    Wait for the new machines to start.

    :::note

    When you use a `BareMetalHost` object to create a machine in the cluster and labels or selectors are subsequently changed on the `BareMetalHost`, the `BareMetalHost` object continues to be counted against the `MachineSet` that the `Machine` object was created from.
    
    :::

1.  In the provisioning use case, remove the annotation after the reboot is complete by using the following command:
    ```terminal
    $ oc annotate machineset <machineset> -n openshift-machine-api 'baremetalhost.metal3.io/detached-'
    ```