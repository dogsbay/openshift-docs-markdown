{%- set _mod_docs_content_type = "PROCEDURE" %}

# Deploying a demonstration application {id="zero-trust-manager-vault-deploy-demo_{{ context }}"}

Deploy a demonstration application to create a simple client that uses its SPIFFE identity to authenticate with Vault. By doing this you can verify that the client can successfully authenticate using the configured identity. {._abstract}

**Procedure**

1.  On your local machine, set the environment variables for your application by running the following commands:
    ```terminal
    $ export APP_NAME=client
    ```
    ```terminal
    $ export APP_NAMESPACE=demo
    ```
    ```terminal
    $ export AUDIENCE=$APP_NAME
    ```
1.  Apply the Kubernetes manifest to create the namespace, service account, and deployment for the demo app by running the following command. This deployment mounts the SPIFFE CSI driver socket.
    ```terminal
    $ oc apply -f - <<EOF
    # ... (paste the full YAML from your provided code here) ...
    EOF>>
    ```

**Verification**

*   Verify that the client deployment is ready by running the following command:
    ```terminal
    $ oc get deploy -n $APP_NAMESPACE
    ```
    ```terminal title="Example output"
    NAME             READY        UP-TO-DATE      AVAILABLE     AGE
    frontend-app     2/2          2               2             120d
    backend-api      3/3          3               3             120d
    ```