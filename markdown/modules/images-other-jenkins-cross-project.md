{%- set _mod_docs_content_type = "PROCEDURE" %}
# Providing Jenkins cross project access {id="images-other-jenkins-cross-project_{{ context }}"}

If you are going to run Jenkins somewhere other than your same project, you must provide an access token to Jenkins to access your project.

**Procedure**

1.  Identify the secret for the service account that has appropriate permissions to access the project that Jenkins must access by entering the following command:
    ```terminal
    $ oc describe serviceaccount jenkins
    ```
    ```terminal title="Example output"
    Name:       default
    Labels:     <none>
    Secrets:    {  jenkins-token-uyswp    }
                {  jenkins-dockercfg-xcr3d    }
    Tokens:     jenkins-token-izv1u
                jenkins-token-uyswp
    ```

    In this case the secret is named `jenkins-token-uyswp`.
1.  Retrieve the token from the secret by entering the following command:
    ```terminal
    $ oc describe secret <secret name from above>
    ```
    ```terminal title="Example output"
    Name:       jenkins-token-uyswp
    Labels:     <none>
    Annotations:    kubernetes.io/service-account.name=jenkins,kubernetes.io/service-account.uid=32f5b661-2a8f-11e5-9528-3c970e3bf0b7
    Type:   kubernetes.io/service-account-token
    Data
    ====
    ca.crt: 1066 bytes
    token:  eyJhbGc..<content cut>....wRA
    ```

    The token parameter contains the token value Jenkins requires to access the project.