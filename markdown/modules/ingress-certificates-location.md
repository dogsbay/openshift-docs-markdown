{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress certificate location {id="ingress-certificates-location_{{ context }}"}

Locate ingress certificate secrets in {{ product_title }} to replace Operator defaults and verify certificates for Prometheus metrics and secured routes. {._abstract}

To secure access to Ingress Operator and Ingress Controller metrics, the Ingress Operator uses service serving certificates. The Operator requests a certificate from the `service-ca` controller for Operator metrics, and the `service-ca` controller puts the certificate in a secret named `metrics-tls` in the `openshift-ingress-operator` namespace. Additionally, the Ingress Operator requests a certificate for each Ingress Controller, and the `service-ca` controller puts the certificate in a secret named `router-metrics-certs-<name>`, where `<name>` is the name of the Ingress Controller, in the `openshift-ingress` namespace.

Each Ingress Controller has a default certificate that it uses for secured routes that do not specify route-specific certificates. Unless you specify a custom certificate, the Operator uses a self-signed certificate by default. The Operator uses a self-signed Operator signing certificate to sign any default certificate that it generates. The Operator generates this signing certificate and puts it in a secret named `router-ca` in the `openshift-ingress-operator` namespace. When the Operator generates a default certificate, it puts the default certificate in a secret named `router-certs-<name>`, where `<name>` is the name of the Ingress Controller, in the `openshift-ingress` namespace.


:::warning

The Ingress Operator generates a default certificate for an Ingress Controller to serve as a placeholder until you configure a custom default certificate. Do not use Operator-generated default certificates in production clusters.

:::