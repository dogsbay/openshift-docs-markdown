{%- set _mod_docs_content_type = "CONCEPT" %}
# Certificate request methods {id="cert-manager-request-methods_{{ context }}"}

To obtain certificates for your workloads, choose a request method supported by the {{ cert_manager_operator }}. You can select the approach that fits your operational requirements and automation workflow. {._abstract}

There are two ways to request a certificate using the {{ cert_manager_operator }}:


Using the `cert-manager.io/CertificateRequest` object
:   With this method a service developer creates a `CertificateRequest` object with a valid `issuerRef` pointing to a configured issuer (configured by a service infrastructure administrator). A service infrastructure administrator then accepts or denies the certificate request. Only accepted certificate requests create a corresponding certificate.


Using the `cert-manager.io/Certificate` object
:   With this method, a service developer creates a `Certificate` object with a valid `issuerRef` and obtains a certificate from a secret that they pointed to the `Certificate` object.