---
title: Aggregated API client certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Aggregated API client certificates {id="cert-types-aggregated-api-client-certificates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-types-aggregated-api-client-certificates" %}

Review aggregated API client certificate validity and automatic rotation in {{ product_title }} to plan maintenance for extension API server authentication.

## Purpose {id="aggregated-api-client-certificates-purpose_{{ context }}"}

Aggregated API client certificates are used to authenticate the `KubeAPIServer` when connecting to the aggregated API servers.

## Management {id="aggregated-api-client-certificates-management_{{ context }}"}

These certificates are managed by the system and not the user.

## Expiration {id="aggregated-api-client-certificates-expiration_{{ context }}"}

This certificate authority (CA) is valid for 30 days.

The managed client certificates are valid for 30 days.

CA and client certificates are rotated automatically through the use of controllers.

## Customization {id="aggregated-api-client-certificates-customization_{{ context }}"}

You cannot customize the aggregated API server certificates.