{%- set _mod_docs_content_type = "PROCEDURE" %}
# Evacuating pods on nodes {id="nodes-nodes-working-evacuating_{{ context }}"}

You can remove, or evacuate, pods from a given node or nodes. Evacuating pods allows you to migrate all or selected pods to other nodes. {._abstract}

You can evacuate only pods that are backed by a replication controller. The replication controller creates new pods on
other nodes and removes the existing pods from the specified node(s).

Bare pods, meaning those not backed by a replication controller, are unaffected by default.
You can evacuate a subset of pods by specifying a pod selector. Because pod selectors are
based on labels, all of the pods with the specified label are evacuated.

**Procedure**

1.  Mark the nodes as unschedulable before performing the pod evacuation.
    1.  Mark the node as unschedulable by running the following command:
        ```terminal
        $ oc adm cordon <node1>
        ```
        ```terminal title="Example output"
        node/<node1> cordoned
        ```
    1.  Check that the node status is `Ready,SchedulingDisabled` by running the following command:
        ```terminal
        $ oc get node <node1>
        ```
        ```terminal title="Example output"
        NAME        STATUS                     ROLES     AGE       VERSION
        <node1>     Ready,SchedulingDisabled   worker    1d        v1.35.4
        ```
1.  Evacuate the pods by using one of the following methods:
    *   Evacuate all or selected pods on one or more nodes by running the `oc adm drain` command:
        ```terminal
        $ oc adm drain <node1> <node2> [--pod-selector=<pod_selector>]
        ```
    *   Force the deletion of bare pods by using the `--force` option with the `oc adm drain` command. When set to
    `true`, deletion continues even if there are pods not managed by a replication
    controller, replica set, job, daemon set, or stateful set.
        ```terminal
        $ oc adm drain <node1> <node2> --force=true
        ```
    *   Set a period of time in seconds for each pod to
    terminate gracefully by using the `--grace-period` option with the `oc adm drain` command. If negative, the default value specified in the pod will
    be used:
        ```terminal
        $ oc adm drain <node1> <node2> --grace-period=-1
        ```
    *   Ignore pods managed by daemon sets by using the `--ignore-daemonsets=true` option with the `oc adm drain` command:
        ```terminal
        $ oc adm drain <node1> <node2> --ignore-daemonsets=true
        ```
    *   Set the length of time to wait before giving up using the `--timeout`  option with the `oc adm drain` command. A
    value of `0` sets an infinite length of time.
        ```terminal
        $ oc adm drain <node1> <node2> --timeout=5s
        ```
    *   Delete pods even if there are pods using `emptyDir` volumes by setting the `--delete-emptydir-data=true` option with the `oc adm drain` command. Local data is deleted when the node
    is drained.
        ```terminal
        $ oc adm drain <node1> <node2> --delete-emptydir-data=true
        ```
    *   List objects that would be migrated without actually performing the evacuation,
    by using the `--dry-run=true` option with the `oc adm drain` command:
        ```terminal
        $ oc adm drain <node1> <node2>  --dry-run=true
        ```

        Instead of specifying specific node names (for example, `<node1> <node2>`), you
        can use the `--selector=<node_selector>` option with the `oc adm drain` command to evacuate pods on selected
        nodes.
1.  Mark the node as schedulable when done by using the following command.
    ```terminal
    $ oc adm uncordon <node1>
    ```