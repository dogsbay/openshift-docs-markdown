{%- set _mod_docs_content_type = "CONCEPT" %}
# Joining a federated mesh {id="ossm-federation-joining_{{ context }}"}

You declare the federation between two meshes by creating a `ServiceMeshPeer` resource. The `ServiceMeshPeer` resource defines the federation between two meshes, and you use it to configure discovery for the peer mesh, access to the peer mesh, and certificates used to validate the other mesh’s clients.

![Service Mesh federated mesh peers illustration](/images/ossm-federated-mesh.png)

Meshes are federated on a one-to-one basis, so each pair of peers requires a pair of `ServiceMeshPeer` resources specifying the federation connection to the other service mesh. For example, federating two meshes named `red` and `green` would require two `ServiceMeshPeer` files.

1.  On red-mesh-system, create a `ServiceMeshPeer` for the green mesh.
1.  On green-mesh-system, create a `ServiceMeshPeer` for the red mesh.

Federating three meshes named `red`, `blue`, and `green` would require six `ServiceMeshPeer` files.

1.  On red-mesh-system, create a `ServiceMeshPeer` for the green mesh.
1.  On red-mesh-system, create a `ServiceMeshPeer` for the blue mesh.
1.  On green-mesh-system, create a `ServiceMeshPeer` for the red mesh.
1.  On green-mesh-system, create a `ServiceMeshPeer` for the blue mesh.
1.  On blue-mesh-system, create a `ServiceMeshPeer` for the red mesh.
1.  On blue-mesh-system, create a `ServiceMeshPeer` for the green mesh.

Configuration in the `ServiceMeshPeer` resource includes the following:

*   The address of the other mesh’s ingress gateway, which is used for discovery and service requests.
*   The names of the local ingress and egress gateways that is used for interactions with the specified peer mesh.
*   The client ID used by the other mesh when sending requests to this mesh.
*   The trust domain used by the other mesh.
*   The name of a `ConfigMap` containing a root certificate that is used to validate client certificates in the trust domain used by the other mesh.

In the following example, the administrator for the `red-mesh` is configuring federation with the `green-mesh`.

```yaml title="Example ServiceMeshPeer resource for red-mesh"
kind: ServiceMeshPeer
apiVersion: federation.maistra.io/v1
metadata:
  name: green-mesh
  namespace: red-mesh-system
spec:
  remote:
    addresses:
    - ingress-red-mesh.green-mesh-system.apps.domain.com
  gateways:
    ingress:
      name: ingress-green-mesh
    egress:
      name: egress-green-mesh
  security:
    trustDomain: green-mesh.local
    clientID: green-mesh.local/ns/green-mesh-system/sa/egress-red-mesh-service-account
    certificateChain:
      kind: ConfigMap
      name: green-mesh-ca-root-cert
```

**ServiceMeshPeer configuration parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
</tr>
<tr>
  <td>metadata: name:</td>
  <td>Name of the peer mesh that this resource is configuring federation with.</td>
  <td>String</td>
</tr>
<tr>
  <td>metadata: namespace:</td>
  <td>System namespace for this mesh, that is, where the {{ SMProductShortName }} control plane is installed.</td>
  <td>String</td>
</tr>
<tr>
  <td>spec: remote: addresses:</td>
  <td>List of public addresses of the peer meshes' ingress gateways that are servicing requests from this mesh.</td>
  <td></td>
</tr>
<tr>
  <td>spec: remote: discoveryPort:</td>
  <td>The port on which the addresses are handling discovery requests.</td>
  <td>Defaults to 8188</td>
</tr>
<tr>
  <td>spec: remote: servicePort:</td>
  <td>The port on which the addresses are handling service requests.</td>
  <td>Defaults to 15443</td>
</tr>
<tr>
  <td>spec: gateways: ingress: name:</td>
  <td>Name of the ingress on this mesh that is servicing requests received from the peer mesh. For example, <code>ingress-green-mesh</code>.</td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: egress: name:</td>
  <td>Name of the egress on this mesh that is servicing requests sent to the peer mesh. For example, <code>egress-green-mesh</code>.</td>
  <td></td>
</tr>
<tr>
  <td>spec: security: trustDomain:</td>
  <td>The trust domain used by the peer mesh.</td>
  <td><peerMeshName>.local</td>
</tr>
<tr>
  <td>spec: security: clientID:</td>
  <td>The client ID used by the peer mesh when calling into this mesh.</td>
  <td><peerMeshTrustDomain>/ns/<peerMeshSystem>/sa/<peerMeshEgressGatewayName>-service-account</td>
</tr>
<tr>
  <td>spec: security: certificateChain: kind: ConfigMap name:</td>
  <td>The kind (for example, ConfigMap) and name of a resource containing the root certificate used to validate the client and server certificate(s) presented to this mesh by the peer mesh. The key of the config map entry containing the certificate should be <code>root-cert.pem</code>.</td>
  <td>kind: ConfigMap name: <peerMesh>-ca-root-cert</td>
</tr>
</tbody>
</table>