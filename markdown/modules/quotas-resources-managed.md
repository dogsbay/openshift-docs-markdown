{%- set _mod_docs_content_type = "REFERENCE" %}
# Resources managed by quotas {id="quotas-resources-managed_{{ context }}"}

Review the specific compute resources, storage resources, and object counts that you can manage with a project quota. {._abstract}


:::note

A pod is in a terminal state if `status.phase in (Failed, Succeeded)` is true.

:::


**Compute resources managed by quota**

<table>
<thead>
<tr>
  <th>Resource Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>cpu</code></td>
  <td>The sum of CPU requests across all pods in a non-terminal state cannot exceed this value. <code>cpu</code> and <code>requests.cpu</code> are the same value and can be used interchangeably.</td>
</tr>
<tr>
  <td><code>memory</code></td>
  <td>The sum of memory requests across all pods in a non-terminal state cannot exceed this value. <code>memory</code> and <code>requests.memory</code> are the same value and can be used interchangeably.</td>
</tr>
<tr>
  <td><code>requests.cpu</code></td>
  <td>The sum of CPU requests across all pods in a non-terminal state cannot exceed this value. <code>cpu</code> and <code>requests.cpu</code> are the same value and can be used interchangeably.</td>
</tr>
<tr>
  <td><code>requests.memory</code></td>
  <td>The sum of memory requests across all pods in a non-terminal state cannot exceed this value. <code>memory</code> and <code>requests.memory</code> are the same value and can be used interchangeably.</td>
</tr>
<tr>
  <td><code>limits.cpu</code></td>
  <td>The sum of CPU limits across all pods in a non-terminal state cannot exceed this value.</td>
</tr>
<tr>
  <td><code>limits.memory</code></td>
  <td>The sum of memory limits across all pods in a non-terminal state cannot exceed this value.</td>
</tr>
</tbody>
</table>

**Storage resources managed by quota**

<table>
<thead>
<tr>
  <th>Resource Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>requests.storage</code></td>
  <td>The sum of storage requests across all persistent volume claims in any state cannot exceed this value.</td>
</tr>
<tr>
  <td><code>persistentvolumeclaims</code></td>
  <td>The total number of persistent volume claims that can exist in the project.</td>
</tr>
<tr>
  <td><code>&lt;storage-class-name&gt;.storageclass.storage.k8s.io/requests.storage</code></td>
  <td>The sum of storage requests across all persistent volume claims in any state that have a matching storage class, cannot exceed this value.</td>
</tr>
<tr>
  <td><code>&lt;storage-class-name&gt;.storageclass.storage.k8s.io/persistentvolumeclaims</code></td>
  <td>The total number of persistent volume claims with a matching storage class that can exist in the project.</td>
</tr>
<tr>
  <td><code>ephemeral-storage</code></td>
  <td>The sum of local ephemeral storage requests across all pods in a non-terminal state cannot exceed this value. <code>ephemeral-storage</code> and <code>requests.ephemeral-storage</code> are the same value and can be used interchangeably.</td>
</tr>
<tr>
  <td><code>requests.ephemeral-storage</code></td>
  <td>The sum of ephemeral storage requests across all pods in a non-terminal state cannot exceed this value. <code>ephemeral-storage</code> and <code>requests.ephemeral-storage</code> are the same value and can be used interchangeably.</td>
</tr>
<tr>
  <td><code>limits.ephemeral-storage</code></td>
  <td>The sum of ephemeral storage limits across all pods in a non-terminal state cannot exceed this value.</td>
</tr>
</tbody>
</table>

<a name="quotas-object-counts-managed_{{ context }}"></a>

**Object counts managed by quota**

<table>
<thead>
<tr>
  <th>Resource Name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>pods</code></td>
  <td>The total number of pods in a non-terminal state that can exist in the project.</td>
</tr>
<tr>
  <td><code>replicationcontrollers</code></td>
  <td>The total number of ReplicationControllers that can exist in the project.</td>
</tr>
<tr>
  <td><code>resourcequotas</code></td>
  <td>The total number of resource quotas that can exist in the project.</td>
</tr>
<tr>
  <td><code>services</code></td>
  <td>The total number of services that can exist in the project.</td>
</tr>
<tr>
  <td><code>services.loadbalancers</code></td>
  <td>The total number of services of type <code>LoadBalancer</code> that can exist in the project.</td>
</tr>
<tr>
  <td><code>services.nodeports</code></td>
  <td>The total number of services of type <code>NodePort</code> that can exist in the project.</td>
</tr>
<tr>
  <td><code>secrets</code></td>
  <td>The total number of secrets that can exist in the project.</td>
</tr>
<tr>
  <td><code>configmaps</code></td>
  <td>The total number of <code>ConfigMap</code> objects that can exist in the project.</td>
</tr>
<tr>
  <td><code>persistentvolumeclaims</code></td>
  <td>The total number of persistent volume claims that can exist in the project.</td>
</tr>
<tr>
  <td><code>openshift.io/imagestreams</code></td>
  <td>The total number of imagestreams that can exist in the project.</td>
</tr>
</tbody>
</table>