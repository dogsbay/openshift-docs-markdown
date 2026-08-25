{%- set _mod_docs_content_type = "REFERENCE" %}
# User-provided certificates for default ingress reference {id="user-provided-certificates-ingress-ref_{{ context }}"}

Use user-provided default ingress certificates to allow applications on the default apps domain to present a custom TLS certificate to clients, so clients do not need to have cluster-managed certificate authority (CA) certificates installed. {._abstract}

## Purpose {id="cert-types-user-provided-default-ingress-purpose_{{ context }}"}

Applications are usually exposed at `<route_name>.apps.<cluster_name>.<base_domain>`. The `<cluster_name>` and `<base_domain>` come from the installation config file. `<route_name>` is the host field of the route, if specified, or the route name. For example, `hello-openshift-default.apps.username.devcluster.openshift.com`. `hello-openshift` is the name of the route and the route is in the default namespace. You might want clients to access the applications without distributing cluster-managed CA certificates to the clients. Cluster administrators must set a custom default certificate when serving application content.


:::warning

The Ingress Operator generates a default certificate for an `IngressController` CR to serve as a placeholder until you configure a custom default certificate. Do not use Operator-generated default certificates in production clusters.

:::


## Location {id="cert-types-user-provided-default-ingress-location_{{ context }}"}

Store user-provided certificates in a `tls` type `Secret` resource in the `openshift-ingress` namespace. Update the `IngressController` CR in the `openshift-ingress-operator` namespace to enable the use of the user-provided certificate. For more information, see "Setting a custom default certificate".

## Management {id="cert-types-user-provided-default-ingress-management_{{ context }}"}

User-provided certificates are managed by the user.

## Expiration {id="cert-types-user-provided-default-ingress-expiration_{{ context }}"}

Expiration and renewal are managed by the user.

## Services {id="cert-types-user-provided-default-ingress-services_{{ context }}"}

Applications deployed on the cluster use user-provided certificates for default ingress.

## Customization {id="cert-types-user-provided-default-ingress-customization_{{ context }}"}

Update the secret containing the user-managed certificate as needed.