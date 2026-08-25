{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating DNS records on a public DNS zone on Infoblox {id="nw-control-dns-records-public-dns-zone-infoblox_{{ context }}"}

To create DNS records on Infoblox, use the External DNS Operator. The Operator manages external name resolution for your cluster services. {._abstract}

**Prerequisites**

*   You have access to the {{ oc_first }}.
*   You have access to the Infoblox UI.

**Procedure**

1.  Create a `secret` object with Infoblox credentials by running the following command:
    ```terminal
    $ oc -n external-dns-operator create secret generic infoblox-credentials --from-literal=EXTERNAL_DNS_INFOBLOX_WAPI_USERNAME=<infoblox_username> --from-literal=EXTERNAL_DNS_INFOBLOX_WAPI_PASSWORD=<infoblox_password>
    ```
1.  Get a list of routes by running the following command:
    ```terminal
    $ oc get routes --all-namespaces | grep console
    ```
    ```terminal title="Example output"
    openshift-console          console             console-openshift-console.apps.test.example.com                       console             https   reencrypt/Redirect     None
    openshift-console          downloads           downloads-openshift-console.apps.test.example.com                     downloads           http    edge/Redirect          None
    ```
1.  Create a YAML file, for example, `external-dns-sample-infoblox.yaml`, that defines the `ExternalDNS` object:
    ```yaml title="Example external-dns-sample-infoblox.yaml file"
    apiVersion: externaldns.olm.openshift.io/v1beta1
    kind: ExternalDNS
    metadata:
      name: sample-infoblox
    spec:
      provider:
        type: Infoblox
        infoblox:
          credentials:
            name: infoblox-credentials
          gridHost: ${INFOBLOX_GRID_PUBLIC_IP}
          wapiPort: 443
          wapiVersion: "2.3.1"
      domains:
      - filterType: Include
        matchType: Exact
        name: test.example.com
      source:
        type: OpenShiftRoute
        openshiftRouteOptions:
          routerName: default
    ```

    where:

    `metadata.name`
    :   Specifies the External DNS name.


`provider.type`
:   Specifies the provider type.


`source.type`
:   Specifies options for the source of DNS records.


`routerName`
:   If the source type is `OpenShiftRoute`, you can pass the OpenShift Ingress Controller name. External DNS selects the canonical hostname of that router as the target while creating a CNAME record.

1.  Create the `ExternalDNS` resource on Infoblox by running the following command:
    ```terminal
    $ oc create -f external-dns-sample-infoblox.yaml
    ```
1.  From the Infoblox UI, check the DNS records created for `console` routes:
    1.  Click **Data Management** → **DNS** → **Zones**.
    1.  Select the zone name.