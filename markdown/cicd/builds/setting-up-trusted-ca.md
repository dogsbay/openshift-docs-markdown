---
title: "Setting up additional trusted certificate authorities for builds {id=\"setting-up-trusted-ca\"}{% if not (openshift_dedicated or openshift_rosa) %}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Setting up additional trusted certificate authorities for builds {id="setting-up-trusted-ca"}
{%- if not (openshift_dedicated or openshift_rosa) %}
{% include "./_attributes/common-attributes.md" %}
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "setting-up-trusted-ca" %}

{% if openshift_enterprise or openshift_rosa or openshift_dedicated or openshift_webscale or openshift_origin %}
Use the following sections to set up additional certificate authorities (CA) to be trusted by builds when pulling images from an image registry.

The procedure requires a cluster administrator to create a `ConfigMap` and add additional CAs as keys in the `ConfigMap`.

*   The `ConfigMap` must be created in the `openshift-config` namespace.
*   `domain` is the key in the `ConfigMap` and `value` is the PEM-encoded certificate.
    *   Each CA must be associated with a domain. The domain format is `hostname[..port]`.
*   The `ConfigMap` name must be set in the `image.config.openshift.io/cluster` cluster scoped configuration resource’s `spec.additionalTrustedCA` field.

{% leveloffset +1 %}{% include "./modules/configmap-adding-ca.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Create a `ConfigMap`](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#create-a-configmap)
*   [Secrets and `ConfigMaps`](https://kubectl.docs.kubernetes.io/guides/config_management/secrets_configmaps/)
{%- if not (openshift_rosa or openshift_dedicated) %}
*   [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
{% endif %}
{% endif %}