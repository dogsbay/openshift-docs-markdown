{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding service entries {id="ossm-routing-service-entries_{{ context }}"}

A service entry adds an entry to the service registry that {{ SMProductName }} maintains internally. After you add the service entry, the Envoy proxies send traffic to the service as if it is a service in your mesh. Service entries allow you to do the following:

*   Manage traffic for services that run outside of the service mesh.
*   Redirect and forward traffic for external destinations (such as, APIs consumed from the web) or traffic to services in legacy infrastructure.
*   Define retry, timeout, and fault injection policies for external destinations.
*   Run a mesh service in a Virtual Machine (VM) by adding VMs to your mesh.


:::note

Add services from a different cluster to the mesh to configure a multicluster {{ SMProductName }} mesh on Kubernetes.

:::


**Service entry examples**

The following example is a mesh-external service entry that adds the `ext-resource` external dependency to the {{ SMProductName }} service registry:

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: svc-entry
spec:
  hosts:
  - ext-svc.example.com
  ports:
  - number: 443
    name: https
    protocol: HTTPS
  location: MESH_EXTERNAL
  resolution: DNS
```

Specify the external resource using the `hosts` field. You can qualify it fully or use a wildcard prefixed domain name.

You can configure virtual services and destination rules to control traffic to a service entry in the same way you configure traffic for any other service in the mesh. For example, the following destination rule configures the traffic route to use mutual TLS to secure the connection to the `ext-svc.example.com` external service that is configured using the service entry:

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: ext-res-dr
spec:
  host: ext-svc.example.com
  trafficPolicy:
    tls:
      mode: MUTUAL
      clientCertificate: /etc/certs/myclientcert.pem
      privateKey: /etc/certs/client_private_key.pem
      caCertificates: /etc/certs/rootcacerts.pem
```