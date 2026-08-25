{%- set _mod_docs_content_type = "PROCEDURE" %}

# Resolving the "secret already exists" error {id="chains-resolving-existing-secret_{{ context }}"}

If the `signing-secret` secret is already populated, the command to create this secret might output the following error message:

```terminal
Error from server (AlreadyExists): secrets "signing-secrets" already exists
```

You can resolve this error by deleting the secret.

**Procedure**

1.  Delete the `signing-secret` secret by running the following command:
    ```terminal
    $ oc delete secret signing-secrets -n openshift-pipelines
    ```
1.  Re-create the key pairs and store them in the secret using your preferred signing scheme.