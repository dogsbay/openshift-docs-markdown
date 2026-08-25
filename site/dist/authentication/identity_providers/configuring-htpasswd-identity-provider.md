---
title: Configuring an htpasswd identity provider
---

# Configuring an htpasswd identity provider {#configuring-htpasswd-identity-provider}

Configure the `htpasswd` identity provider to allow users to log in to OpenShift Container Platform with credentials from an htpasswd file.

To define an htpasswd identity provider, perform the following tasks:

1. [Create an `htpasswd` file](/authentication/identity_providers/configuring-htpasswd-identity-provider#creating-htpasswd-file) to store the user and password information.
2. [Create a secret](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-creating-htpasswd-secret_configuring-htpasswd-identity-provider) to represent the `htpasswd` file.
3. [Define an htpasswd identity provider resource](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-htpasswd-CR_configuring-htpasswd-identity-provider) that references the secret.
4. [Apply the resource](/authentication/identity_providers/configuring-htpasswd-identity-provider#add-identity-provider_configuring-htpasswd-identity-provider) to the default OAuth configuration to add the identity provider.

## Creating the htpasswd file {#creating-htpasswd-file}

See one of the following sections for instructions about how to create the htpasswd file:

- [Creating an htpasswd file using Linux](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-creating-htpasswd-file-linux_configuring-htpasswd-identity-provider)
- [Creating an htpasswd file using Windows](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-creating-htpasswd-file-windows_configuring-htpasswd-identity-provider)

**Additional resources**

- See [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider) for information on parameters, such as `mappingMethod`, that are common to all identity providers.
