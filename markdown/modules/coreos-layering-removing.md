{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reverting an out-of-cluster node {id="coreos-layering-removing_{{ context }}"}

You can revert an out-of-cluster custom layered image from the nodes in specific machine config pools. The Machine Config Operator (MCO) reboots those nodes with the cluster base {{ op_system_first }} image, overriding the custom layered image. {._abstract}

To remove a {{ op_system_first }} custom layered image from your cluster, you need to delete the machine config that applied the image.

**Procedure**

*   Delete the machine config that applied the custom layered image.
    ```terminal
    $ oc delete mc os-layer-custom
    ```

    After deleting the machine config, the nodes reboot.

**Verification**

You can verify that the custom layered image is removed by performing any of the following checks:

1.  Check that the worker machine config pool is updating with the previous machine config:
    ```terminal
    $ oc get mcp
    ```
    ```terminal title="Sample output"
    NAME     CONFIG                                             UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master   rendered-master-6faecdfa1b25c114a58cf178fbaa45e2   True      False      False      3              3                   3                     0                      39m
    worker   rendered-worker-6b000dbc31aaee63c6a2d56d04cd4c1b   False     True       False      3              0                   0                     0                      39m
    ```

    When the `UPDATING` field is `True`, the machine config pool is updating with the previous machine config. When the field becomes `False`, the worker machine config pool has rolled out to the previous machine config.
1.  Check the nodes to see that scheduling on the nodes is disabled. This indicates that the change is being applied:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                         STATUS                     ROLES                  AGE   VERSION
    ip-10-0-148-79.us-west-1.compute.internal    Ready                      worker                 32m   v1.35.4
    ip-10-0-155-125.us-west-1.compute.internal   Ready,SchedulingDisabled   worker                 35m   v1.35.4
    ip-10-0-170-47.us-west-1.compute.internal    Ready                      control-plane,master   42m   v1.35.4
    ip-10-0-174-77.us-west-1.compute.internal    Ready                      control-plane,master   42m   v1.35.4
    ip-10-0-211-49.us-west-1.compute.internal    Ready                      control-plane,master   42m   v1.35.4
    ip-10-0-218-151.us-west-1.compute.internal   Ready                      worker                 31m   v1.35.4
    ```
1.  When the node is back in the `Ready` state, check that the node is using the base image:
    1.  Open an `oc debug` session to the node by running the following command:
        ```terminal
        $ oc debug node/<node_name>
        ```
    1.  Set `/host` as the root directory within the debug shell by running the following command:
        ```terminal
        sh-5.1# chroot /host
        ```
    1.  Run the `rpm-ostree status` command to view that the custom layered image is in use:
        ```terminal
        sh-5.1# sudo rpm-ostree status
        ```
        ```text title="Example output"
        State: idle
        Deployments:
        * ostree-unverified-registry:podman pull quay.io/openshift-release-dev/ocp-release@sha256:e2044c3cfebe0ff3a99fc207ac5efe6e07878ad59fd4ad5e41f88cb016dacd73
                           Digest: sha256:e2044c3cfebe0ff3a99fc207ac5efe6e07878ad59fd4ad5e41f88cb016dacd73
        ```