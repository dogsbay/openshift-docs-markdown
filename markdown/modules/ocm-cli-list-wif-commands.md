{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing Workload Identity Federation clusters {id="ocm-cli-list-wif-commands_{{ context }}"}

You can list {{ product_title }} clusters that have been deployed using Workload Identity Federation (WIF) authentication by using the {{ cluster_manager }} CLI (`ocm`). {._abstract}

**Procedure**

*   To list all of your {{ product_title }} clusters that have been deployed using the WIF authentication type, run one of the following commands:
    *   Using the `--parameter` flag with the `search` option:
        ```terminal
        $ ocm list clusters --parameter search="gcp.authentication.wif_config_id != ''"
        ```
    *   Using a specific wif-config ID to filter the clusters associated with that configuration, replacing `<wif_config_id>` with the ID of the WIF configuration:
        ```terminal
        $ ocm list clusters --parameter search="gcp.authentication.wif_config_id = '<wif_config_id>'"
        ```