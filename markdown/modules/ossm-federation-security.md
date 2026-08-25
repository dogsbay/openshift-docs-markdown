# Federation security {id="ossm-federation-security_{{ context }}"}

Red Hat OpenShift Service Mesh federation takes an opinionated approach to a multi-cluster implementation of Service Mesh that assumes minimal trust between meshes. Data security is built in as part of the federation features.

*   Each mesh is considered to be a unique tenant, with a unique administration.
*   You create a unique trust domain for each mesh in the federation.
*   Traffic between the federated meshes is automatically encrypted using mutual Transport Layer Security (mTLS).
*   The Kiali graph only displays your mesh and services that you have imported. You cannot see the other mesh or services that have not been imported into your mesh.