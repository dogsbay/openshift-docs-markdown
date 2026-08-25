{%- set _mod_docs_content_type = "CONCEPT" %}
# Unmanaged infrastructure for the HyperShift Operator in an {{ aws_short }} account {id="hcp-manage-aws-infra-ho-req_{{ context }}"}

An arbitrary {{ aws_first }} account depends on the provider of the {{ hcp }} service. {._abstract}

In self-managed {{ hcp }}, the cluster service provider controls the {{ aws_short }} account. The cluster service provider is the administrator who hosts cluster control planes and is responsible for uptime. In managed {{ hcp }}, the {{ aws_short }} account belongs to Red Hat.

In a prerequired and unmanaged infrastructure for the HyperShift Operator, the following infrastructure requirements apply for a management cluster {{ aws_short }} account:

*   One S3 Bucket
    *   OpenID Connect (OIDC)
*   Route 53 hosted zones
    *   A domain to host private and public entries for hosted clusters