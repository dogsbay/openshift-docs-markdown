{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparing {{ hcp_title_first }} and {{ rosa_classic_title }} {id="rosa-hcp-classic-comparison_{{ context }}"}

**{{ hcp_title_first }} and {{ rosa_classic_title }} architectures comparison table**

<table>
<thead>
<tr>
  <th>&#160; +</th>
  <th><strong>Hosted Control Plane (HCP)</strong></th>
  <th><strong>Classic</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td><strong>Control plane hosting</strong></td>
  <td>Control plane components, such as the API server etcd database, are hosted in a Red&#160;Hat-owned AWS account.</td>
  <td>Control plane components, such as the API server etcd database, are hosted in a customer-owned AWS account.</td>
</tr>
<tr>
  <td><strong>Virtual Private Cloud (VPC)</strong></td>
  <td>Worker nodes communicate with the control plane over <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html">AWS PrivateLink</a>.</td>
  <td>Worker nodes and control plane nodes are deployed in the customer's VPC.</td>
</tr>
<tr>
  <td><strong>Multi-zone deployment</strong></td>
  <td>The control plane is always deployed across multiple availability zones (AZs).</td>
  <td>The control plane can be deployed within a single AZ or across multiple AZs.</td>
</tr>
<tr>
  <td><strong>Machine pools</strong></td>
  <td>Each machine pool is deployed in a single AZ (private subnet).</td>
  <td>Machine pools can be deployed in single AZ or across multiple AZs.</td>
</tr>
<tr>
  <td><strong>Infrastructure nodes</strong></td>
  <td>Does not use any dedicated infrastructure nodes to host platform components, such as ingress and image registry.</td>
  <td>Uses 2 (single-AZ) or 3 (multi-AZ) dedicated infrastructure nodes to host platform components.</td>
</tr>
<tr>
  <td><strong>OpenShift capabilities</strong></td>
  <td>Platform monitoring, image registry, and the ingress controller are deployed in the worker nodes.</td>
  <td>Platform monitoring, image registry, and the ingress controller are deployed in the dedicated infrastructure nodes.</td>
</tr>
<tr>
  <td><strong>Cluster upgrades</strong></td>
  <td>The control plane and each machine pool can be upgraded separately.</td>
  <td>The entire cluster must be upgraded at the same time.</td>
</tr>
<tr>
  <td><strong>Minimum EC2 footprint</strong></td>
  <td>2 EC2 instances are needed to create a cluster.</td>
  <td>7 (single-AZ) or 9 (multi-AZ) EC2 instances are needed to create a cluster.</td>
</tr>
</tbody>
</table>