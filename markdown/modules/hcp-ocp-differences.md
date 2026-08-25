{%- set _mod_docs_content_type = "REFERENCE" %}
# Differences between {{ hcp }} and {{ product_title }} {id="hcp-ocp-differences_{{ context }}"}

{{ hcp_capital }} is a form factor of {{ product_title }}. Hosted clusters and the standalone {{ product_title }} clusters are configured and managed differently.  {._abstract}

See the following tables to understand the differences between {{ product_title }} and {{ hcp }}:

## Cluster creation and lifecycle {id="cluster-creation_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>You install a standalone {{ product_title }} cluster by using the <code>openshift-install</code> binary or the Assisted Installer.</td>
  <td>You install a hosted cluster by using the <code>hypershift.openshift.io</code> API resources such as <code>HostedCluster</code> and <code>NodePool</code>, on an existing {{ product_title }} cluster.</td>
</tr>
</tbody>
</table>

## Cluster configuration {id="cluster-configuration_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>You configure cluster-scoped resources such as authentication, API server, and proxy by using the <code>config.openshift.io</code> API group.</td>
  <td>You configure resources that impact the control plane in the <code>HostedCluster</code> resource.</td>
</tr>
</tbody>
</table>

## etcd encryption {id="etcd-encryption_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>You configure etcd encryption by using the <code>APIServer</code> resource with AES-GCM or AES-CBC. For more information, see "Enabling etcd encryption".</td>
  <td>You configure etcd encryption by using the <code>HostedCluster</code> resource in the <code>SecretEncryption</code> field with AES-CBC or KMS for {{ aws_full }}.</td>
</tr>
</tbody>
</table>

## Operators and control plane {id="operators-and-control-plane_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>A standalone {{ product_title }} cluster contains separate Operators for each control plane component.</td>
  <td>A hosted cluster contains a single Operator named Control Plane Operator that runs in the hosted control plane namespace on the management cluster.</td>
</tr>
<tr>
  <td>etcd uses storage that is mounted on the control plane nodes. The etcd cluster Operator manages etcd.</td>
  <td>etcd uses a persistent volume claim for storage and is managed by the Control Plane Operator.</td>
</tr>
<tr>
  <td>The Ingress Operator, network related Operators, and {{ olm_first }} run on the cluster.</td>
  <td>The Ingress Operator, network related Operators, and {{ olm_first }} run in the hosted control plane namespace on the management cluster.</td>
</tr>
<tr>
  <td>The OAuth server runs inside the cluster and is exposed through a route in the cluster.</td>
  <td>The OAuth server runs inside the control plane and is exposed through a route, node port, or load balancer on the management cluster.</td>
</tr>
</tbody>
</table>

## Updates {id="upgrades_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>The Cluster Version Operator (CVO) orchestrates the update process and monitors the <code>ClusterVersion</code> resource. Administrators and OpenShift components can interact with the CVO through the <code>ClusterVersion</code> resource. The <code>oc adm upgrade</code> command results in a change to the <code>ClusterVersion.Spec.DesiredUpdate</code> field in the <code>ClusterVersion</code> resource.</td>
  <td>The {{ hcp }} update results in a change to the <code>.spec.release.image</code> field in the <code>HostedCluster</code> and <code>NodePool</code> resources. Any changes to the <code>ClusterVersion</code> resource are ignored.</td>
</tr>
<tr>
  <td>After you update an {{ product_title }} cluster, both the control plane and compute machines are updated.</td>
  <td>After you update the hosted cluster, only the control plane is updated. You perform node pool updates separately.</td>
</tr>
</tbody>
</table>

## Machine configuration and management {id="machine-config-manage_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>The <code>MachineSets</code> resource manages machines in the <code>openshift-machine-api</code> namespace.</td>
  <td>The <code>NodePool</code> resource manages machines on the management cluster.</td>
</tr>
<tr>
  <td>A set of control plane machines are available.</td>
  <td>A set of control plane machines do not exist.</td>
</tr>
<tr>
  <td>You enable a machine health check by using the <code>MachineHealthCheck</code> resource.</td>
  <td>You enable a machine health check through the <code>.spec.management.autoRepair</code> field in the <code>NodePool</code> resource.</td>
</tr>
<tr>
  <td>You enable autoscaling by using the <code>ClusterAutoscaler</code> and <code>MachineAutoscaler</code> resources.</td>
  <td>You enable autoscaling through the <code>spec.autoScaling</code> field in the <code>NodePool</code> resource.</td>
</tr>
<tr>
  <td>Machines and machine sets are exposed in the cluster.</td>
  <td>Machines, machine sets, and machine deployments from upstream {{ cluster_capi_operator }} are used to manage machines but are not exposed to the user.</td>
</tr>
<tr>
  <td>All machine sets are upgraded automatically when you update the cluster.</td>
  <td>You update your node pools independently from the hosted cluster updates.</td>
</tr>
<tr>
  <td>Only an in-place upgrade is supported in the cluster.</td>
  <td>Both replace and in-place upgrades are supported in the hosted cluster.</td>
</tr>
<tr>
  <td>The Machine Config Operator manages configurations for machines.</td>
  <td>The Machine Config Operator does not exist in {{ hcp }}.</td>
</tr>
<tr>
  <td>You configure machine Ignition by using the <code>MachineConfig</code>, <code>KubeletConfig</code>, and <code>ContainerRuntimeConfig</code> resources that are selected from a <code>MachineConfigPool</code> selector.</td>
  <td>You configure the <code>MachineConfig</code>, <code>KubeletConfig</code>, and <code>ContainerRuntimeConfig</code> resources through the config map referenced in the <code>spec.config</code> field of the <code>NodePool</code> resource.</td>
</tr>
<tr>
  <td>The Machine Config Daemon (MCD) manages configuration changes and updates on each of the nodes.</td>
  <td>For an in-place upgrade, the node pool controller creates a run-once pod that updates a machine based on your configuration.</td>
</tr>
<tr>
  <td>You can modify the machine configuration resources such as the SR-IOV Operator.</td>
  <td>You cannot modify the machine configuration resources.</td>
</tr>
</tbody>
</table>

## Networking {id="netowrking_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>The Kube API server communicates with nodes directly, because the Kube API server and nodes exist in the same Virtual Private Cloud (VPC).</td>
  <td>The Kube API server communicates with nodes through Konnectivity. The Kube API server and nodes exist in a different Virtual Private Cloud (VPC).</td>
</tr>
<tr>
  <td>Nodes communicate with the Kube API server through the internal load balancer.</td>
  <td>Nodes communicate with the Kube API server through an external load balancer or a node port.</td>
</tr>
</tbody>
</table>

## Web console {id="web-console_{{ context }}"}

<table>
<thead>
<tr>
  <th>{{ product_title }}</th>
  <th>{{ hcp_capital }}</th>
</tr>
</thead>
<tbody>
<tr>
  <td>The web console shows the status of a control plane.</td>
  <td>The web console does not show the status of a control plane.</td>
</tr>
<tr>
  <td>You can update your cluster by using the web console.</td>
  <td>You cannot update the hosted cluster by using the web console.</td>
</tr>
<tr>
  <td>The web console displays the infrastructure resources such as machines.</td>
  <td>The web console does not display the infrastructure resources.</td>
</tr>
<tr>
  <td>You can configure machines through the <code>MachineConfig</code> resource by using the web console.</td>
  <td>You cannot configure machines by using the web console.</td>
</tr>
</tbody>
</table>