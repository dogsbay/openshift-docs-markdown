{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deferring application of tuning changes: An example {id="defer-application-of-tuning-changes-example_{{ context }}"}

The following worked example describes how to defer the application of tuning changes by using the Node Tuning Operator. {._abstract}

**Prerequisites**

*   You have `cluster-admin` role access.
*   You have applied a performance profile to your cluster.
*   A `MachineConfigPool` resource, for example, `worker-cnf` is configured to ensure that the profile is only applied to the designated nodes.

**Procedure**

1.  Check what profiles are currently applied to your cluster by running the following command: 
    ```shell
    $ oc -n openshift-cluster-node-tuning-operator get tuned
    ```
    ```shell title="Example output"
    NAME                                     AGE
    default                                  63m
    openshift-node-performance-performance   21m
    ```
1.  Check the machine config pools in your cluster by running the following command:
    ```shell
    $ oc get mcp
    ```
    ```shell title="Example output"
    NAME         CONFIG                                                 UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master       rendered-master-79a26af9f78ced61fa8ccd309d3c859c       True      False      False      3              3                   3                     0                      157m
    worker       rendered-worker-d9352e91a1b14de7ef453fa54480ce0e       True      False      False      2              2                   2                     0                      157m
    worker-cnf   rendered-worker-cnf-f398fc4fcb2b20104a51e744b8247272   True      False      False      1              1                   1                     0                      92m
    ```
1.  Describe the current applied performance profile by running the following command:
    ```shell
    $ oc describe performanceprofile performance | grep Tuned
    ```
    ```shell title="Example output"
    Tuned:                   openshift-cluster-node-tuning-operator/openshift-node-performance-performance
    ```
1.  Verify the existing value of the `kernel.shmmni` sysctl parameter:
    1.  Run the following command to display the node names:
        ```shell
        $ oc get nodes 
        ```
        ```shell title="Example output"
        NAME                          STATUS   ROLES                  AGE    VERSION
        ip-10-0-26-151.ec2.internal   Ready    worker,worker-cnf      116m   v1.30.6
        ip-10-0-46-60.ec2.internal    Ready    worker                 115m   v1.30.6
        ip-10-0-52-141.ec2.internal   Ready    control-plane,master   123m   v1.30.6
        ip-10-0-6-97.ec2.internal     Ready    control-plane,master   121m   v1.30.6
        ip-10-0-86-145.ec2.internal   Ready    worker                 117m   v1.30.6
        ip-10-0-92-228.ec2.internal   Ready    control-plane,master   123m   v1.30.6
        ```
    1.  Run the following command to display the current value of the `kernel.shmmni` sysctl parameters on the node `ip-10-0-32-74.ec2.internal`:
        ```shell
        $ oc debug node/ip-10-0-26-151.ec2.internal  -q -- chroot host sysctl kernel.shmmni
        ```
        ```shell title="Example output"
        kernel.shmmni = 4096
        ```
1.  Create a profile patch, for example, `perf-patch.yaml` that changes the `kernel.shmmni` sysctl parameter to `8192`. Defer the application of the change to a new manual restart by using the `always` method by applying the following configuration:
    ```yaml
    apiVersion: tuned.openshift.io/v1
    kind: Tuned
    metadata:
      name: performance-patch
      namespace: openshift-cluster-node-tuning-operator
      annotations:
        tuned.openshift.io/deferred: "always"
    spec:
      profile:
        - name: performance-patch
          data: |
            [main]
            summary=Configuration changes profile inherited from performance created tuned
            include=openshift-node-performance-performance
            [sysctl]
            kernel.shmmni=8192
      recommend:
        - machineConfigLabels:
            machineconfiguration.openshift.io/role: worker-cnf
          priority: 19
          profile: performance-patch
    ```

    where:
    *   The `include` directive is used to inherit the `openshift-node-performance-performance` profile. This is a best practice to ensure that the profile is not missing any required settings.
    *   The `kernel.shmmni` sysctl parameter is being changed to `8192`.
    *   The `machineConfigLabels` field is used to target the `worker-cnf` role.
1.  Apply the profile patch by running the following command:
    ```shell
    $ oc apply -f perf-patch.yaml
    ```
1.  Run the following command to verify that the profile patch is waiting for the next node restart:
    ```shell
    $ oc -n openshift-cluster-node-tuning-operator get profile
    ```
    ```shell title="Example output"
    NAME                          TUNED                     APPLIED   DEGRADED   MESSAGE                                                                            AGE
    ip-10-0-26-151.ec2.internal   performance-patch         False     True       The TuneD daemon profile is waiting for the next node restart: performance-patch   126m
    ip-10-0-46-60.ec2.internal    openshift-node            True      False      TuneD profile applied.                                                             125m
    ip-10-0-52-141.ec2.internal   openshift-control-plane   True      False      TuneD profile applied.                                                             130m
    ip-10-0-6-97.ec2.internal     openshift-control-plane   True      False      TuneD profile applied.                                                             130m
    ip-10-0-86-145.ec2.internal   openshift-node            True      False      TuneD profile applied.                                                             126m
    ip-10-0-92-228.ec2.internal   openshift-control-plane   True      False      TuneD profile applied.                                                             130m
    ```
1.  Confirm the value of the `kernel.shmmni` sysctl parameter remain unchanged before a restart:
    1.  Run the following command to confirm that the application of the `performance-patch` change to the `kernel.shmmni` sysctl parameter on the node `ip-10-0-26-151.ec2.internal` is not applied:
        ```shell
        $ oc debug node/ip-10-0-26-151.ec2.internal  -q -- chroot host sysctl kernel.shmmni
        ```
        ```shell title="Example output"
        kernel.shmmni = 4096
        ```
1.  Restart the node `ip-10-0-26-151.ec2.internal` to apply the required changes by running the following command:
    ```shell
    $ oc debug node/ip-10-0-26-151.ec2.internal  -q -- chroot host reboot&
    ```
1.  In another terminal window, run the following command to verify that the node has restarted:
    ```shell
    $ watch oc get nodes
    ```

    Wait for the node `ip-10-0-26-151.ec2.internal` to transition back to the `Ready` state.
1.  Run the following command to verify that the profile patch is waiting for the next node restart:
    ```shell
    $ oc -n openshift-cluster-node-tuning-operator get profile
    ```
    ```shell title="Example output"
    NAME                          TUNED                     APPLIED   DEGRADED   MESSAGE                                                                            AGE
    ip-10-0-20-251.ec2.internal   performance-patch         True      False      TuneD profile applied.                                                             3h3m
    ip-10-0-30-148.ec2.internal   openshift-control-plane   True      False      TuneD profile applied.                                                             3h8m
    ip-10-0-32-74.ec2.internal    openshift-node            True      True       TuneD profile applied.                                                             179m
    ip-10-0-33-49.ec2.internal    openshift-control-plane   True      False      TuneD profile applied.                                                             3h8m
    ip-10-0-84-72.ec2.internal    openshift-control-plane   True      False      TuneD profile applied.                                                             3h8m
    ip-10-0-93-89.ec2.internal    openshift-node            True      False      TuneD profile applied.                                                             179m
    ```
1.  Check that the value of the `kernel.shmmni` sysctl parameter have changed after the restart:
    1.  Run the following command to verify that the `kernel.shmmni` sysctl parameter change has been applied on the node `ip-10-0-32-74.ec2.internal`:
        ```shell
        $ oc debug node/ip-10-0-32-74.ec2.internal  -q -- chroot host sysctl kernel.shmmni
        ```
        ```shell title="Example output"
        kernel.shmmni = 8192
        ```

        :::note

        An additional restart results in the restoration of the original value of the `kernel.shmmni` sysctl parameter.
        
        :::