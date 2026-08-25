{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ external_secrets_operator }} stable-v1.y channel {id="external-secrets-operator-stablev1-y-channel_{{ context }}"}

Select the stable-v1 channel to install and update the latest release of the {{ external_secrets_operator }}. By selecting this channel, you can use the latest stable release and allows you to choose between automatic and manual updates. {._abstract}

The y-stream version of the {{ external_secrets_operator }} installs updates from the `stable-v1.y` channels such as `stable-v1.0`, `stable-v1.1`, and `stable-v1.2`. Select the `stable-v1.y` channel if you want to use the y-stream version and stay updated to the z-stream version of the {{ external_secrets_operator }}.

The `stable-v1.y` channel offers the following update approval strategies:


Automatic
:   If you choose automatic updates for an installed {{ external_secrets_operator }}, a new z-stream version of the {{ external_secrets_operator }} is available in the `stable-v1.y` channel. OLM automatically upgrades the running instance of your Operator without human intervention.


Manual
:   If you select manual updates, when a newer version of the {{ external_secrets_operator }} is available, OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the {{ external_secrets_operator }} updated to the new version of the z-stream releases.