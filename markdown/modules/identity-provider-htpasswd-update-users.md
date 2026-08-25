{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating users for an htpasswd identity provider {id="identity-provider-htpasswd-update-users_{{ context }}"}

You can add or remove users from an existing htpasswd identity provider.

**Prerequisites**

*   You have created a `Secret` object that contains the htpasswd user file. This procedure assumes that it is named `htpass-secret`.
*   You have configured an htpasswd identity provider. This procedure assumes that it is named `my_htpasswd_provider`.
*   You have access to the `htpasswd` utility. On Red Hat Enterprise Linux this is available by installing the `httpd-tools` package.
*   You have cluster administrator privileges.

**Procedure**

1.  Retrieve the htpasswd file from the `htpass-secret` `Secret` object and save the file to your file system:
    ```terminal
    $ oc get secret htpass-secret -ojsonpath={.data.htpasswd} -n openshift-config | base64 --decode > users.htpasswd
    ```
1.  Add or remove users from the `users.htpasswd` file.
    *   To add a new user:
        ```terminal
        $ htpasswd -bB users.htpasswd <username> <password>
        ```
        ```terminal title="Example output"
        Adding password for user <username>
        ```
    *   To remove an existing user:
        ```terminal
        $ htpasswd -D users.htpasswd <username>
        ```
        ```terminal title="Example output"
        Deleting password for user <username>
        ```
1.  Replace the `htpass-secret` `Secret` object with the updated users in the `users.htpasswd` file:
    ```terminal
    $ oc create secret generic htpass-secret --from-file=htpasswd=users.htpasswd --dry-run=client -o yaml -n openshift-config | oc replace -f -
    ```

    :::tip

    You can alternatively apply the following YAML to replace the secret:

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: htpass-secret
      namespace: openshift-config
    type: Opaque
    data:
      htpasswd: <base64_encoded_htpasswd_file_contents>
    ```
    
    :::

1.  If you removed one or more users, you must additionally remove existing resources for each user.
    1.  Delete the `User` object:
        ```terminal
        $ oc delete user <username>
        ```
        ```terminal title="Example output"
        user.user.openshift.io "<username>" deleted
        ```

        Be sure to remove the user, otherwise the user can continue using their token as long as it has not expired.
    1.  Delete the `Identity` object for the user:
        ```terminal
        $ oc delete identity my_htpasswd_provider:<username>
        ```
        ```terminal title="Example output"
        identity.user.openshift.io "my_htpasswd_provider:<username>" deleted
        ```