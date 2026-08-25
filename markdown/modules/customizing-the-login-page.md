{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing the login page {id="customizing-the-login-page_{{ context }}"}

You can customize the login page to display Terms of Service information or apply custom branding for third-party login providers. {._abstract}

Custom login pages can also be helpful if you use a third-party login provider, such as GitHub or Google, to show users a branded page that they trust and expect before being redirected to the authentication provider. You can also render custom error pages during the authentication process.


:::note

Customizing the error template is limited to identity providers (IDPs) that use redirects, such as request header and OIDC-based IDPs. It does not have an effect on IDPs that use direct password authentication, such as LDAP and htpasswd.

:::


**Prerequisites**

*   You must have administrator privileges.

**Procedure**

1.  Run the following commands to create templates you can modify:
    ```terminal
    $ oc adm create-login-template > login.html
    ```
    ```terminal
    $ oc adm create-provider-selection-template > providers.html
    ```
    ```terminal
    $ oc adm create-error-template > errors.html
    ```
1.  Create the secrets:
    ```terminal
    $ oc create secret generic login-template --from-file=login.html -n openshift-config
    ```
    ```terminal
    $ oc create secret generic providers-template --from-file=providers.html -n openshift-config
    ```
    ```terminal
    $ oc create secret generic error-template --from-file=errors.html -n openshift-config
    ```
1.  Run:
    ```terminal
    $ oc edit oauths cluster
    ```
1.  Update the specification:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: OAuth
    metadata:
      name: cluster
    # ...
    spec:
      templates:
        error:
            name: error-template
        login:
            name: login-template
        providerSelection:
            name: providers-template
    ```

    Run `oc explain oauths.spec.templates` to understand the options.