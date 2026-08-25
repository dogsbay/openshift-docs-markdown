{%- set _mod_docs_content_type = "REFERENCE" %}
# Role-based access control {id="olm-operatorgroups-rbac_{{ context }}"}

When an Operator group is created, three cluster roles are generated. When the cluster roles are generated, they are automatically suffixed with a hash value to ensure that each cluster role is unique. {._abstract}

Each Operator group contains a single aggregation rule with a cluster role selector set to match a label, as shown in the following table:

| Cluster role | Label to match |
| --- | --- |
| `olm.og.<operatorgroup_name>-admin-<hash_value>` | `olm.opgroup.permissions/aggregate-to-admin: <operatorgroup_name>` |
| `olm.og.<operatorgroup_name>-edit-<hash_value>` | `olm.opgroup.permissions/aggregate-to-edit: <operatorgroup_name>` |
| `olm.og.<operatorgroup_name>-view-<hash_value>` | `olm.opgroup.permissions/aggregate-to-view: <operatorgroup_name>` |


:::note

To use the cluster role of an Operator group to assign role-based access control (RBAC) to a resource, get the full name of cluster role and hash value by running the following command:

```terminal
$ oc get clusterroles | grep <operatorgroup_name>
```

Because the hash value is generated when the Operator group is created, you must create the Operator group before you can look up the complete name of the cluster role.

:::


The following RBAC resources are generated when a CSV becomes an active member of an Operator group, as long as the CSV is watching all namespaces with the `AllNamespaces` install mode and is not in a failed state with reason `InterOperatorGroupOwnerConflict`:

*   Cluster roles for each API resource from a CRD
*   Cluster roles for each API resource from an API service
*   Additional roles and role bindings

<a name="olm-resources-per-api-resource-crd_{{ context }}"></a>

**Cluster roles generated for each API resource from a CRD**

<table>
<thead>
<tr>
  <th>Cluster role</th>
  <th>Settings</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-admin</code></td>
  <td>Verbs on <code>&lt;kind&gt;</code>:<br><br><ul><li><code>*</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-admin: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-admin: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-edit</code></td>
  <td>Verbs on <code>&lt;kind&gt;</code>:<br><br><ul><li><code>create</code></li><li><code>update</code></li><li><code>patch</code></li><li><code>delete</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-edit: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-edit: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-view</code></td>
  <td>Verbs on <code>&lt;kind&gt;</code>:<br><br><ul><li><code>get</code></li><li><code>list</code></li><li><code>watch</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-view: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-view: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-view-crdview</code></td>
  <td>Verbs on <code>apiextensions.k8s.io</code> <code>customresourcedefinitions</code> <code>&lt;crd-name&gt;</code>:<br><br><ul><li><code>get</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-view: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-view: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
</tbody>
</table>

<a name="olm-resources-per-api-resource-api_{{ context }}"></a>

**Cluster roles generated for each API resource from an API service**

<table>
<thead>
<tr>
  <th>Cluster role</th>
  <th>Settings</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-admin</code></td>
  <td>Verbs on <code>&lt;kind&gt;</code>:<br><br><ul><li><code>*</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-admin: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-admin: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-edit</code></td>
  <td>Verbs on <code>&lt;kind&gt;</code>:<br><br><ul><li><code>create</code></li><li><code>update</code></li><li><code>patch</code></li><li><code>delete</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-edit: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-edit: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
<tr>
  <td><code>&lt;kind&gt;.&lt;group&gt;-&lt;version&gt;-view</code></td>
  <td>Verbs on <code>&lt;kind&gt;</code>:<br><br><ul><li><code>get</code></li><li><code>list</code></li><li><code>watch</code></li></ul>Aggregation labels:<br><br><ul><li><code>rbac.authorization.k8s.io/aggregate-to-view: true</code></li><li><code>olm.opgroup.permissions/aggregate-to-view: &lt;operatorgroup_name&gt;</code></li></ul></td>
</tr>
</tbody>
</table>

## Additional roles and role bindings {id="olm-resources-additional-roles-rolebindings_{{ context }}"}

*   If the CSV defines exactly one target namespace that contains `*`, then a cluster role and corresponding cluster role binding are generated for each permission defined in the `permissions` field of the CSV. All resources generated are given the `olm.owner: <csv_name>` and `olm.owner.namespace: <csv_namespace>` labels.
*   If the CSV does _not_ define exactly one target namespace that contains `*`, then all roles and role bindings in the Operator namespace with the `olm.owner: <csv_name>` and `olm.owner.namespace: <csv_namespace>` labels are copied into the target namespace.