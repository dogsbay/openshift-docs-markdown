{%- set _mod_docs_content_type = "CONCEPT" %}
# Secrets management use cases {id="secrets-management-scenarios_{{ context }}"}

Using secrets management tools with other Red&#160;Hat products can protect sensitive data across your {{ product_title }} cluster. You can integrate secrets management Operators with other {{ product_title }} components to securely manage, automate, and consume credentials across various infrastructure and application workflows. {._abstract}

## {{ external_secrets_operator }} use cases {id="secrets-management-scenarios-eso_{{ context }}"}

You can integrate the {{ external_secrets_operator_short }} with other {{ product_title }} components to securely manage and inject credentials. Learn how to apply {{ external_secrets_operator_short }} in real-world deployment strategies, by reviewing the following example.


Securing {{ gitops_title }} by using {{ external_secrets_operator_short }} short-lived tokens

:   To reduce the security risk of compromised credentials, you can configure the {{ external_secrets_operator_short }} to generate short-lived tokens. {{ gitops_title }} can then use these temporary tokens to securely authenticate when accessing GitHub repositories. You can refer to an example of the integration in the {{ external_secrets_operator_short }} and {{ gitops_shortname }} demonstration.

**Additional resources**

*   [{{ external_secrets_operator_short }} and {{ gitops_shortname }} demonstration](https://interact.redhat.com/share/tcwyXElfYLWTvHl5dJ5n)
*   [Zero trust GitOps: Build a secure, secretless GitOps pipeline](https://developers.redhat.com/articles/2026/03/13/zero-trust-gitops-build-secure-secretless-gitops-pipeline)