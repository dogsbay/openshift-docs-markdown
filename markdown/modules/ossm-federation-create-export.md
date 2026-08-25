{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an ExportedServiceSet {id="ossm-federation-create-export_{{ context }}"}

You create an `ExportedServiceSet` resource to explicitly declare the services that you want to be available to a mesh peer.

Services are exported as `<export-name>.<export-namespace>.svc.<ServiceMeshPeer.name>-exports.local` and will automatically route to the target service.  This is the name by which the exported service is known in the exporting mesh. When the ingress gateway receives a request destined for this name, it will be routed to the actual service being exported. For example, if a service named `ratings.red-mesh-bookinfo` is exported to `green-mesh` as `ratings.bookinfo`, the service will be exported under the name `ratings.bookinfo.svc.green-mesh-exports.local`, and traffic received by the ingress gateway for that hostname will be routed to the `ratings.red-mesh-bookinfo` service.


:::note

When you set the `importAsLocal` parameter to `true` to aggregate the remote endpoint with local services, you must use an alias for the service. When you set the parameter `false`, no alias is required.

:::


**Prerequisites**

*   The cluster and `ServiceMeshControlPlane` have been configured for mesh federation.
*   An account with the `cluster-admin` role.


:::note

You can configure services for export even if they do not exist yet. When a service that matches the value specified in the ExportedServiceSet is deployed, it will be automatically exported.

:::


**Procedure from the CLI**

Follow this procedure to create an `ExportedServiceSet` from the command line.

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. Enter the following command. Then, enter your username and password when prompted.
    ```terminal
    $ oc login --username=<NAMEOFUSER> <API token> https://<HOSTNAME>:6443
    ```
1.  Change to the project where you installed the {{ SMProductShortName }} control plane; for example, `red-mesh-system`.
    ```terminal
    $ oc project red-mesh-system
    ```
1.  Create an `ExportedServiceSet` file based on the following example where `red-mesh` is exporting services to `green-mesh`.
    ```yaml title="Example ExportedServiceSet resource from red-mesh to green-mesh"
    apiVersion: federation.maistra.io/v1
    kind: ExportedServiceSet
    metadata:
      name: green-mesh
      namespace: red-mesh-system
    spec:
      exportRules:
      - type: NameSelector
        nameSelector:
          namespace: red-mesh-bookinfo
          name: ratings
          alias:
            namespace: bookinfo
            name: red-ratings
      - type: NameSelector
        nameSelector:
          namespace: red-mesh-bookinfo
          name: reviews
    ```
1.  Run the following command to upload and create the `ExportedServiceSet` resource in the red-mesh-system namespace.
    ```terminal
    $ oc create -n <ControlPlaneNamespace> -f <ExportedServiceSet.yaml>
    ```

    For example:
    ```terminal
    $ oc create -n red-mesh-system -f export-to-green-mesh.yaml
    ```
1.  Create additional `ExportedServiceSets` as needed for each mesh peer in your federated mesh.

**Verification**

*   Run the following command to validate the services the red-mesh exports to share with green-mesh:
    ```terminal
    $ oc get exportedserviceset <PeerMeshExportedTo> -o yaml
    ```

    For example:
    ```terminal
    $ oc -n red-mesh-system get exportedserviceset green-mesh -o yaml
    ```
    ```yaml title="Example validating the services exported from the red mesh that are shared with the green mesh."
      status:
        exportedServices:
        - exportedName: red-ratings.bookinfo.svc.green-mesh-exports.local
          localService:
            hostname: ratings.red-mesh-bookinfo.svc.cluster.local
            name: ratings
            namespace: red-mesh-bookinfo
        - exportedName: reviews.red-mesh-bookinfo.svc.green-mesh-exports.local
          localService:
            hostname: reviews.red-mesh-bookinfo.svc.cluster.local
            name: reviews
            namespace: red-mesh-bookinfo
    ```

    The `status.exportedServices` array lists the services that are currently exported (these services matched the export rules in the `ExportedServiceSet object`). Each entry in the array indicates the name of the exported service and details about the local service that is exported.

    If a service that you expected to be exported is missing, confirm the Service object exists, its name or labels match the `exportRules` defined in the `ExportedServiceSet` object, and that the Service object’s namespace is configured as a member of the service mesh using the `ServiceMeshMemberRoll` or `ServiceMeshMember` object.