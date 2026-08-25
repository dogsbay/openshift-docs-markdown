{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS STS security {id="rosa-hcp-sts-security_{{ context }}"}

Security features for AWS STS include: {._abstract}

*   An explicit and limited set of policies that the user creates ahead of time.
    *   The user can review every requested permission needed by the platform.
*   The service cannot do anything outside of those permissions.
*   There is no need to rotate or revoke credentials. Whenever the service needs to perform an action, it obtains credentials that expire in one hour or less.
*   Credential expiration reduces the risks of credentials leaking and being reused.
*   The AWS-managed policies for {{ product_title }} are tightly scoped to only allow actions on the associated AWS resources in your account, within the limits of the AWS API.

{{ product_title }} policies grant cluster software components with least-privilege permissions with short-term security credentials to specific and segregated IAM roles. The credentials are associated with IAM roles specific to each component and cluster that makes AWS API calls. This method aligns with principles of least-privilege and secure practices in cloud service resource management.