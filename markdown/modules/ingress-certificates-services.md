{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress certificate services {id="ingress-certificates-services_{{ context }}"}

Review how Prometheus, secured routes, and the Ingress Operator depend on ingress metrics and default serving certificates in {{ product_title }}. {._abstract}

Prometheus uses the certificates that secure metrics.

The Ingress Operator specifies a dedicated signing certificate to sign default certificates that it generates for Ingress Controllers for which you do not set custom default certificates.

Cluster components that use secured routes may use the default Ingress Controller default certificate.

Ingress to the cluster via a secured route uses the default certificate of the Ingress Controller by which the route is accessed unless the route specifies a route certificate.