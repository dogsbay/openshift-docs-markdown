{%- set _mod_docs_content_type = "SNIPPET" %}

1.  Verify the deployment is active by running the following command:
    ```terminal
    $ gcloud infra-manager deployments describe <deployment_name> --format='value(state)'
    ```

    Replace `<deployment_name>` with the name of the deployment you created.
    ```terminal title="Example output"
    ACTIVE
    ```