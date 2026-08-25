{%- set _mod_docs_content_type = "REFERENCE" %}
# RBAC roles for storage features in {{ VirtProductName }} {id="virt-storage-rbac-roles_{{ context }}"}

Cluster-wide and namespaced RBAC roles enable the Containerized Data Importer (CDI) to manage storage resources, data volumes, and virtual machine disk operations. {._abstract}

## Cluster-wide RBAC roles {id="cluster-wide-rbac-roles-cdi"}

**Aggregated cluster roles for the `cdi.kubevirt.io` API group**

<table>
<thead>
<tr>
  <th>CDI cluster role</th>
  <th>Resources</th>
  <th>Verbs</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="2"><code>cdi.kubevirt.io:admin</code></td>
  <td><code>datavolumes</code>, <code>uploadtokenrequests</code></td>
  <td><code>*</code> (all)</td>
</tr>
<tr>
  <td><code>datavolumes/source</code></td>
  <td><code>create</code></td>
</tr>
<tr>
  <td rowspan="2"><code>cdi.kubevirt.io:edit</code></td>
  <td><code>datavolumes</code>, <code>uploadtokenrequests</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>datavolumes/source</code></td>
  <td><code>create</code></td>
</tr>
<tr>
  <td rowspan="2"><code>cdi.kubevirt.io:view</code></td>
  <td><code>cdiconfigs</code>, <code>dataimportcrons</code>, <code>datasources</code>, <code>datavolumes</code>, <code>objecttransfers</code>, <code>storageprofiles</code>, <code>volumeimportsources</code>, <code>volumeuploadsources</code>, <code>volumeclonesources</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>datavolumes/source</code></td>
  <td><code>create</code></td>
</tr>
<tr>
  <td><code>cdi.kubevirt.io:config-reader</code></td>
  <td><code>cdiconfigs</code>, <code>storageprofiles</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
</tbody>
</table>

**Cluster-wide roles for the `cdi-operator` service account**

<table>
<thead>
<tr>
  <th>API group</th>
  <th>Resources</th>
  <th>Verbs</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>rbac.authorization.k8s.io</code></td>
  <td><code>clusterrolebindings</code>, <code>clusterroles</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>security.openshift.io</code></td>
  <td><code>securitycontextconstraints</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>update</code>, <code>create</code></td>
</tr>
<tr>
  <td><code>apiextensions.k8s.io</code></td>
  <td><code>customresourcedefinitions</code>, <code>customresourcedefinitions/status</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>cdi.kubevirt.io</code></td>
  <td><code>*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>upload.cdi.kubevirt.io</code></td>
  <td><code>*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>admissionregistration.k8s.io</code></td>
  <td><code>validatingwebhookconfigurations</code>, <code>mutatingwebhookconfigurations</code></td>
  <td><code>create</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>admissionregistration.k8s.io</code></td>
  <td><code>validatingwebhookconfigurations</code> Allow list: <code>cdi-api-dataimportcron-validate, cdi-api-populator-validate, cdi-api-datavolume-validate, cdi-api-validate, objecttransfer-api-validate</code></td>
  <td><code>get</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>admissionregistration.k8s.io</code></td>
  <td><code>mutatingwebhookconfigurations</code> Allow list: <code>cdi-api-datavolume-mutate</code></td>
  <td><code>get</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>apiregistration.k8s.io</code></td>
  <td><code>apiservices</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
</tbody>
</table>

**Cluster-wide roles for the `cdi-controller` service account**

<table>
<thead>
<tr>
  <th>API group</th>
  <th>Resources</th>
  <th>Verbs</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>events</code></td>
  <td><code>create</code>, <code>patch</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>persistentvolumeclaims</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code>, <code>deletecollection</code>, <code>patch</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>persistentvolumes</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>update</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>persistentvolumeclaims/finalizers</code>, <code>pods/finalizers</code></td>
  <td><code>update</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>pods</code>, <code>services</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>configmaps</code></td>
  <td><code>get</code>, <code>create</code></td>
</tr>
<tr>
  <td><code>storage.k8s.io</code></td>
  <td><code>storageclasses</code>, <code>csidrivers</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>config.openshift.io</code></td>
  <td><code>proxies</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>cdi.kubevirt.io</code></td>
  <td><code>*</code></td>
  <td><code>*</code></td>
</tr>
<tr>
  <td><code>snapshot.storage.k8s.io</code></td>
  <td><code>volumesnapshots</code>, <code>volumesnapshotclasses</code>, <code>volumesnapshotcontents</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>snapshot.storage.k8s.io</code></td>
  <td><code>volumesnapshots</code></td>
  <td><code>update</code>, <code>deletecollection</code></td>
</tr>
<tr>
  <td><code>apiextensions.k8s.io</code></td>
  <td><code>customresourcedefinitions</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>scheduling.k8s.io</code></td>
  <td><code>priorityclasses</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>image.openshift.io</code></td>
  <td><code>imagestreams</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>secrets</code></td>
  <td><code>create</code></td>
</tr>
<tr>
  <td><code>kubevirt.io</code></td>
  <td><code>virtualmachines/finalizers</code></td>
  <td><code>update</code></td>
</tr>
</tbody>
</table>

## Namespaced RBAC roles {id="namespaced-rbac-roles-cdi"}

**Namespaced roles for the `cdi-operator` service account**

<table>
<thead>
<tr>
  <th>API group</th>
  <th>Resources</th>
  <th>Verbs</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>rbac.authorization.k8s.io</code></td>
  <td><code>rolebindings</code>, <code>roles</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>serviceaccounts</code>, <code>configmaps</code>, <code>events</code>, <code>secrets</code>, <code>services</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>patch</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>apps</code></td>
  <td><code>deployments</code>, <code>deployments/finalizers</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>route.openshift.io</code></td>
  <td><code>routes</code>, <code>routes/custom-host</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code></td>
</tr>
<tr>
  <td><code>config.openshift.io</code></td>
  <td><code>proxies</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>monitoring.coreos.com</code></td>
  <td><code>servicemonitors</code>, <code>prometheusrules</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>delete</code>, <code>update</code>, <code>patch</code></td>
</tr>
<tr>
  <td><code>coordination.k8s.io</code></td>
  <td><code>leases</code></td>
  <td><code>get</code>, <code>create</code>, <code>update</code></td>
</tr>
</tbody>
</table>

**Namespaced roles for the `cdi-controller` service account**

<table>
<thead>
<tr>
  <th>API group</th>
  <th>Resources</th>
  <th>Verbs</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>configmaps</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>""</code> (core)</td>
  <td><code>secrets</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>batch</code></td>
  <td><code>cronjobs</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code>, <code>create</code>, <code>update</code>, <code>delete</code></td>
</tr>
<tr>
  <td><code>batch</code></td>
  <td><code>jobs</code></td>
  <td><code>create</code>, <code>delete</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>coordination.k8s.io</code></td>
  <td><code>leases</code></td>
  <td><code>get</code>, <code>create</code>, <code>update</code></td>
</tr>
<tr>
  <td><code>networking.k8s.io</code></td>
  <td><code>ingresses</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
<tr>
  <td><code>route.openshift.io</code></td>
  <td><code>routes</code></td>
  <td><code>get</code>, <code>list</code>, <code>watch</code></td>
</tr>
</tbody>
</table>