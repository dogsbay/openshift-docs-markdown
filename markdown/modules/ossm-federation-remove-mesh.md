# Removing a mesh from the federated mesh {id="ossm-federation-remove-mesh_{{ context }}"}

If you need to remove a mesh from the federation, you can do so.

1.  Edit the removed mesh’s `ServiceMeshControlPlane` resource to remove all federation ingress gateways for peer meshes.
1.  For each mesh peer that the removed mesh has been federated with:
    1.  Remove the `ServiceMeshPeer` resource that links the two meshes.
    1.  Edit the peer mesh’s `ServiceMeshControlPlane` resource to remove the egress gateway that serves the removed mesh.