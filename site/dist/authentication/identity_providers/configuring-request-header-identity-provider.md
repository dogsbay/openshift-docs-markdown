---
title: Configuring a request header identity provider
---

# Configuring a request header identity provider {#configuring-request-header-identity-provider}

Configure the `request-header` identity provider to identify users from request header values, such as `X-Remote-User`. It is typically used in combination with an authenticating proxy, which sets the request header value.

**Additional resources**

- See [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider) for information on parameters, such as `mappingMethod`, that are common to all identity providers.

## Example Apache authentication configuration using request header {#example-apache-auth-config-using-request-header}

This example configures an Apache authentication proxy for the OpenShift Container Platform using the request header identity provider.
