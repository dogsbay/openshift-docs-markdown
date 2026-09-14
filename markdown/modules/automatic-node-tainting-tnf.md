{%- set _mod_docs_content_type = "CONCEPT" %}

# Automatic node tainting in a two-node OpenShift cluster with fencing {id="automatic-node-tainting-tnf_{{ context }}"}

In a two-node {{ product_title }} cluster with fencing (TNF) your applications recover quickly from node failures without manual intervention by using the automatic node tainting mechanism.  {._abstract}

When a node fails, the automatic tainting mechanism immediately evicts workloads to the surviving node, reducing failover time significantly. 

This mechanism is built into the deployment, requires no configuration, cannot be disabled, and applies exclusively to control plane nodes in a two-node topology.

You do not need to take any action for this automation to run. However, you can observe its activity during a fencing event. You can view the applied taint and annotation immediately after a node is fenced by running the following command:

```terminal
$ oc get node <node_name>
```

Persistent volumes and Deployment pods become eligible for rescheduling much sooner than they would normally. 

You can inspect the local logs on each control plane node by using the `journalctl` tool by filtering for the following tags:

*   `taint-fenced-node`
*   `untaint-fenced-node`
*   `tnf-taint-alert`
*   `tnf-untaint-alert`.