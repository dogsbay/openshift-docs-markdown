{%- set _mod_docs_content_type = "REFERENCE" %}
# Resources managed by quota {id="admin-quota-overview_{{ context }}"}

To limit aggregate resource consumption per project, define a `ResourceQuota` object. By using this object, you can restrict the number of created objects by type. You can also restrict the total amount of compute resources and storage consumed within the project. {._abstract}

The following tables describe the set of compute resources and object types that a quota might manage.


:::note

A pod is in a terminal state if `status.phase` is `Failed` or `Succeeded`.

:::


***Compute resources managed by quota***

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
  <td><code>ephemeral-storage</code></td>
  <td>The sum of local ephemeral storage requests across all pods in a non-terminal state cannot exceed this value. <code>ephemeral-storage</code> and<code>requests.ephemeral-storage</code> are the same value and can be used interchangeably. This resource is available only if you enabled the ephemeral storage technology preview. This feature is disabled by default.</td>
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
  <td><code>requests.ephemeral-storage</code></td>
  <td>The sum of ephemeral storage requests across all pods in a non-terminal state cannot exceed this value. <code>ephemeral-storage</code> and<code>requests.ephemeral-storage</code> are the same value and can be used interchangeably. This resource is available only if you enabled the ephemeral storage technology preview. This feature is disabled by default.</td>
</tr>
<tr>
  <td><code>limits.cpu</code></td>
  <td>The sum of CPU limits across all pods in a non-terminal state cannot exceed this value.</td>
</tr>
<tr>
  <td><code>limits.memory</code></td>
  <td>The sum of memory limits across all pods in a non-terminal state cannot exceed this value.</td>
</tr>
<tr>
  <td><code>limits.ephemeral-storage</code></td>
  <td>The sum of ephemeral storage limits across all pods in a non-terminal state cannot exceed this value. This resource is available only if you enabled the ephemeral storage technology preview. This feature is disabled by default.</td>
</tr>
</tbody>
</table>

***Storage resources managed by quota***

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
  <td><code><storage-class-name>.storageclass.storage.k8s.io/requests.storage</code></td>
  <td>The sum of storage requests across all persistent volume claims in any state that have a matching storage class, cannot exceed this value.</td>
</tr>
<tr>
  <td><code><storage-class-name>.storageclass.storage.k8s.io/persistentvolumeclaims</code></td>
  <td>The total number of persistent volume claims with a matching storage class that can exist in the project.</td>
</tr>
</tbody>
</table>

***Object counts managed by quota***

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
  <td>The total number of replication controllers that can exist in the project.</td>
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
  <td>The total number of image streams that can exist in the project.</td>
</tr>
</tbody>
</table>

You can configure an object count quota for these standard namespaced resource types using the `count/<resource>.<group>` syntax.

```terminal
$ oc create quota <name> --hard=count/<resource>.<group>=<quota>
```

where:


`<resource>`
:   Specifies the name of the resource. 


`<group>`
:   Specifies the API group, if applicable. You can use the `kubectl api-resources` command for a list of resources and their associated API groups.