{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable CPU isolation for executed processes {id="cnf-disabling-cpu-isolation-for-executed-processes_{{ context }}"}

If you have a high-performance workload that requires executed processes to use any available core rather than being pinned to the first core, you can opt out of the default behavior by following this procedure. {._abstract}


:::note

Adding or removing the `performance.openshift.io/exec-cpu-affinity` annotation triggers a MachineConfig rollout that reboots the affected nodes.

:::


**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  List existing profiles by running the following command:
    ```terminal
    $ oc get performanceprofile
    ```

    Identify the PerformanceProfile applied to the nodes running your high-performance workload.
1.  Edit the identified PerformanceProfile to add the annotation that disables CPU isolation for executed processes by running the following command, replacing `<profile-name>` with the name of your PerformanceProfile:
    ```terminal
    $ oc edit performanceprofile <profile-name>
    ```
1.  In the editor that opens, add the following annotation under the `metadata` section:
    ```yaml
    metadata:
      name: <profile-name>
      annotations:
        performance.openshift.io/exec-cpu-affinity: "disable"
    ```
1.  Save and close the editor to apply the changes.
1.  Wait for the MachineConfigPool (MCP) to finish updating:
    ```terminal
    $ oc get mcp
    ```

    All pools should show `UPDATED=True` and `UPDATING=False` before proceeding.

**Verification**

1.  Verify that the annotation has been added by running the following command, replacing `<profile-name>` with the name of your PerformanceProfile:
    ```terminal
    $ oc get performanceprofile <profile_name> -o yaml | grep "exec-cpu-affinity: disable"
    ```

    Expected output:
    ```terminal
        performance.openshift.io/exec-cpu-affinity: "disable"
    ```