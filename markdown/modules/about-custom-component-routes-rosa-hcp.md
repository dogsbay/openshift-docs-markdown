{%- set _mod_docs_content_type = "CONCEPT" %}
# About custom component routes on {{ product_title }} {id="about-custom-component-routes-rosa-hcp_{{ context }}"}

By default, {{ product_title }} clusters use service-generated default subdomains for core cluster routes. You can customize these component routes to use personalized, company-owned fully qualified domain names (FQDNs) to satisfy corporate branding and enterprise security requirements. {._abstract}

You can configure custom component routes for the following components on {{ product_title }}:

*   OpenShift web console
*   Downloads page (Command-line interface (CLI) tools)


:::note

Customizing the internal OAuth server route or the API server (`kube-apiserver`) endpoint is not supported on {{ product_title }}.

:::


Custom component routes have the following architecture and requirements:


TLS certificates
:   You must provide your own valid TLS certificate chain and private key stored as a Kubernetes secret in the `openshift-config` namespace on the cluster data plane.


DNS management
:   You are responsible for creating and maintaining the necessary CNAME or A records with your DNS provider to route traffic from your custom FQDN to the cluster’s ingress router.


Automated renewal
:   Automated certificate management, such as AWS Certificate Manager or automatic Let’s Encrypt rotation, is not natively integrated at the cluster service level. You must manage certificate renewals manually or by using data-plane Operators such as cert-manager.