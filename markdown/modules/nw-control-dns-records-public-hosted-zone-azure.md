{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating DNS records on an Azure DNS zone {id="nw-control-dns-records-public-hosted-zone-azure_{{ context }}"}

To create DNS records on a public or private DNS zone for Azure, use the External DNS Operator. The Operator manages external name resolution for your cluster. {._abstract}

**Prerequisites**

*   You must have administrator privileges.
*   The `admin` user must have access to the `kube-system` namespace.

**Procedure**

1.  Fetch the credentials from the `kube-system` namespace to use the cloud provider client by running the following command:
    ```terminal
    $ CLIENT_ID=$(oc get secrets azure-credentials  -n kube-system  --template={{.data.azure_client_id}} | base64 -d)
    ```
    ```terminal
    $ CLIENT_SECRET=$(oc get secrets azure-credentials  -n kube-system  --template={{.data.azure_client_secret}} | base64 -d)
    ```
    ```terminal
    $ RESOURCE_GROUP=$(oc get secrets azure-credentials  -n kube-system  --template={{.data.azure_resourcegroup}} | base64 -d)
    ```
    ```terminal
    $ SUBSCRIPTION_ID=$(oc get secrets azure-credentials  -n kube-system  --template={{.data.azure_subscription_id}} | base64 -d)
    ```
    ```terminal
    $ TENANT_ID=$(oc get secrets azure-credentials  -n kube-system  --template={{.data.azure_tenant_id}} | base64 -d)
    ```
1.  Log in to Azure by running the following command:
    ```terminal
    $ az login --service-principal -u "${CLIENT_ID}" -p "${CLIENT_SECRET}" --tenant "${TENANT_ID}"
    ```
1.  Get a list of routes by running the following command:
    ```terminal
    $ oc get routes --all-namespaces | grep console
    ```
    ```terminal title="Example output"
    openshift-console          console             console-openshift-console.apps.test.azure.example.com                       console             https   reencrypt/Redirect     None
    openshift-console          downloads           downloads-openshift-console.apps.test.azure.example.com                     downloads           http    edge/Redirect          None
    ```
1.  Get a list of DNS zones.
    1.  For public DNS zones, enter the following command:
        ```terminal
        $ az network dns zone list --resource-group "${RESOURCE_GROUP}"
        ```
    1.  For private DNS zones, enter the following command:
        ```terminal
        $ az network private-dns zone list -g "${RESOURCE_GROUP}"
        ```
1.  Create a YAML file, for example, `external-dns-sample-azure.yaml`, that defines the `ExternalDNS` object:
    ```yaml title="Example external-dns-sample-azure.yaml file"
    apiVersion: externaldns.olm.openshift.io/v1beta1
    kind: ExternalDNS
    metadata:
      name: sample-azure
    spec:
      zones:
      - "/subscriptions/1234567890/resourceGroups/test-azure-xxxxx-rg/providers/Microsoft.Network/dnszones/test.azure.example.com"
      provider:
        type: Azure
      source:
        openshiftRouteOptions:
          routerName: default
        type: OpenShiftRoute
    # ...
    ```

    where:

    `metadata.name`
    :   Specifies the External DNS name.

    `spec.zones`
    :   Specifies the zone ID. For a private DNS zone, change `dnszones` to `privateDnsZones`.

    `provider.type`
    :   Specifies the provider type.

    `source.openshiftRouteOptions`
    :   Specifies the options for the source of DNS records.

    `routerName`
    :   If the source type is `OpenShiftRoute`, you can pass the OpenShift Ingress Controller name. The External DNS Operator selects the canonical hostname of that router as the target while creating the CNAME record.

    `source.type`
    :   Specifies the `route` resource as the source for the Azure DNS records.

**Troubleshooting**

1.  Check the records created for the routes.
    1.  For public DNS zones, enter the following command:
        ```terminal
        $ az network dns record-set list -g "${RESOURCE_GROUP}" -z "${ZONE_NAME}" | grep console
        ```
    1.  For private DNS zones, enter the following command:
        ```terminal
        $ az network private-dns record-set list -g "${RESOURCE_GROUP}" -z "${ZONE_NAME}" | grep console
        ```