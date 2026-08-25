{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding update channels of the {{ external_secrets_operator }} {id="external-secrets-operator-update-channels_{{ context }}"}

Control the version of the {{ external_secrets_operator }} in your cluster by selecting an update channel. By using this mechanism, you can declare a specific version track, ensuring your environment receives only the updates you require for stability. {._abstract}

The {{ external_secrets_operator }} offers the following update channels:

*   `stable-v1`
*   `stable-v1.y`