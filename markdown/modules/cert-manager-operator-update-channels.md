{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding update channels of the {{ cert_manager_operator }} {id="cert-manager-operator-update-channels_{{ context }}"}

Update channels are the mechanism by which you can declare the version of your {{ cert_manager_operator }} in your cluster. The {{ cert_manager_operator }} offers the following update channels: {._abstract}

*   `stable-v1`
*   `stable-v1.y`

## stable-v1 channel {id="stable-v1-channel_{{ context }}"}
The `stable-v1` channel installs and updates the latest release version of the {{ cert_manager_operator }}. Select the `stable-v1` channel if you want to use the latest stable release of the {{ cert_manager_operator }}.


:::note

The `stable-v1` channel is the default and suggested channel while installing the {{ cert_manager_operator }}.

:::


The `stable-v1` channel offers the following update approval strategies:


Automatic
:   If you choose automatic updates for an installed {{ cert_manager_operator }}, a new version of the {{ cert_manager_operator }} is available in the `stable-v1` channel. The Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without human intervention.


Manual
:   If you select manual updates, when a newer version of the {{ cert_manager_operator }} is available, OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the {{ cert_manager_operator }} updated to the new version.

## stable-v1.y channel {id="stable-v1-y-channel_{{ context }}"}

The y-stream version of the {{ cert_manager_operator }} installs updates from the `stable-v1.y` channels such as `stable-v1.10`, `stable-v1.11`, and `stable-v1.12`. Select the `stable-v1.y` channel if you want to use the y-stream version and stay updated to the z-stream version of the {{ cert_manager_operator }}.

The `stable-v1.y` channel offers the following update approval strategies:


Automatic
:   If you choose automatic updates for an installed {{ cert_manager_operator }}, a new z-stream version of the {{ cert_manager_operator }} is available in the `stable-v1.y` channel. OLM automatically upgrades the running instance of your Operator without human intervention.


Manual
:   If you select manual updates, when a newer version of the {{ cert_manager_operator }} is available, OLM creates an update request. As a cluster administrator, you must then manually approve that update request to have the {{ cert_manager_operator }} updated to the new version of the z-stream releases.