{%- set _mod_docs_content_type = "CONCEPT" %}
# etcd certificate rotation alerts and metrics signer certificates {id="etcd-cert-alerts-metrics-signer_{{ context }}"}

Monitor etcd signer expiration alerts and rotate the metrics signer using the `etcd-metric-signer` parameter and the `etcd-metrics-ca-bundle` when required, so you avoid certificate expiration and maintain secure etcd metrics traffic. {._abstract}


`etcdSignerCAExpirationWarning`
:   Occurs 730 days until the signer expires.

`etcdSignerCAExpirationCritical`
:   Occurs 365 days until the signer expires.

These alerts track the expiration date of the signer certificate authorities in the `openshift-etcd` namespace.

You can rotate the certificate for the following reasons:

*   You receive an expiration alert.
*   The private key is leaked.


:::important

When a private key is leaked, you must rotate all of the certificates.

:::


There is a separate etcd signer for the {{ product_title }} metrics system. To rotate the separate etcd signer, follow the steps in "Rotating the etcd certificate" using the following parameters:

*   Use the `etcd-metric-signer` parameter instead of the `etcd-signer`
*   Use `etcd-metrics-ca-bundle` bundle instead ofthe  `etcd-ca-bundle`