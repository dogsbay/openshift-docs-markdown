---
title: "Remediating, fencing, and maintaining nodes"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Remediating, fencing, and maintaining nodes {id="nodes-remediating-fencing-maintaining-rhwa"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nodes-remediating-fencing-maintaining-rhwa" %}

When node-level failures occur, due to issues such as kernel hangs or network issues, it is important to isolate the node, known as _fencing_, before initiating recovery of the workload, known as _remediation_, and then you can attempt to recover the node.

During node failures, the work required from the cluster does not decrease and workloads from affected nodes need to be restarted somewhere. Failures affecting these workloads risk data loss, corruption, or both.

For more information on remediation, fencing, and maintaining nodes, see the [Workload Availability for Red Hat OpenShift](https://access.redhat.com/documentation/en-us/workload_availability_for_red_hat_openshift) documentation.