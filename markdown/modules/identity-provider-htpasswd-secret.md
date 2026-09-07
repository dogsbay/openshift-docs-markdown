{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the htpasswd secret {id="identity-provider-creating-htpasswd-secret_{{ context }}"}

Create an {{ product_title }} secret from your `htpasswd` file so the `htpasswd` identity provider can read user credentials for cluster login. {._abstract}

**Prerequisites**

*   You created an `htpasswd` file.

**Procedure**

*   Create a `Secret` object that contains the `htpasswd` users file by running the following command:
    ```terminal
    $ oc create secret generic htpass-secret --from-file=htpasswd=<path_to_users.htpasswd> -n openshift-config
    ```

    The `--from-file` key must be named `htpasswd`.

    :::tip

    You can alternatively apply the following YAML to create the secret:

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