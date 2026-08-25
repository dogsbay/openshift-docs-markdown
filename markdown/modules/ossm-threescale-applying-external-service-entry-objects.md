{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying 3scale external ServiceEntry objects {id="ossm-threescale-applying-external-service-entry-objects_{{ context }}"}

To have the `threescale-wasm-auth` module authorize requests against 3scale, the module must have access to 3scale services. You can do this within {{ SMProductName }} by applying an external `ServiceEntry` object and a corresponding `DestinationRule` object for TLS configuration to use the HTTPS protocol.

The custom resources (CRs) set up the service entries and destination rules for secure access from within {{ SMProductShortName }} to 3scale Hosted (SaaS) for the backend and system components of the Service Management API and the Account Management API. The Service Management API receives queries for the authorization status of each request. The Account Management API provides API management configuration settings for your services.

**Procedure**

1.  Apply the following external `ServiceEntry` CR and related `DestinationRule` CR for 3scale Hosted **backend** to your cluster:
    1.  Add the `ServiceEntry` CR to a file called `service-entry-threescale-saas-backend.yml`:
        ```yaml title="ServiceEntry CR"
        apiVersion: networking.istio.io/v1beta1
        kind: ServiceEntry
        metadata:
          name: service-entry-threescale-saas-backend
        spec:
          hosts:
          - su1.3scale.net
          ports:
          - number: 443
            name: https
            protocol: HTTPS
          location: MESH_EXTERNAL
          resolution: DNS
        ```
    1.  Add the `DestinationRule` CR to a file called `destination-rule-threescale-saas-backend.yml`:
        ```yaml title="DestinationRule CR"
        apiVersion: networking.istio.io/v1beta1
        kind: DestinationRule
        metadata:
          name: destination-rule-threescale-saas-backend
        spec:
          host: su1.3scale.net
          trafficPolicy:
            tls:
              mode: SIMPLE
              sni: su1.3scale.net
        ```
    1.  Apply and save the external `ServiceEntry` CR for the 3scale Hosted backend to your cluster, by running the following command:
        ```terminal
        $ oc apply -f service-entry-threescale-saas-backend.yml
        ```
    1.  Apply and save the external `DestinationRule` CR for the 3scale Hosted backend to your cluster, by running the following command:
        ```terminal
        $ oc apply -f destination-rule-threescale-saas-backend.yml
        ```
1.  Apply the following external `ServiceEntry` CR and related `DestinationRule` CR for 3scale Hosted **system** to your cluster:
    1.  Add the `ServiceEntry` CR to a file called `service-entry-threescale-saas-system.yml`:
        ```terminal title="ServiceEntry CR"
        apiVersion: networking.istio.io/v1beta1
        kind: ServiceEntry
        metadata:
          name: service-entry-threescale-saas-system
        spec:
          hosts:
          - multitenant.3scale.net
          ports:
          - number: 443
            name: https
            protocol: HTTPS
          location: MESH_EXTERNAL
          resolution: DNS
        ```
    1.  Add the `DestinationRule` CR to a file called `destination-rule-threescale-saas-system.yml`:
        ```terminal title="DestinationRule CR"
        apiVersion: networking.istio.io/v1beta1
        kind: DestinationRule
        metadata:
          name: destination-rule-threescale-saas-system
        spec:
          host: multitenant.3scale.net
          trafficPolicy:
            tls:
              mode: SIMPLE
              sni: multitenant.3scale.net
        ```
    1.  Apply and save the external `ServiceEntry` CR for the 3scale Hosted system to your cluster, by running the following command:
        ```terminal
        $ oc apply -f service-entry-threescale-saas-system.yml
        ```
    1.  Apply and save the external `DestinationRule` CR for the 3scale Hosted system to your cluster, by running the following command:
        ```terminal
        $ oc apply -f <destination-rule-threescale-saas-system.yml>
        ```

Alternatively, you can deploy an in-mesh 3scale service. To deploy an in-mesh 3scale service, change the location of the services in the CR by deploying 3scale and linking to the deployment.

**Additional resources**
{._additional-resources}

*   [Service entry and destination rule documentation](/service_mesh/v2x/ossm-traffic-manage#ossm-routing-service-entries_traffic-management)