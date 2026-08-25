{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ tekton_hub }} with login and rating {id="installing-tekton-hub-with-login-and-rating_{{ context }}"}

You can install {{ tekton_hub }} on your cluster with custom configuration that supports login with authorization and ratings for {{ tekton_hub }} artifacts. {._abstract}

**Prerequisites**

*   Ensure that the {{ pipelines_title }} Operator is installed in the default `openshift-pipelines` namespace on the cluster.

**Procedure**

1.  Create an OAuth application with your Git repository hosting provider, and note the Client ID and Client Secret. The supported providers are GitHub, GitLab, and BitBucket.
    *   For a [GitHub OAuth application](https://docs.github.com/en/developers/apps/creating-an-oauth-app), set the Homepage URL and the Authorization callback URL as `<auth-route>`.
    *   For a [GitLab OAuth application](https://docs.gitlab.com/ee/integration/oauth_provider.html#user-owned-applications), set the `REDIRECT_URI` as `<auth-route>/auth/gitlab/callback`.
    *   For a [BitBucket OAuth application](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud), set the `Callback URL` as `<auth-route>`.
1.  Edit the `<tekton_hub_root>/config/02-api/20-api-secret.yaml` file to include the {{ tekton_hub }} API secrets. For example:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: tekton-hub-api
      namespace: openshift-pipelines
    type: Opaque
    stringData:
      GH_CLIENT_ID: (1)
      GH_CLIENT_SECRET: (2)
      GL_CLIENT_ID: (3)
      GL_CLIENT_SECRET: (4)
      BB_CLIENT_ID: (5)
      BB_CLIENT_SECRET: (6)
      JWT_SIGNING_KEY: (7)
      ACCESS_JWT_EXPIRES_IN: (8)
      REFRESH_JWT_EXPIRES_IN: (9)
      AUTH_BASE_URL: (10)
      GHE_URL: (11)
      GLE_URL: (12)
    ```
    1.  The Client ID from the GitHub OAuth application.
    1.  The Client Secret from the GitHub OAuth application.
    1.  The Client ID from the GitLab OAuth application.
    1.  The Client Secret from the GitLab OAuth application.
    1.  The Client ID from the BitBucket OAuth application.
    1.  The Client Secret from the BitBucket OAuth application.
    1.  A long, random string used to sign the JSON Web Token (JWT) created for users.
    1.  Add the time limit after which the access token expires. For example, `1m`, where m denotes minutes. The supported units of time are seconds (`s`), minutes (`m`), hours (`h`), days (`d`), and weeks (`w`).
    1.  Add the time limit after which the refresh token expires. For example, `1m`, where `m` denotes minutes. The supported units of time are seconds (`s`), minutes (`m`), hours (`h`), days (`d`), and weeks (`w`). Ensure that the expiry time set for token refresh is greater than the expiry time set for token access.
    1.  Route URL for the OAuth application.
    1.  GitHub Enterprise URL, if you are authenticating using GitHub Enterprise. Do not provide the URL to the catalog as a value for this field.
    1.  GitLab Enterprise URL, if you are authenticating using GitLab Enterprise. Do not provide the URL to the catalog as a value for this field.

    :::note

    You can delete the unused fields for the Git repository hosting service providers that are irrelevant to your deployment.
    
    :::

1.  Create a `TektonHub` CR similar to the following example.
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonHub
    metadata:
      name: hub
    spec:
      targetNamespace: openshift-pipelines (1)
      db: (2)
        secret: tekton-hub-db (3)

      categories: (4)
        - Automation
        - Build Tools
        - CLI
        - Cloud
        - Code Quality
          ...

      catalogs: (5)
        - name: tekton
          org: tektoncd
          type: community
          provider: github
          url: https://github.com/tektoncd/catalog
          revision: main

      scopes: (6)
        - name: agent:create
          users: [<username>]
        - name: catalog:refresh
          users: [<username>]
        - name: config:refresh
          users: [<username>]

      default: (7)
        scopes:
          - rating:read
          - rating:write

      api:
        catalogRefreshInterval: 30m (8)
    ```
    1.  The namespace in which {{ tekton_hub }} must be installed; default is `openshift-pipelines`.
    1.  Optional: Custom database, such as a Crunchy Postgres database.
    1.  The name of the database secret must be `tekton-hub-db`.
    1.  Optional: Customized categories for tasks and pipelines in {{ tekton_hub }}.
    1.  Optional: Customized catalogs for {{ tekton_hub }}.
    1.  Optional: Additional users. You can metion multiple users, such as `[<username_1>, <username_2>, <username_3>]`.
    1.  Optional: Customized default scopes.
    1.  The time interval after which the catalog refreshes automatically. The supported units of time are seconds (`s`), minutes (`m`), hours (`h`), days (`d`), and weeks (`w`). The default interval is 30 minutes.

    :::note

    If you do not provide custom values for the optional fields in the `TektonHub` CR, the default values configured in the {{ tekton_hub }} API config map is used.
    
    :::

1.  Apply the `TektonHub` CR.
    ```terminal
    $ oc apply -f <tekton-hub-cr>.yaml
    ```
1.  Check the status of the installation. The `TektonHub` CR might take some time to attain steady state.
    ```terminal
    $ oc get tektonhub.operator.tekton.dev
    ```
    ```terminal title="Sample output"
    NAME   VERSION   READY   REASON   APIURL                    UIURL
    hub    v1.9.0    True             https://api.route.url/    https://ui.route.url/
    ```