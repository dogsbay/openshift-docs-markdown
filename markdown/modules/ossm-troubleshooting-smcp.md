# Troubleshooting the Service Mesh control plane {id="ossm-troubleshooting-smcp_{{ context }}"}

If you are experiencing issues while deploying the Service Mesh control plane,

*   Ensure that the `ServiceMeshControlPlane` resource is installed in a project that is separate from your services and Operators. This documentation uses the `istio-system` project as an example, but you can deploy your control plane in any project as long as it is separate from the project that contains your Operators and services.
*   Ensure that the `ServiceMeshControlPlane` and `Jaeger` custom resources are deployed in the same project. For example, use the `istio-system` project for both.