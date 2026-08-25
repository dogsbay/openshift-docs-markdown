{%- set _content_type = "SNIPPET" %}

:::note

ROSA CLI 1.2.7 introduces changes to the OIDC provider endpoint URL format for new clusters. {{ product_title }} cluster OIDC provider URLs are no longer regional. The AWS CloudFront implementation provides improved access speed and resiliency and reduces latency.

Because this change is only available to new clusters created by using ROSA CLI 1.2.7 or later, existing OIDC-provider configurations do not have any supported migration paths.

:::