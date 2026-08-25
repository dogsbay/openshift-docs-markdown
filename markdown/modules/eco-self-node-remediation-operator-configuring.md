{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring the Self Node Remediation Operator {id="configuring-self-node-remediation-operator_{{ context }}"}

The Self Node Remediation Operator creates the `SelfNodeRemediationConfig` CR and the `SelfNodeRemediationTemplate` Custom Resource Definition (CRD).

## Understanding the Self Node Remediation Operator configuration {id="understanding-self-node-remediation-operator-config_{{ context }}"}

The Self Node Remediation Operator creates the `SelfNodeRemediationConfig` CR with the name `self-node-remediation-config`. The CR is created in the namespace of the Self Node Remediation Operator.

A change in the `SelfNodeRemediationConfig` CR re-creates the Self Node Remediation daemon set.

The `SelfNodeRemediationConfig` CR resembles the following YAML file:

```yaml
apiVersion: self-node-remediation.medik8s.io/v1alpha1
kind: SelfNodeRemediationConfig
metadata:
  name: self-node-remediation-config
  namespace: openshift-operators
spec:
  safeTimeToAssumeNodeRebootedSeconds: 180 (1)
  watchdogFilePath: /dev/watchdog (2)
  isSoftwareRebootEnabled: true (3)
  apiServerTimeout: 15s (4)
  apiCheckInterval: 5s (5)
  maxApiErrorThreshold: 3 (6)
  peerApiServerTimeout: 5s (7)
  peerDialTimeout: 5s (8)
  peerRequestTimeout: 5s (9)
  peerUpdateInterval: 15m (10)
```

1.  Specify the timeout duration for the surviving peer, after which the Operator can assume that an unhealthy node has been rebooted. The Operator automatically calculates the lower limit for this value. However, if different nodes have different watchdog timeouts, you must change this value to a higher value.
1.  Specify the file path of the watchdog device in the nodes. If you enter an incorrect path to the watchdog device, the Self Node Remediation Operator automatically detects the softdog device path.

    If a watchdog device is unavailable, the `SelfNodeRemediationConfig` CR uses a software reboot.
1.  Specify if you want to enable software reboot of the unhealthy nodes. By default, the value of `isSoftwareRebootEnabled` is set to `true`. To disable the software reboot, set the parameter value to `false`.
1.  Specify the timeout duration to check connectivity with each API server. When this duration elapses, the Operator starts remediation. The timeout duration must be greater than or equal to 10 milliseconds.
1.  Specify the frequency to check connectivity with each API server. The timeout duration must be greater than or equal to 1 second.
1.  Specify a threshold value. After reaching this threshold, the node starts contacting its peers. The threshold value must be greater than or equal to 1 second.
1.  Specify the duration of the timeout for the peer to connect the API server. The timeout duration must be greater than or equal to 10 milliseconds.
1.  Specify the duration of the timeout for establishing connection with the peer. The timeout duration must be greater than or equal to 10 milliseconds.
1.  Specify the duration of the timeout to get a response from the peer. The timeout duration must be greater than or equal to 10 milliseconds.
1.  Specify the frequency to update peer information, such as IP address. The timeout duration must be greater than or equal to 10 seconds.


:::note

You can edit the `self-node-remediation-config` CR that is created by the Self Node Remediation Operator. However, when you try to create a new CR for the Self Node Remediation Operator, the following message is displayed in the logs:

```text
controllers.SelfNodeRemediationConfig
ignoring selfnoderemediationconfig CRs that are not named 'self-node-remediation-config'
or not in the namespace of the operator:
'openshift-operators' {"selfnoderemediationconfig":
"openshift-operators/selfnoderemediationconfig-copy"}
```

:::


## Understanding the Self Node Remediation Template configuration {id="understanding-self-node-remediation-remediation-template-config_{{ context }}"}

The Self Node Remediation Operator also creates the `SelfNodeRemediationTemplate` Custom Resource Definition (CRD). This CRD defines the remediation strategy for the nodes. The following remediation strategies are available:


`ResourceDeletion`
:   This remediation strategy removes the pods and associated volume attachments on the node rather than the node object. This strategy helps to recover workloads faster. `ResourceDeletion` is the default remediation strategy.


`NodeDeletion`
:   This remediation strategy is deprecated and will be removed in a future release. In the current release, the `ResourceDeletion` strategy is used even if the `NodeDeletion` strategy is selected.

The Self Node Remediation Operator creates the `SelfNodeRemediationTemplate` CR for the strategy `self-node-remediation-resource-deletion-template`, which the `ResourceDeletion` remediation strategy uses.

The `SelfNodeRemediationTemplate` CR resembles the following YAML file:

```yaml
apiVersion: self-node-remediation.medik8s.io/v1alpha1
kind: SelfNodeRemediationTemplate
metadata:
  creationTimestamp: "2022-03-02T08:02:40Z"
  name: self-node-remediation-<remediation_object>-deletion-template (1)
  namespace: openshift-operators
spec:
  template:
    spec:
      remediationStrategy: <remediation_strategy>  (2)
```
1.  Specifies the type of remediation template based on the remediation strategy. Replace `<remediation_object>` with either `resource` or `node`; for example, `self-node-remediation-resource-deletion-template`.
1.  Specifies the remediation strategy. The remediation strategy is `ResourceDeletion`.