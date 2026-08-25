{%- set _mod_docs_content_type = "REFERENCE" %}
# Q1 2023 {id="rosa-q1-2023_{{ context }}"}

The following items were added during the first quarter of 2023. {._abstract}


OIDC provider endpoint URL update
:   Starting with ROSA CLI version 1.2.7, all new cluster OIDC provider endpoint URLs are no longer regional. Amazon CloudFront is part of this implementation to improve access speed, reduce latency, and improve resiliency. This change is only available for new clusters created with ROSA CLI 1.2.7 or later. There are no supported migration paths for existing OIDC provider configurations.