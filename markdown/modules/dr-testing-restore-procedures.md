{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing restore procedures {id="dr-testing-restore-procedures_{{ context }}"}

You can test your cluster restore workflow by simulating etcd failure on nonrecovery nodes and restoring from backup. Use this test to confirm that your etcd backup and restore process works as expected. {._abstract}


:::warning

You must have SSH access to the cluster. Without SSH access, you cannot disable etcd or manage the `kubelet` service on nonrecovery nodes.

:::


**Prerequisites**

*   You have SSH access to control plane hosts.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Use SSH to connect to each of your nonrecovery nodes to disable etcd and the `kubelet` service:
    1.  Disable etcd by running the following command:
        ```terminal
        $ sudo /usr/local/bin/disable-etcd.sh
        ```
    1.  Delete variable data for etcd by running the following command:
        ```terminal
        $ sudo rm -rf /var/lib/etcd
        ```
    1.  Disable the `kubelet` service by running the following command:
        ```terminal
        $ sudo systemctl disable kubelet.service
        ```
1.  Exit every SSH session.
1.  Ensure that your nonrecovery nodes are in a `NOT READY` state by running the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Restore your cluster to an earlier cluster state using an etcd backup. For more information, see "Restoring to an earlier cluster state".
1.  After you restore the cluster and the API responds, use SSH to connect to each nonrecovery node and enable the `kubelet` service by running the following command:
    ```terminal
    $ sudo systemctl enable kubelet.service
    ```
1.  Exit every SSH session.
1.  Verify that your nodes return to the `READY` state by running the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Verify that etcd is available by running the following command:
    ```terminal
    $ oc get pods -n openshift-etcd
    ```