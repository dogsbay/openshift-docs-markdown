{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding Private Service Connect {id="osd-understanding-private-service-connect_{{ context }}"}

Private Service Connect (PSC), a capability of {{ gcp_full }} networking, enables private communication between services across different projects or organizations within {{ gcp_short }}. Users that implement PSC as part of their network connectivity can deploy {{ product_title }} clusters in a private and secured environment within {{ GCP }} without any public facing cloud resources. {._abstract}

For more information about PSC, see [Private Service Connect](https://cloud.google.com/vpc/docs/private-service-connect).


:::important

PSC is only available on {{ product_title }} version 4.17 and later, and is only supported by the Customer Cloud Subscription (CCS) infrastructure type.

:::