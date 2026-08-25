{%- set _mod_docs_content_type = "PROCEDURE" %}
# Registering a GitHub application {id="identity-provider-registering-github_{{ context }}"}

Register an OAuth application on GitHub or GitHub Enterprise to obtain the client ID and client secret for the identity provider configuration. {._abstract}

**Procedure**

1.  Start the registration process by navigating to the appropriate page in GitHub or GitHub Enterprise:
    *   For GitHub, click your profile picture in the upper right corner and select **Settings** → **Developer settings** → **OAuth Apps**.
    *   For GitHub Enterprise, go to your GitHub Enterprise home page and then select **Settings → Developer settings → Register a new application**.
1.  Click **New OAuth app**.
1.  Enter an application name, for example `My OpenShift Install`.
1.  Enter a homepage URL, such as `https://oauth-openshift.apps.<cluster-name>.<cluster-domain>`.
1.  Optional: Enter an application description.
1.  Enter the authorization callback URL, where the end of the URL contains the identity provider `name`:
    ```
    https://oauth-openshift.apps.<cluster-name>.<cluster-domain>/oauth2callback/<idp-provider-name>
    ```

    For example:
    ```
    https://oauth-openshift.apps.openshift-cluster.example.com/oauth2callback/github
    ```
1.  Click **Register application**. GitHub provides a client ID and a client secret. You need these values to complete the identity provider configuration.