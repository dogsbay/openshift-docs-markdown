{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an ImportedServiceSet {id="ossm-federation-create-import_{{ context }}"}

You create an `ImportedServiceSet` resource to explicitly declare the services that you want to import into your mesh.

Services are imported with the name `<exported-name>.<exported-namespace>.svc.<ServiceMeshPeer.name>.remote` which is a "hidden" service, visible only within the egress gateway namespace and is associated with the exported service’s hostname. The service will be available locally as `<export-name>.<export-namespace>.<domainSuffix>`, where `domainSuffix` is `svc.<ServiceMeshPeer.name>-imports.local` by default, unless `importAsLocal` is set to `true`, in which case `domainSuffix` is `svc.cluster.local`.  If `importAsLocal` is set to `false`, the domain suffix in the import rule will be applied.  You can treat the local import just like any other service in the mesh. It automatically routes through the egress gateway, where it is redirected to the exported service’s remote name.

**Prerequisites**

*   The cluster and `ServiceMeshControlPlane` have been configured for mesh federation.
*   An account with the `cluster-admin` role.


:::note

You can configure services for import even if they have not been exported yet. When a service that matches the value specified in the ImportedServiceSet is deployed and exported, it will be automatically imported.

:::


**Procedure**

Follow this procedure to create an `ImportedServiceSet` from the command line.

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. Enter the following command. Then, enter your username and password when prompted.
    ```terminal
    $ oc login --username=<NAMEOFUSER> <API token> https://<HOSTNAME>:6443
    ```
1.  Change to the project where you installed the {{ SMProductShortName }} control plane; for example, `green-mesh-system`.
    ```terminal
    $ oc project green-mesh-system
    ```
1.  Create an `ImportedServiceSet` file based on the following example where `green-mesh` is importing services previously exported by `red-mesh`.
    ```yaml title="Example ImportedServiceSet resource from red-mesh to green-mesh"
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
          namespace: bookinfo
          name: red-ratings
          alias:
            namespace: bookinfo
            name: ratings
    ```
1.  Run the following command to upload and create the `ImportedServiceSet` resource in the green-mesh-system namespace.
    ```terminal
    $ oc create -n <ControlPlaneNamespace> -f <ImportedServiceSet.yaml>
    ```

    For example:
    ```terminal
    $ oc create -n green-mesh-system -f import-from-red-mesh.yaml
    ```
1.  Create additional `ImportedServiceSet` resources as needed for each mesh peer in your federated mesh.

**Verification**

*   Run the following command to verify that the services were imported into `green-mesh`:
    ```terminal
    $ oc get importedserviceset <PeerMeshImportedInto> -o yaml
    ```
    ```terminal title="Example verifying that the services exported from the red mesh have been imported into the green mesh using the status section of the importedserviceset/red-mesh' object in the 'green-mesh-system namespace"
    $ oc -n green-mesh-system get importedserviceset/red-mesh -o yaml
    ```
    ```yaml
    status:
      importedServices:
      - exportedName: red-ratings.bookinfo.svc.green-mesh-exports.local
        localService:
          hostname: ratings.bookinfo.svc.red-mesh-imports.local
          name: ratings
          namespace: bookinfo
      - exportedName: reviews.red-mesh-bookinfo.svc.green-mesh-exports.local
        localService:
          hostname: ""
          name: ""
          namespace: ""
    ```

    In the preceding example only the ratings service is imported, as indicated by the populated fields under `localService`. The reviews service is available for import, but is not currently imported because it does not match any `importRules` in the `ImportedServiceSet` object.