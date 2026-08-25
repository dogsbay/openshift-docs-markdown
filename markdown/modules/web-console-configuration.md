{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the web console {id="web-console-configuration_{{ context }}"}

You can configure the web console settings by editing the `console.config.openshift.io` resource. {._abstract}

**Procedure**

1.  Edit the `console.config.openshift.io` resource:
    ```terminal
    $ oc edit console.config.openshift.io cluster
    ```

    The following example displays the sample resource definition for the console:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Console
    metadata:
      name: cluster
    spec:
      authentication:
        logoutRedirect: ""
    status:
      consoleURL: ""
    ```

    The `logoutRedirect` field specifies the URL of the page to load when a user logs out of the web console. If you do not specify a value, the user returns to the login page for the web console. Specifying a `logoutRedirect` URL allows your users to perform single logout (SLO) through the identity provider to delete their single sign-on session.

    The `consoleURL` field is the web console URL. To update this to a custom value, see **Customizing the web console URL**.