{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating secrets {id="builds-creating-secrets_{{ context }}"}

You must create a secret before creating the pods that depend on that secret.

When creating secrets:

*   Create a secret object with secret data.
*   Update the pod service account to allow the reference to the secret.
*   Create a pod, which consumes the secret as an environment variable or as a file using a `secret` volume.

**Procedure**

*   To create a secret object from a JSON or YAML file, enter the following command:
    ```terminal
    $ oc create -f <filename>
    ```

    For example, you can create a secret from your local `.docker/config.json` file:
    ```terminal
    $ oc create secret generic dockerhub \
        --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
        --type=kubernetes.io/dockerconfigjson
    ```

    This command generates a JSON specification of the secret named `dockerhub` and creates the object.
    ```yaml title="YAML Opaque Secret Object Definition"
    apiVersion: v1
    kind: Secret
    metadata:
      name: mysecret
    type: Opaque (1)
    data:
      username: <username>
      password: <password>
    ```
    1.  Specifies an _opaque_ secret.
    ```yaml title="Docker Configuration JSON File Secret Object Definition"
    apiVersion: v1
    kind: Secret
    metadata:
      name: aregistrykey
      namespace: myapps
    type: kubernetes.io/dockerconfigjson (1)
    data:
      .dockerconfigjson:bm5ubm5ubm5ubm5ubm5ubm5ubm5ubmdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cgYXV0aCBrZXlzCg== (2)
    ```
    1.  Specifies that the secret is using a docker configuration JSON file.
    1.  The output of a base64-encoded docker configuration JSON file.