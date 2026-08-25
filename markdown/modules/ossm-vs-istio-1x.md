# Differences between Istio and {{ SMProductName }} {id="ossm-vs-istio_{{ context }}"}

An installation of {{ SMProductName }} differs from an installation of Istio in multiple ways. The modifications to {{ SMProductName }} are sometimes necessary to resolve issues, provide additional features, or to handle differences when deploying on {{ product_title }}.

## Command-line tool {id="ossm-cli-tool_{{ context }}"}

The command-line tool for {{ SMProductName }} is oc.  {{ SMProductName }}  does not support istioctl.

## Automatic injection {id="ossm-automatic-injection_{{ context }}"}

The upstream Istio community installation automatically injects the sidecar into pods within the projects you have labeled.

{{ SMProductName }} does not automatically inject the sidecar to any pods, but requires you to opt in to injection using an annotation without labeling projects. This method requires fewer privileges and does not conflict with other OpenShift capabilities such as builder pods. To enable automatic injection you specify the `sidecar.istio.io/inject` annotation as described in the Automatic sidecar injection section.

## Istio Role Based Access Control features {id="ossm-rbac_{{ context }}"}

Istio Role Based Access Control (RBAC) provides a mechanism you can use to control access to a service. You can identify subjects by user name or by specifying a set of properties and apply access controls accordingly.

The upstream Istio community installation includes options to perform exact header matches, match wildcards in headers, or check for a header containing a specific prefix or suffix.

{{ SMProductName }} extends the ability to match request headers by using a regular expression. Specify a property key of `request.regex.headers` with a regular expression.

```yaml title="Upstream Istio community matching request headers example"
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRoleBinding
metadata:
  name: httpbin-client-binding
  namespace: httpbin
spec:
  subjects:
  - user: "cluster.local/ns/istio-system/sa/istio-ingressgateway-service-account"
    properties:
      request.headers[<header>]: "value"
```

```yaml title="{{ SMProductName }} matching request headers by using regular expressions"
apiVersion: "rbac.istio.io/v1alpha1"
kind: ServiceRoleBinding
metadata:
  name: httpbin-client-binding
  namespace: httpbin
spec:
  subjects:
  - user: "cluster.local/ns/istio-system/sa/istio-ingressgateway-service-account"
    properties:
      request.regex.headers[<header>]: "<regular expression>"
```

## OpenSSL {id="ossm-openssl_{{ context }}"}

{{ SMProductName }} replaces BoringSSL with OpenSSL. OpenSSL is a software library that contains an open source implementation of the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols. The {{ SMProductName }} Proxy binary dynamically links the OpenSSL libraries (libssl and libcrypto) from the underlying Red Hat Enterprise Linux operating system.

## Component modifications {id="ossm-component-modifications_{{ context }}"}

*   A _maistra-version_ label has been added to all resources.
*   All Ingress resources have been converted to OpenShift Route resources.
*   Grafana, Tracing (Jaeger), and Kiali are enabled by default and exposed through OpenShift routes.
*   Godebug has been removed from all templates
*   The `istio-multi` ServiceAccount and ClusterRoleBinding have been removed, as well as the `istio-reader` ClusterRole.

## Envoy, Secret Discovery Service, and certificates {id="ossm-envoy-sds-ca_{{ context }}"}

*   {{ SMProductName }} does not support QUIC-based services.
*   Deployment of TLS certificates using the Secret Discovery Service (SDS) functionality of Istio is not currently supported in {{ SMProductName }}. The Istio implementation depends on a nodeagent container that uses hostPath mounts.

## Istio Container Network Interface (CNI) plugin {id="ossm-cni_{{ context }}"}

{{ SMProductName }} includes CNI plugin, which provides you with an alternate way to configure application pod networking. The CNI plugin replaces the `init-container` network configuration eliminating the need to grant service accounts and projects access to Security Context Constraints (SCCs) with elevated privileges.

## Routes for Istio Gateways {id="ossm-routes-gateways_{{ context }}"}

OpenShift routes for Istio Gateways are automatically managed in {{ SMProductName }}. Every time an Istio Gateway is created, updated or deleted inside the service mesh, an OpenShift route is created, updated or deleted.

A {{ SMProductName }} control plane component called Istio OpenShift Routing (IOR) synchronizes the gateway route.  For more information, see Automatic route creation.

### Catch-all domains {id="ossm-catch-all-domains_{{ context }}"}
Catch-all domains ("\*") are not supported. If one is found in the Gateway definition, {{ SMProductName }} _will_ create the route, but will rely on OpenShift to create a default hostname. This means that the newly created route will __not__ be a catch all ("*") route, instead it will have a hostname in the form `<route-name>[-<project>].<suffix>`. See the OpenShift documentation for more information about how default hostnames work and how a cluster administrator can customize it.

### Subdomains {id="ossm-subdomains_{{ context }}"}
Subdomains (e.g.: "*.domain.com") are supported. However this ability does not come enabled by default in {{ product_title }}. This means that {{ SMProductName }} _will_ create the route with the subdomain, but it will only be in effect if {{ product_title }} is configured to enable it.

### Transport layer security {id="ossm-tls_{{ context }}"}
Transport Layer Security (TLS) is supported. This means that, if the Gateway contains a `tls` section, the OpenShift Route will be configured to support TLS.