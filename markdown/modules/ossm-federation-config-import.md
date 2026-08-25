# Importing a service into a federated mesh {id="ossm-federation-config-import_{{ context }}"}

Importing services lets you explicitly specify which services exported from another mesh should be accessible within your service mesh.

![Service Mesh federation importing service illustration](/_assets/images/ossm-federation-import-service.png)

You use an `ImportedServiceSet` resource to select services for import. Only services exported by a mesh peer and explicitly imported are available to the mesh. Services that you do not explicitly import are not made available within the mesh.

*   You can select services by namespace or name.
*   You can use wildcards to select services, for example, to import all the services that were exported to the namespace.
*   You can select services for export using a label selector, which may be global to the mesh, or scoped to a specific member namespace.
*   You can import services using an alias. For example, you can import the `custom-ns/bar` service as `other-mesh/bar`.
*   You can specify a custom domain suffix, which will be appended to the `name.namespace` of an imported service for its fully qualified domain name; for example, `bar.other-mesh.imported.local`.

The following example is for the `green-mesh` importing a service that was exported by `red-mesh`.

```yaml title="Example ImportedServiceSet"
kind: ImportedServiceSet
apiVersion: federation.maistra.io/v1
metadata:
  name: red-mesh #name of mesh that exported the service
  namespace: green-mesh-system #mesh namespace that service is being imported into
spec:
  importRules: # first matching rule is used
  # import ratings.bookinfo as ratings.bookinfo
  - type: NameSelector
    importAsLocal: false
    nameSelector:
      namespace: bookinfo
      name: ratings
      alias:
        # service will be imported as ratings.bookinfo.svc.red-mesh-imports.local
        namespace: bookinfo
        name: ratings
```

**ImportedServiceSet parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
</tr>
<tr>
  <td>metadata: name:</td>
  <td>Name of the ServiceMeshPeer that exported the service to the federated mesh.</td>
  <td></td>
</tr>
<tr>
  <td>metadata: namespace:</td>
  <td>Name of the namespace containing the ServiceMeshPeer resource (the mesh system namespace).</td>
  <td></td>
</tr>
<tr>
  <td>spec: importRules: - type:</td>
  <td>Type of rule that will govern the import for the service. The first matching rule found for the service will be used for the import.</td>
  <td><code>NameSelector</code></td>
</tr>
<tr>
  <td>spec: importRules: - type: NameSelector nameSelector: namespace: name:</td>
  <td>To create a <code>NameSelector</code> rule, specify the <code>namespace</code> and the <code>name</code> of the exported service.</td>
  <td></td>
</tr>
<tr>
  <td>spec: importRules: - type: NameSelector importAsLocal:</td>
  <td>Set to <code>true</code> to aggregate remote endpoint with local services. When <code>true</code> services are imported as <code>&lt;name&gt;.&lt;namespace&gt;.svc.cluster.local</code>. When <code>true</code>, an alias is required. When <code>false</code>, no alias is required.</td>
  <td><code>true</code>/<code>false</code></td>
</tr>
<tr>
  <td>spec: importRules: - type: NameSelector nameSelector: namespace: name: alias: namespace: name:</td>
  <td>To create a <code>NameSelector</code> rule that uses an alias for the service, after specifying the <code>namespace</code> and <code>name</code> for the service, then specify the alias for the <code>namespace</code> and the alias to be used for <code>name</code> of the service.</td>
  <td></td>
</tr>
</tbody>
</table>

```yaml title="Import the &quot;bookinfo/ratings&quot; service from the red-mesh into blue-mesh"
kind: ImportedServiceSet
apiVersion: federation.maistra.io/v1
metadata:
  name: red-mesh
  namespace: blue-mesh-system
spec:
  importRules:
  - type: NameSelector
    importAsLocal: false
    nameSelector:
      namespace: bookinfo
      name: ratings
```

```yaml title="Import all services from the red-mesh’s west-data-center namespace into the green-mesh. These services will be accessible as &lt;name>.west-data-center.svc.red-mesh-imports.local"
kind: ImportedServiceSet
apiVersion: federation.maistra.io/v1
metadata:
  name: red-mesh
  namespace: green-mesh-system
spec:
  importRules:
  - type: NameSelector
    importAsLocal: false
    nameSelector:
      namespace: west-data-center
      name: "*"
```