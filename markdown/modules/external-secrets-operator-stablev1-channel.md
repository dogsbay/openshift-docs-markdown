{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ external_secrets_operator }} stable-v1 channel {id="external-secrets-operator-stablev1-channel_{{ context }}"}

Select the `stable-v1` channel to install and update the latest release of the {{ external_secrets_operator }}. By selecting this channel, you can use the most recent stable release for your Operator. {._abstract}


:::note

The `stable-v1` channel is the default and suggested channel while installing the {{ external_secrets_operator }}.

:::


The `stable-v1` channel offers the following update approval strategies:


Automatic
:   If you choose automatic updates for an installed {{ external_secrets_operator }}, a new version of the {{ external_secrets_operator }} is available in the `stable-v1` channel. The Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without human intervention.


Manual
:   If you select manual updates, when a newer version of the {{ external_secrets_operator }} is available, OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the {{ cert_manager_operator }} updated to the new version.