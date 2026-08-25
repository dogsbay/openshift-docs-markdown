{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a BMC secret {id="bmo-creating-a-bmc-secret_{{ context }}"}

To deploy a bare-metal host, you must create a secret to access the baseboard management controller (BMC). This means you can remotely provision or manage the physical hardware. {._abstract}

**Procedure**

1.  Create a BMC secret file by running the following command:
    ```terminal
    $ vim bmaas-<name>-bmc-secret.yaml
    ```

    Replace `<name>` with the name of the bare-metal host.
1.  Edit the secret:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: bmaas-<name>-bmc-secret
      namespace: bmaas
    type: Opaque
    data:
      username: <base64_of_uid>
      password: <base64_of_pwd>
    ```

    &lt;base64_of_uid>
    :   Replace `<base64_of_uid>` with the BMC user name as a Base64-encoded string.

    &lt;base64_of_pwd>
    :   Replace `<base64_of_pwd>` with the BMC password as a Base64-encoded string.

1.  Apply the BMC secret by running the following command:
    ```terminal
    $ oc apply -f bmaas-<name>-bmc-secret.yaml
    ```