{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing an unhealthy etcd member whose etcd pod is crashlooping {id="restore-replace-crashlooping-etcd-member_{{ context }}"}

Replace a crashlooping etcd member by removing it from the cluster and creating a healthy replacement so the control plane can regain quorum. {._abstract}

**Prerequisites**

*   You have identified the unhealthy etcd member.
*   You have verified that the etcd pod is crashlooping.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have taken an etcd backup.

    :::important

    It is important to take an etcd backup before performing this procedure so that your cluster can be restored if you encounter any issues.
    
    :::


**Procedure**

1.  Stop the crashlooping etcd pod.
    1.  Debug the node that is crashlooping.

        In a terminal that has access to the cluster as a `cluster-admin` user, run the following command:
        ```terminal
        $ oc debug node/<unhealthy_node>
        ```

        Replace `<unhealthy_node>` with the name of the unhealthy etcd member.
    1.  Change your root directory to `/host`:
        ```terminal
        sh-4.2# chroot /host
        ```
    1.  Move the existing etcd pod file out of the kubelet manifest directory:
        ```terminal
        sh-4.2# mkdir /var/lib/etcd-backup
        ```
        ```terminal
        sh-4.2# mv /etc/kubernetes/manifests/etcd-pod.yaml /var/lib/etcd-backup/
        ```
    1.  Move the etcd data directory to a different location:
        ```terminal
        sh-4.2# mv /var/lib/etcd/ /tmp
        ```

        You can now exit the node shell.
1.  Remove the unhealthy member.
    1.  Choose a pod that is _not_ on the affected node.

        In a terminal that has access to the cluster as a `cluster-admin` user, run the following command:
        ```terminal
        $ oc -n openshift-etcd get pods -l k8s-app=etcd
        ```
        ```terminal title="Example output"
        etcd-ip-10-0-131-183.ec2.internal                2/3     Error       7          6h9m
        etcd-ip-10-0-164-97.ec2.internal                 3/3     Running     0          6h6m
        etcd-ip-10-0-154-204.ec2.internal                3/3     Running     0          6h6m
        ```
    1.  Connect to the running etcd container, passing in the name of a pod that is not on the affected node.

        In a terminal that has access to the cluster as a `cluster-admin` user, run the following command:
        ```terminal
        $ oc rsh -n openshift-etcd etcd-ip-10-0-154-204.ec2.internal
        ```
    1.  View the member list:
        ```terminal
        sh-4.2# etcdctl member list -w table
        ```
        ```terminal title="Example output"
        +------------------+---------+------------------------------+---------------------------+---------------------------+
        |        ID        | STATUS  |             NAME             |        PEER ADDRS         |       CLIENT ADDRS        |
        +------------------+---------+------------------------------+---------------------------+---------------------------+
        | 62bcf33650a7170a | started | ip-10-0-131-183.ec2.internal | https://10.0.131.183:2380 | https://10.0.131.183:2379 |
        | b78e2856655bc2eb | started |  ip-10-0-164-97.ec2.internal |  https://10.0.164.97:2380 |  https://10.0.164.97:2379 |
        | d022e10b498760d5 | started | ip-10-0-154-204.ec2.internal | https://10.0.154.204:2380 | https://10.0.154.204:2379 |
        +------------------+---------+------------------------------+---------------------------+---------------------------+
        ```

        Take note of the ID and the name of the unhealthy etcd member, because these values are needed later in the procedure.
    1.  Remove the unhealthy etcd member by providing the ID to the `etcdctl member remove` command:
        ```terminal
        sh-4.2# etcdctl member remove 62bcf33650a7170a
        ```
        ```terminal title="Example output"
        Member 62bcf33650a7170a removed from cluster ead669ce1fbfb346
        ```
    1.  View the member list again and verify that the member was removed:
        ```terminal
        sh-4.2# etcdctl member list -w table
        ```
        ```terminal title="Example output"
        +------------------+---------+------------------------------+---------------------------+---------------------------+
        |        ID        | STATUS  |             NAME             |        PEER ADDRS         |       CLIENT ADDRS        |
        +------------------+---------+------------------------------+---------------------------+---------------------------+
        | b78e2856655bc2eb | started |  ip-10-0-164-97.ec2.internal |  https://10.0.164.97:2380 |  https://10.0.164.97:2379 |
        | d022e10b498760d5 | started | ip-10-0-154-204.ec2.internal | https://10.0.154.204:2380 | https://10.0.154.204:2379 |
        +------------------+---------+------------------------------+---------------------------+---------------------------+
        ```

        You can now exit the node shell.
1.  Turn off the quorum guard by entering the following command:
    ```terminal
    $ oc patch etcd/cluster --type=merge -p '{"spec": {"unsupportedConfigOverrides": {"useUnsupportedUnsafeNonHANonProductionUnstableEtcd": true}}}'
    ```

    This command ensures that you can successfully re-create secrets and roll out the static pods.
1.  Remove the old secrets for the unhealthy etcd member that was removed.
    1.  List the secrets for the unhealthy etcd member that was removed.
        ```terminal
        $ oc get secrets -n openshift-etcd | grep <unhealthy_node>
        ```

        Replace `<unhealthy_node>` with the name of the unhealthy etcd member.

        There is a peer, serving, and metrics secret as shown in the following output:
        ```terminal title="Example output"
        etcd-peer-ip-10-0-131-183.ec2.internal              kubernetes.io/tls                     2      47m
        etcd-serving-ip-10-0-131-183.ec2.internal           kubernetes.io/tls                     2      47m
        etcd-serving-metrics-ip-10-0-131-183.ec2.internal   kubernetes.io/tls                     2      47m
        ```
    1.  Delete the secrets for the unhealthy etcd member that was removed.
        1.  Delete the peer secret:
            ```terminal
            $ oc delete secret -n openshift-etcd etcd-peer-ip-10-0-131-183.ec2.internal
            ```
        1.  Delete the serving secret:
            ```terminal
            $ oc delete secret -n openshift-etcd etcd-serving-ip-10-0-131-183.ec2.internal
            ```
        1.  Delete the metrics secret:
            ```terminal
            $ oc delete secret -n openshift-etcd etcd-serving-metrics-ip-10-0-131-183.ec2.internal
            ```
1.  Force etcd redeployment.

    In a terminal that has access to the cluster as a `cluster-admin` user, run the following command:
    ```terminal
    $ oc patch etcd cluster -p='{"spec": {"forceRedeploymentReason": "single-master-recovery-'"$( date --rfc-3339=ns )"'"}}' --type=merge
    ```

    The `forceRedeploymentReason` value must be unique, which is why a timestamp is appended.

    When the etcd cluster Operator performs a redeployment, it ensures that all control plane nodes have a functioning etcd pod.
1.  Turn the quorum guard back on by entering the following command:
    ```terminal
    $ oc patch etcd/cluster --type=merge -p '{"spec": {"unsupportedConfigOverrides": null}}'
    ```
1.  You can verify that the `unsupportedConfigOverrides` section is removed from the object by entering this command:
    ```terminal
    $ oc get etcd/cluster -oyaml
    ```
1.  If you are using {{ sno }}, restart the node. Otherwise, you might encounter the following error in the etcd cluster Operator:
    ```terminal title="Example output"
    EtcdCertSignerControllerDegraded: [Operation cannot be fulfilled on secrets "etcd-peer-sno-0": the object has been modified; please apply your changes to the latest version and try again, Operation cannot be fulfilled on secrets "etcd-serving-sno-0": the object has been modified; please apply your changes to the latest version and try again, Operation cannot be fulfilled on secrets "etcd-serving-metrics-sno-0": the object has been modified; please apply your changes to the latest version and try again]
    ```

**Verification**

*   Verify that the new member is available and healthy.
    1.  Connect to the running etcd container again.

        In a terminal that has access to the cluster as a cluster-admin user, run the following command:
        ```terminal
        $ oc rsh -n openshift-etcd etcd-ip-10-0-154-204.ec2.internal
        ```
    1.  Verify that all members are healthy:
        ```terminal
        sh-4.2# etcdctl endpoint health
        ```
        ```terminal title="Example output"
        https://10.0.131.183:2379 is healthy: successfully committed proposal: took = 16.671434ms
        https://10.0.154.204:2379 is healthy: successfully committed proposal: took = 16.698331ms
        https://10.0.164.97:2379 is healthy: successfully committed proposal: took = 16.621645ms
        ```