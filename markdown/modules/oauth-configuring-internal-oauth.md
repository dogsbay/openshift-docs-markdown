{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the internal OAuth server’s token duration {id="oauth-configuring-internal-oauth_{{ context }}"}

Configure the internal OAuth server to extend or reduce access token validity beyond the default 24-hour lifetime. {._abstract}


:::important

By default, tokens are only valid for 24 hours. Existing sessions
expire after this time elapses.

:::


If the default time is insufficient, then this can be modified using
the following procedure.

**Procedure**

1.  Create a configuration file that contains the token duration options. The
following file sets this to 48 hours, twice the default.
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: OAuth
    metadata:
      name: cluster
    spec:
      tokenConfig:
        accessTokenMaxAgeSeconds: 172800
    ```

    where:

    `spec.tokenConfig.accessTokenMaxAgeSeconds`
    :   Specifies the lifetime of access tokens in seconds. The default lifetime is 24 hours, or 86400 seconds. This attribute cannot be negative. If set to zero, the default lifetime is used.

1.  Apply the new configuration file:

    :::note

    Because you update the existing OAuth server, you must use the `oc apply`
    command to apply the change.
    
    :::

    ```terminal
    $ oc apply -f </path/to/file.yaml>
    ```
1.  Confirm that the changes are in effect:
    ```terminal
    $ oc describe oauth.config.openshift.io/cluster
    ```
    ```terminal title="Example output"
    ...
    Spec:
      Token Config:
        Access Token Max Age Seconds:  172800
    ...
    ```