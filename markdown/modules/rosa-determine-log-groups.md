{%- set _mod_docs_content_type = "REFERENCE" %}
# Determining what log groups to use {id="rosa-determine-log-groups_{{ context }}"}

When you forward control plane logs to Amazon CloudWatch or S3, you must decide on what log groups you want to use. Because of the existing AWS pricing for these services, you can expect additional costs associated with forwarding and storing your logs in S3 and CloudWatch. When you determine what log group to use, consider these additional costs along with other factors, such as your log retention requirements. {._abstract}

For each log group, you have access to different applications, and these applications can change depending on what you choose to enable and disable with your logs.

When you forward log groups, you must specify a group or application. When you specify a group, the log forwarder collects all the applications in that group. Instead of selecting a group, you can select individual applications. When you set up your log forwarder, you must specify at least one group or application, but you do not need to specify both.

The following table lists available log groups:

**Log groups**

<table>
<thead>
<tr>
  <th>Log group name</th>
  <th>Benefit of that log group</th>
  <th>Example applications available for that log group</th>
</tr>
</thead>
<tbody>
<tr>
  <td>api</td>
  <td>Records every request made to the cluster. Supports security by detecting unauthorized access attempts.</td>
  <td><ul><li><code>audit-webhook</code></li><li><code>kube-apiserver</code></li><li><code>oauth-openshift</code></li><li><code>openshift-apiserver</code></li><li><code>openshift-oauth-apiserver</code></li><li><code>packageserver</code></li><li><code>validation-webhook</code></li></ul></td>
</tr>
<tr>
  <td>authentication</td>
  <td>Tracks login attempts and requests for tokens. Supports security by recording authenticated user information.</td>
  <td><ul><li><code>ignition-server</code></li><li><code>konnectivity-agent</code></li></ul></td>
</tr>
<tr>
  <td>controller manager</td>
  <td>Monitors the controllers that manage the state of your clusters. Clarifies differences among the different cluster states, for example, the <code>Current</code>, <code>Desired</code>, <code>Health</code>, and <code>Feature</code> state.</td>
  <td><ul><li><code>aws-ebs-csi-driver-controller</code></li><li><code>capi-provider-controller-manager</code></li><li><code>catalog-operator</code></li><li><code>cloud-controller-manager</code></li><li><code>cloud-credential-operator</code></li><li><code>cloud-network-config-controller</code></li><li><code>cluster-network-operator</code></li><li><code>cluster-node-tuning-operator</code></li><li><code>cluster-policy-controller</code></li><li><code>cluster-version-operator</code></li><li><code>control-plane-operator</code></li><li><code>control-plane-pki-operator</code></li><li><code>csi-snapshot-controller-operator</code></li><li><code>csi-snapshot-controller</code></li><li><code>dns-operator</code></li><li><code>hosted-cluster-config-operator</code></li><li><code>ingress-operator</code></li><li><code>kube-controller-manager</code></li><li><code>machine-approver</code></li><li><code>multus-admission-controller</code></li><li><code>network-node-identity</code></li><li><code>olm-operator</code></li><li><code>openshift-controller-manager</code></li><li><code>openshift-route-controller-manager</code></li><li><code>ovnkube-control-plane</code></li></ul></td>
</tr>
<tr>
  <td>scheduler</td>
  <td>Records the placement of each pod on every node. Shows why pods are in a <code>Running</code> or <code>Pending</code> state.</td>
  <td><ul><li><code>kube-scheduler</code></li></ul></td>
</tr>
<tr>
  <td>autoscaling</td>
  <td>Tracks the node provisioning and scaling decisions made by Karpenter workloads. This group records why nodes were created, deleted, or consolidated. It also helps administrators troubleshoot pod scheduling failures caused by insufficient compute resources.</td>
  <td><ul><li><code>karpenter</code></li><li><code>karpenter-operator</code></li></ul></td>
</tr>
<tr>
  <td>not applicable</td>
  <td>These applications do not belong to a defined log group. To forward their logs, set these applications in the <code>applications</code> array.</td>
  <td><ul><li><code>certified-operators-catalog</code></li><li><code>cluster-api</code></li><li><code>community-operators-catalog</code></li><li><code>etcd</code></li><li><code>private-router</code></li><li><code>redhat-marketplace-catalog</code></li><li><code>redhat-operators-catalog</code></li></ul></td>
</tr>
</tbody>
</table>