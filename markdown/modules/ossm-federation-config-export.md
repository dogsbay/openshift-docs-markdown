# Exporting a service from a federated mesh {id="ossm-federation-config-export_{{ context }}"}

Exporting services allows a mesh to share one or more of its services with another member of the federated mesh.

![Service Mesh federation exporting service illustration](/images/ossm-federation-export-service.png)

You use an `ExportedServiceSet` resource to declare the services from one mesh that you are making available to another peer in the federated mesh. You must explicitly declare each service to be shared with a peer.

*   You can select services by namespace or name.
*   You can use wildcards to select services; for example, to export all the services in a namespace.
*   You can export services using an alias. For example, you can export the `foo/bar` service as `custom-ns/bar`.
*   You can only export services that are visible to the mesh’s system namespace. For example, a service in another namespace with a `networking.istio.io/exportTo` label set to ‘.’ would not be a candidate for export.
*   For exported services, their target services will only see traffic from the ingress gateway, not the original requestor (that is, they won’t see the client ID of either the other mesh’s egress gateway or the workload originating the request)

The following example is for services that `red-mesh` is exporting to `green-mesh`.

```yaml title="Example ExportedServiceSet resource"
kind: ExportedServiceSet
apiVersion: federation.maistra.io/v1
metadata:
  name: green-mesh
  namespace: red-mesh-system
spec:
  exportRules:
  # export ratings.mesh-x-bookinfo as ratings.bookinfo
  - type: NameSelector
    nameSelector:
      namespace: red-mesh-bookinfo
      name: red-ratings
      alias:
        namespace: bookinfo
        name: ratings
  # export any service in red-mesh-bookinfo namespace with label export-service=true
  - type: LabelSelector
    labelSelector:
      namespace: red-mesh-bookinfo
      selector:
        matchLabels:
          export-service: "true"
      aliases: # export all matching services as if they were in the bookinfo namespace
      - namespace: "*"
        name: "*"
        alias:
          namespace: bookinfo
```

**ExportedServiceSet parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
</tr>
<tr>
  <td>metadata: name:</td>
  <td>Name of the ServiceMeshPeer you are exposing this service to.</td>
  <td>Must match the <code>name</code> value for the mesh in the <code>ServiceMeshPeer</code> resource.</td>
</tr>
<tr>
  <td>metadata: namespace:</td>
  <td>Name of the project/namespace containing this resource (should be the system namespace for the mesh) .</td>
  <td></td>
</tr>
<tr>
  <td>spec: exportRules: - type:</td>
  <td>Type of rule that will govern the export for this service. The first matching rule found for the service will be used for the export.</td>
  <td><code>NameSelector</code>, <code>LabelSelector</code></td>
</tr>
<tr>
  <td>spec: exportRules: - type: NameSelector nameSelector: namespace: name:</td>
  <td>To create a <code>NameSelector</code> rule, specify the <code>namespace</code> of the service and the <code>name</code> of the service as defined in the <code>Service</code> resource.</td>
  <td></td>
</tr>
<tr>
  <td>spec: exportRules: - type: NameSelector nameSelector: alias: namespace: name:</td>
  <td>To create a <code>NameSelector</code> rule that uses an alias for the service, after specifying the <code>namespace</code> and <code>name</code> for the service, then specify the alias for the <code>namespace</code> and the alias to be used for <code>name</code> of the service.</td>
  <td></td>
</tr>
<tr>
  <td>spec: exportRules: - type: LabelSelector labelSelector: namespace: <exportingMesh> selector: matchLabels: <labelKey>: <labelValue></td>
  <td>To create a <code>LabelSelector</code> rule, specify the <code>namespace</code> of the service and specify the <code>label</code> defined in the <code>Service</code> resource. In the example above, the label is <code>export-service</code>.</td>
  <td></td>
</tr>
<tr>
  <td>spec: exportRules: - type: LabelSelector labelSelector: namespace: <exportingMesh> selector: matchLabels: <labelKey>: <labelValue> aliases: - namespace: name: alias: namespace: name:</td>
  <td>To create a <code>LabelSelector</code> rule that uses aliases for the services, after specifying the <code>selector</code>, specify the aliases to be used for <code>name</code> or <code>namespace</code> of the service. In the example above, the namespace alias is <code>bookinfo</code> for all matching services.</td>
  <td></td>
</tr>
</tbody>
</table>

```yaml title="Export services with the name &quot;ratings&quot; from all namespaces in the red-mesh to blue-mesh."
kind: ExportedServiceSet
apiVersion: federation.maistra.io/v1
metadata:
  name: blue-mesh
  namespace: red-mesh-system
spec:
  exportRules:
  - type: NameSelector
    nameSelector:
      namespace: "*"
      name: ratings
```

```yaml title="Export all services from the west-data-center namespace to green-mesh"
kind: ExportedServiceSet
apiVersion: federation.maistra.io/v1
metadata:
  name: green-mesh
  namespace: red-mesh-system
spec:
  exportRules:
  - type: NameSelector
    nameSelector:
      namespace: west-data-center
      name: "*"
```