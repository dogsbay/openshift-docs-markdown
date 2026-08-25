{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually defragmenting etcd data {id="manual-defrag-etcd-data_{{ context }}"}

When automatic etcd defragmentation cannot reclaim enough space, manually defragment etcd on each member to restore disk availability and normal cluster operation. {._abstract}

A Prometheus alert indicates when you need to use manual defragmentation. The alert is displayed in two cases:

*   When etcd uses more than 50% of its available space for more than 10 minutes
*   When etcd is actively using less than 50% of its total database size for more than 10 minutes

You can also determine whether defragmentation is needed by checking the etcd database size in MB that will be freed by defragmentation with the PromQL expression: `(etcd_mvcc_db_total_size_in_bytes - etcd_mvcc_db_total_size_in_use_in_bytes)/1024/1024`


:::warning

Defragmenting etcd is a blocking action. The etcd member does not respond until defragmentation is complete. For this reason, wait at least one minute between defragmentation actions on each of the pods to allow the cluster to recover.

:::


Follow this procedure to defragment etcd data on each etcd member.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Determine which etcd member is the leader, because the leader should be defragmented last.
    1.  Get the list of etcd pods:
        ```terminal
        $ oc -n openshift-etcd get pods -l k8s-app=etcd -o wide
        ```

        The following is example output:
        ```terminal
        etcd-ip-10-0-159-225.example.redhat.com                3/3     Running     0          175m   10.0.159.225   ip-10-0-159-225.example.redhat.com   <none>           <none>
        etcd-ip-10-0-191-37.example.redhat.com                 3/3     Running     0          173m   10.0.191.37    ip-10-0-191-37.example.redhat.com    <none>           <none>
        etcd-ip-10-0-199-170.example.redhat.com                3/3     Running     0          176m   10.0.199.170   ip-10-0-199-170.example.redhat.com   <none>           <none>
        ```
    1.  Choose a pod and run the following command to determine which etcd member is the leader:
        ```terminal
        $ oc rsh -n openshift-etcd etcd-ip-10-0-159-225.example.redhat.com etcdctl endpoint status --cluster -w table
        ```

        The following is example output:
        ```terminal
        Defaulting container name to etcdctl.
        Use 'oc describe pod/etcd-ip-10-0-159-225.example.redhat.com -n openshift-etcd' to see all of the containers in this pod.
        +---------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
        |         ENDPOINT          |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
        +---------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
        |  https://10.0.191.37:2379 | 251cd44483d811c3 |   3.5.9 |  104 MB |     false |      false |         7 |      91624 |              91624 |        |
        | https://10.0.159.225:2379 | 264c7c58ecbdabee |   3.5.9 |  104 MB |     false |      false |         7 |      91624 |              91624 |        |
        | https://10.0.199.170:2379 | 9ac311f93915cc79 |   3.5.9 |  104 MB |      true |      false |         7 |      91624 |              91624 |        |
        +---------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
        ```

        Based on the `IS LEADER` column of this output, the `https://10.0.199.170:2379` endpoint is the leader. Matching this endpoint with the output of the previous step, the pod name of the leader is `etcd-ip-10-0-199-170.example.redhat.com`.
1.  Defragment an etcd member.
    1.  Connect to the running etcd container, passing in the name of a pod that is _not_ the leader:
        ```terminal
        $ oc rsh -n openshift-etcd etcd-ip-10-0-159-225.example.redhat.com
        ```
    1.  Unset the `ETCDCTL_ENDPOINTS` environment variable:
        ```terminal
        sh-4.4# unset ETCDCTL_ENDPOINTS
        ```
    1.  Defragment the etcd member:
        ```terminal
        sh-4.4# etcdctl --command-timeout=30s --endpoints=https://localhost:2379 defrag
        ```

        The following is example output:
        ```terminal
        Finished defragmenting etcd member[https://localhost:2379]
        ```

        If a timeout error occurs, increase the value for `--command-timeout` until the command succeeds.
    1.  Verify that the database size was reduced:
        ```terminal
        sh-4.4# etcdctl endpoint status -w table --cluster
        ```

        The following is example output:
        ```terminal
        +---------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
        |         ENDPOINT          |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
        +---------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
        |  https://10.0.191.37:2379 | 251cd44483d811c3 |   3.5.9 |  104 MB |     false |      false |         7 |      91624 |              91624 |        |
        | https://10.0.159.225:2379 | 264c7c58ecbdabee |   3.5.9 |   41 MB |     false |      false |         7 |      91624 |              91624 |        | (1)
        | https://10.0.199.170:2379 | 9ac311f93915cc79 |   3.5.9 |  104 MB |      true |      false |         7 |      91624 |              91624 |        |
        +---------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
        ```

        This example shows that the database size for this etcd member is now 41 MB as opposed to the starting size of 104 MB.
    1.  Repeat these steps to connect to each of the other etcd members and defragment them. Always defragment the leader last.

        Wait at least one minute between defragmentation actions to allow the etcd pod to recover. Until the etcd pod recovers, the etcd member does not respond.
1.  If any `NOSPACE` alarms were triggered due to the space quota being exceeded, clear them.
    1.  Check if there are any `NOSPACE` alarms:
        ```terminal
        sh-4.4# etcdctl alarm list
        ```

        The following is example output:
        ```terminal
        memberID:12345678912345678912 alarm:NOSPACE
        ```
    1.  Clear the alarms:
        ```terminal
        sh-4.4# etcdctl alarm disarm
        ```