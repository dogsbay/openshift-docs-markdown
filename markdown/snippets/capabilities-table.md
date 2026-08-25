{%- set _mod_docs_content_type = "SNIPPET" %}

The following table describes the `baselineCapabilitySet` values.

***Cluster capabilities `baselineCapabilitySet` values description***

<table>
<thead>
<tr>
  <th>Value</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>vCurrent</code></td>
  <td>Specify this option when you want to automatically add new, default capabilities that are introduced in new releases.</td>
</tr>
<tr>
  <td><code>v4.11</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.11. By specifying <code>v4.11</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.11 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, and <code>openshift-samples</code>.</td>
</tr>
<tr>
  <td><code>v4.12</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.12. By specifying <code>v4.12</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.12 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, and <code>CSISnapshot</code>.</td>
</tr>
<tr>
  <td><code>v4.13</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.13. By specifying <code>v4.13</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.13 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, <code>CSISnapshot</code>, and <code>NodeTuning</code>.</td>
</tr>
<tr>
  <td><code>v4.14</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.14. By specifying <code>v4.14</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.14 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, <code>CSISnapshot</code>, <code>NodeTuning</code>, <code>ImageRegistry</code>, <code>Build</code>, and <code>DeploymentConfig</code>.</td>
</tr>
<tr>
  <td><code>v4.15</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.15. By specifying <code>v4.15</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.15 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>OperatorLifecycleManager</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, <code>CSISnapshot</code>, <code>NodeTuning</code>, <code>ImageRegistry</code>, <code>Build</code>, <code>CloudCredential</code>, and <code>DeploymentConfig</code>.</td>
</tr>
<tr>
  <td><code>v4.16</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.16. By specifying <code>v4.16</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.16 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>OperatorLifecycleManager</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, <code>CSISnapshot</code>, <code>NodeTuning</code>, <code>ImageRegistry</code>, <code>Build</code>, <code>CloudCredential</code>, <code>DeploymentConfig</code>, and <code>CloudControllerManager</code>.</td>
</tr>
<tr>
  <td><code>v4.17</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.17. By specifying <code>v4.17</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.17 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>OperatorLifecycleManager</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, <code>CSISnapshot</code>, <code>NodeTuning</code>, <code>ImageRegistry</code>, <code>Build</code>, <code>CloudCredential</code>, <code>DeploymentConfig</code>, and <code>CloudControllerManager</code>.</td>
</tr>
<tr>
  <td><code>v4.18</code></td>
  <td>Specify this option when you want to enable the default capabilities for {{ product_title }} 4.18. By specifying <code>v4.18</code>, capabilities that are introduced in newer versions of {{ product_title }} are not enabled. The default capabilities in {{ product_title }} 4.18 are <code>baremetal</code>, <code>MachineAPI</code>, <code>marketplace</code>, <code>OperatorLifecycleManager</code>, <code>OperatorLifecycleManagerV1</code>, <code>openshift-samples</code>, <code>Console</code>, <code>Insights</code>, <code>Storage</code>, <code>CSISnapshot</code>, <code>NodeTuning</code>, <code>ImageRegistry</code>, <code>Build</code>, <code>CloudCredential</code>, <code>DeploymentConfig</code>, and <code>CloudControllerManager</code>.</td>
</tr>
<tr>
  <td><code>None</code></td>
  <td>Specify when the other sets are too large, and you do not need any capabilities or want to fine-tune via <code>additionalEnabledCapabilities</code>.</td>
</tr>
</tbody>
</table>