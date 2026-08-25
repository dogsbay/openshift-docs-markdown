---
title: Setting up additional trusted certificate authorities for builds {id="setting-up-trusted-ca"}
---

# Setting up additional trusted certificate authorities for builds {#setting-up-trusted-ca}

Use the following sections to set up additional certificate authorities (CA) to be trusted by builds when pulling images from an image registry.

The procedure requires a cluster administrator to create a `ConfigMap` and add additional CAs as keys in the `ConfigMap`.

- The `ConfigMap` must be created in the `openshift-config` namespace.
- `domain` is the key in the `ConfigMap` and `value` is the PEM-encoded certificate.

  - Each CA must be associated with a domain. The domain format is `hostname[..port]`.
- The `ConfigMap` name must be set in the `image.config.openshift.io/cluster` cluster scoped configuration resource’s `spec.additionalTrustedCA` field.

## Additional resources {#_additional_resources}

- [Create a `ConfigMap`](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#create-a-configmap)
- [Secrets and `ConfigMaps`](https://kubectl.docs.kubernetes.io/guides/config_management/secrets_configmaps/)
- [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
