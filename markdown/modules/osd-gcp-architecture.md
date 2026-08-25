{%- set _mod_docs_content_type = "CONCEPT" %}
# Private {{ product_title }} on {{ GCP }} architecture on public and private networks {id="osd-gcp-architecture_{{ context }}"}

You can customize the access patterns for your API server endpoint and Red Hat Site Reliability Engineering (SRE) management by configuring a private cluster with Private Service Connect (PSC), a private cluster without PSC, or a public cluster. {._abstract}


:::important

Red Hat recommends using PSC when deploying a private {{ product_title }} cluster on {{ GCP }}. PSC ensures there is a secured, private connectivity between Red Hat infrastructure, SRE, and private OpenShift clusters.

:::