{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the status of an etcd cluster {id="hosted-cluster-etcd-status_{{ context }}"}

You can check the status of the etcd cluster health by logging into any etcd pod. {._abstract}

**Procedure**

1.  Log in to an etcd pod by entering the following command:
    ```terminal
    $ oc rsh -n clusters-<hosted_cluster_name> -c etcd <etcd_pod_name>
    ```
1.  Print the health status of an etcd cluster by entering the following command:
    ```terminal
    sh-4.4# etcdctl endpoint status -w table
    ```
    ```terminal title="Example output"
    +------------------------------+-----------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
    |          ENDPOINT            |       ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
    +------------------------------+-----------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
    | https://192.168.1xxx.20:2379 | 8fxxxxxxxxxx    |  3.5.12 |  123 MB |     false |      false |        10 |     180156 |             180156 |        |
    | https://192.168.1xxx.21:2379 | a5xxxxxxxxxx    |  3.5.12 |  122 MB |     false |      false |        10 |     180156 |             180156 |        |
    | https://192.168.1xxx.22:2379 | 7cxxxxxxxxxx    |  3.5.12 |  124 MB |      true |      false |        10 |     180156 |             180156 |        |
    +-----------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
    ```