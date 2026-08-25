---
title: Adding API server certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding API server certificates {id="api-server-certificates"}
{%- set context = "api-server-certificates" %}

To allow clients outside of the cluster to verify the API server’s certificate, you can replace the default API server certificate with one that is issued by a CA that clients trust. {._abstract}

By default, the API server certificate is issued by an internal {{ product_title }} cluster CA. As a result, clients outside of the cluster cannot verify the API server’s certificate.


:::note

In hosted control plane clusters, you can add as many custom certificates to your Kubernetes API Server as you need. However, do not add a certificate for the endpoint that worker nodes use to communicate with the control plane. 


:::


{% leveloffset +1 %}{% include "./modules/customize-certificates-api-add-named.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/customize-certificates-api-renew-named.md" %}{% endleveloffset %}