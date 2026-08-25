{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a new client in Keycloak {id="creating-a-new-client-in-keycloak_{{ context }}"}

**Procedure**

1.  Log in to your Keycloak server, select the realm you want to use, navigate to the **Clients** page, and then click **Create** in the upper-right section of the screen.
1.  Specify the following values:

Client ID
:   `argocd`

Client Protocol
:   `openid-connect` 

Route URL
:   &lt;your-argo-cd-route-url>

Access Type
:   `confidential`

Valid Redirect URIs
:   &lt;your-argo-cd-route-url>/auth/callback

Base URL
:   `/applications`

1.  Click **Save** to see the **Credentials** tab added to the **Client** page.
1.  Copy the secret from the **Credentials** tab for further configuration.