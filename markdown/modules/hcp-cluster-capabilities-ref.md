{%- set _mod_docs_content_type = "REFERENCE" %}
# Capabilities that you can enable or disable for a hosted cluster {id="hcp-cluster-capabilities-ref_{{ context }}"}

Familiarize yourself with the supported capabilities that you can enable or disable for a `HostedCluster` resource. {._abstract}

The capabilities are described in the following table:

| Capability | Description |
| --- | --- |
| `ImageRegistry` | The OpenShift Image Registry Operator and its operands, including cloud storage infrastructure, such as S3 buckets and Identity and Access Management (IAM) users. |
| `openshift-samples` | The OpenShift Samples Operator, which manages example `ImageStreams` and templates. |
| `Insights` | The Insights Operator, which collects and uploads cluster telemetry data. |
| `baremetal` | The Bare Metal Infrastructure Operator. This capability is excluded from the default set. If needed, you must explicitly enable it. |
| `Console` | The OpenShift Web Console Operator and its operands. |
| `NodeTuning` | The Node Tuning Operator, which manages node-level performance tuning by using TuneD and performance profiles. |
| `Ingress` | The OpenShift Ingress Operator, which manages the default router of the cluster. |

The following rules apply when you combine capability settings:


No overlap
:   A capability cannot be in both the `enabled` and `disabled` lists simultaneously.

Console requires Ingress
:   You can disable the `Ingress` capability only if the `Console` capability is also disabled because the console depends on Ingress.

Version requirement
:   You must use {{ product_title }} 4.20 or later to disable any of the following capabilities: `openshift-samples`, `Insights`, `Console`, `NodeTuning`, and `Ingress`. You can disable `ImageRegistry` and `baremetal` on versions earlier than 4.20.

Bare metal default exclusion
:   The `baremetal` capability is excluded from the default set. You can add it to the cluster by explicitly enabling it.