{%- set _mod_docs_content_type = "CONCEPT" %}
# Deferring application of tuning changes {id="defer-application-of-tuning-changes_{{ context }}"}

As an administrator, use the Node Tuning Operator (NTO) to update custom resources (CRs) on a running system and make tuning changes. For example, they can update or add a sysctl parameter to the [sysctl] section of the tuned object. When administrators apply a tuning change, the NTO prompts TuneD to reprocess all configurations, causing the tuned process to roll back all tuning and then reapply it. {._abstract}

Latency-sensitive applications may not tolerate the removal and reapplication of the tuned profile, as it can briefly disrupt performance. This is particularly critical for configurations that partition CPUs and manage process or interrupt affinity using the performance profile. To avoid this issue, {{ product_title }} introduced new methods for applying tuning changes. Before {{ product_title }} 4.17, the only available method, immediate, applied changes instantly, often triggering a tuned restart.

The following additional methods are supported:
 
 * `always`: Every change is applied at the next node restart.
 * `update`: When a tuning change modifies a tuned profile, it is applied immediately by default and takes effect as soon as possible. When a tuning change does not cause a tuned profile to change and its values are modified in place, it is treated as always.

Enable this feature by adding the annotation `tuned.openshift.io/deferred`. The following table summarizes the possible values for the annotation:

| Annotation value | Description  |
| --- | --- |
| missing | The change is applied immediately.  |
| always | The change is applied at the next node restart. |
| update | The change is applied immediately if it causes a profile change, otherwise at the next node restart.  |

The following example demonstrates how to apply a change to the `kernel.shmmni` sysctl parameter by using the `always` method:

```yaml title="Example"
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
*   The `machineConfigLabels` field is used to target the `worker-cnf` role. Configure a `MachineConfigPool` resource to ensure the profile is applied only to the correct nodes.


:::note

You can use {{ cgu_operator_full }} to perform a controlled reboot across a fleet of spoke clusters to apply a deferred tuning change. For more information about coordinated reboots, see "Coordinating reboots for configuration changes".

:::