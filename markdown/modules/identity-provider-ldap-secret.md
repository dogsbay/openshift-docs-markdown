{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the LDAP secret {id="identity-provider-creating-ldap-secret_{{ context }}"}

Create a secret that contains the LDAP bind password in the `openshift-config` namespace so the identity provider can authenticate to the directory. {._abstract}

**Procedure**

*   Create a `Secret` object that contains the `bindPassword` field by running the following command:
    ```terminal
    $ oc create secret generic ldap-secret --from-literal=bindPassword=<secret> -n openshift-config
    ```

    where:

    `<secret>`
    :   Specifies the LDAP bind password value for the `--from-literal` argument. The key name must be `bindPassword`.

*   Alternatively, apply the following YAML to create the secret:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: ldap-secret
      namespace: openshift-config
    type: Opaque
    data:
      bindPassword: <base64_encoded_bind_password>
    ```