{%- set _mod_docs_content_type = "PROCEDURE" %}
# Sign up for a Red Hat FedRAMP account {id="rosa-govcloud-fedramp-signup_{{ context }}"}

You need a Red&#160;Hat FedRAMP account to deploy and manage {{ product_title }} clusters in AWS GovCloud. After you submit an access request, the Red&#160;Hat support team works with you to configure admin details and user authentication for your organization. {._abstract}

**Procedure**

1.  Go to [the ROSA GovCloud access request form](https://console.redhat.com/openshift/create/rosa/govcloud).
1.  Complete the access request form.
1.  Click **Submit** to sign up.

**Verification**

*   You receive a _Submission confirmation_ after submitting the form.
*   The Red&#160;Hat confirmed stateside support team contacts you through email to collect your configuration details.

After Red&#160;Hat contacts you, you must provide the following information:

*   **Admin details**, including your _organization name_, _administrator given name and surname_, and _administrator email_.
*   **User authentication** method for the FedRAMP {{ hybrid_console_second }}, chosen from the following methods:
    *   _Local group in a Red&#160;Hat-managed Keycloak instance_, where users must set up multifactor authentication (MFA) with an approved device.

        :::note

        Currently, only the [YubiKey 5C NFC FIPS](https://www.yubico.com/product/yubikey-5-fips-series/yubikey-5c-nfc-fips-140-2/) device is accepted.
        
        :::

    *   _Customer-managed Identity Provider (IdP), integrated through OpenID Connect (OIDC)_, where you must provide the following:
        *   **Discovery endpoint:** The IdP’s OIDC discovery URL (typically ending in `/.well-known/openid-configuration`). Keycloak uses this URL to automatically fetch most of the IdP settings.
        *   **Client ID and secret:** Credentials that allow Keycloak to authenticate with your IdP.
        *   **Email domain(s):** A list of approved email domains. Only users with an email address from one of these domains can log in.
        *   **Essential claim:** A specific key-value pair (for example, `"rh-approved": "true"`) that must be present in a user’s token from the IdP to grant them access. In this configuration, you are responsible for implementing FIPS 140-2 validated MFA.