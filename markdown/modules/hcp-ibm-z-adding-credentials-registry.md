{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding credentials and the registry certificate authority to the management cluster {id="hcp-ibm-z-adding-credentials-registry_{{ context }}"}

To pull the mirror registry images from the management cluster, you must first add credentials and the certificate authority of the mirror registry to the management cluster. {._abstract}

**Procedure**

1.  Create a `ConfigMap` with the certificate of the mirror registry by running the following command:
    ```terminal
    $ oc apply -f registry-config.yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: registry-config
      namespace: openshift-config
    data:
      <mirror_registry>: |
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----
    #...
    ```
1.  Patch the `image.config.openshift.io` cluster-wide object to include the following entries:
    ```yaml
    spec:
      additionalTrustedCA:
        - name: registry-config
    ```
1.  Update the management cluster pull secret to add the credentials of the mirror registry.
    1.  Fetch the pull secret from the cluster in a JSON format by running the following command:
        ```terminal
        $ oc get secret/pull-secret -n openshift-config -o json \
          | jq -r '.data.".dockerconfigjson"' \
          | base64 -d > authfile
        ```
    1.  Edit the fetched secret JSON file to include a section with the credentials of the certificate authority:
        ```terminal
          "auths": {
            "<mirror_registry>": {
              "auth": "<credentials>",
              "email": "you@example.com"
            }
          },
        ```
        *   `<mirror_registry>` specifies the name of the mirror registry.
        *   `<credentials>` specifies the credentials for the mirror registry to allow fetch of images.
    1.  Update the pull secret on the cluster by running the following command:
        ```terminal
        $ oc set data secret/pull-secret -n openshift-config \
          --from-file=.dockerconfigjson=authfile
        ```