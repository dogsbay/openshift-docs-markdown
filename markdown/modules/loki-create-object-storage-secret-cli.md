{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret for Loki object storage by using the CLI {id="loki-create-object-storage-secret-cli_{{ context }}"}

To configure Loki object storage, you must create a secret. You can do this by using the {{ oc_first }}.

**Prerequisites**

*   You have administrator permissions.
*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.

**Procedure**

*   Create a secret in the directory that contains your certificate and key files by running the following command:
    ```terminal
    $ oc create secret generic -n openshift-logging <your_secret_name> \
     --from-file=tls.key=<your_key_file>
     --from-file=tls.crt=<your_crt_file>
     --from-file=ca-bundle.crt=<your_bundle_file>
     --from-literal=username=<your_username>
     --from-literal=password=<your_password>
    ```


:::note

Use generic or opaque secrets for best results.

:::


**Verification**

*   Verify that a secret was created by running the following command:
    ```terminal
    $ oc get secrets
    ```