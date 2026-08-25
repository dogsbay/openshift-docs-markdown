{%- set _mod_docs_content_type = "CONCEPT" %}
# Authentication and authorization {id="security-platform-authentication_{{ context }}"}

## Controlling access using OAuth {id="security-platform-auth-controlling-access_{{ context }}"}

You can use API access control through authentication and authorization for securing your container platform. The {{ product_title }} master includes a built-in OAuth server. Users can obtain OAuth access tokens to authenticate themselves to the API. {._abstract}

As an administrator, you can configure OAuth to authenticate using an _identity provider_, such as LDAP, GitHub, or Google. The identity provider is used by default for new {{ product_title }} deployments, but you can configure this at initial installation time or postinstallation.

## API access control and management {id="security-platform-api-access-control_{{ context }}"}

Applications can have multiple, independent API services which have different endpoints that require management. {{ product_title }} includes a containerized version of the 3scale API gateway so that you can manage your APIs and control access.

3scale gives you a variety of standard options for API authentication and security, which can be used alone or in combination to issue credentials and control access: standard API keys, application ID and key pair, and OAuth 2.0.

You can restrict access to specific endpoints, methods, and services and apply access policy for groups of users. Application plans allow you to set rate limits for API usage and control traffic flow for groups of developers.

## Red Hat Single Sign-On {id="security-platform-red-hat-sso_{{ context }}"}

The Red Hat Single Sign-On server enables you to secure your applications by providing web single sign-on capabilities based on standards, including SAML 2.0, OpenID Connect, and OAuth 2.0. The server can act as a SAML or OpenID Connect–based identity provider (IdP), mediating with your enterprise user directory or third-party identity provider for identity information and your applications using standards-based tokens. You can integrate Red Hat Single Sign-On with LDAP-based directory services including Microsoft Active Directory and Red Hat Enterprise Linux Identity Management.

## Secure self-service web console {id="security-platform-auth-secure-self-service-web-console_{{ context }}"}

{{ product_title }} provides a self-service web console to ensure that teams do not access other environments without authorization. {{ product_title }} ensures a secure multitenant master by providing the following:

*   Access to the master uses Transport Layer Security (TLS)
*   Access to the API Server uses X.509 certificates or OAuth access tokens
*   Project quota limits the damage that a rogue token could do
*   The etcd service is not exposed directly to the cluster