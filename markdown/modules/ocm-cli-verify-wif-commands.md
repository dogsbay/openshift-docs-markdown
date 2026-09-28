{%- set _mod_docs_content_type = "PROCEDURE" %}

# Verify a Workload Identity Federation configuration {id="ocm-cli-verify-wif-commands_{{ context }}"}

You can verify that the configuration of resources associated with a Workload Identity Federation (WIF) configuration are correct by running the `ocm gcp verify wif-config` command. {._abstract}

**Procedure**

1.  Get the name and ID of your active WIF configurations by running the following command:
    ```terminal
    $ ocm gcp list wif-configs
    ```
1.  Determine if the WIF configuration you want to verify is configured correctly by running the following command, replacing `<wif_config_name>` and `<wif_config_id>` with the name and ID of your WIF configuration, respectively:
    ```terminal
    $ ocm gcp verify wif-config <wif_config_name>|<wif_config_id>
    ```

    If a misconfiguration is found, the output provides details about the misconfiguration and recommends that you update the WIF configuration.
    ```terminal title="Example output"
    Error: verification failed with error: missing role 'compute.storageAdmin'.
    Running 'ocm gcp update wif-config' may fix errors related to cloud resource misconfiguration.
    exit status 1.
    ```