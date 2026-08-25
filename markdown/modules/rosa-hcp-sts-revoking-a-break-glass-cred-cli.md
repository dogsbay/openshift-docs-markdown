{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoking a break glass credential for a {{ product_title }} cluster {id="rosa-hcp-sts-revoking-a-break-glass-cred-cli_{{ context }}"}

You can revoke access to any break glass credentials that you have provisioned at any time by using the `revoke break-glass-credentials` command. {._abstract}

**Prerequisites**

*   You have created a break glass credential.
*   You are the cluster owner.

**Procedure**

*   Revoke the break glass credentials for a {{ product_title }} cluster by running the following command.

    :::important

    Running this command revokes access for all break glass credentials related to the cluster.
    
    :::

    ```terminal
    $ rosa revoke break-glass-credentials -c <cluster_name>
    ```
    ```terminal title="Example output"
    ? Are you sure you want to revoke all the break glass credentials on cluster 'my-cluster'?: Yes
    I: Successfully requested revocation for all break glass credentials from cluster 'my-cluster'
    ```

**Verification**

*   The revocation process can take several minutes. You can verify that the break glass credentials for your clusters have been revoked by running one of the following commands:
    *   List all break glass credentials and check the status of each:
        ```terminal
        $ rosa list break-glass-credential -c <cluster_name>
        ```
        ```terminal title="Example output"
        ID                                USERNAME    STATUS
        2330dbs0n8m3chkkr25gkkcd8pnj3lk2  test-user   awaiting_revocation
        ```
    *   You can also verify the status by checking the individual credential:
        ```terminal
        $ rosa describe break-glass-credential <break_glass_credential_id> -c <cluster_name>
        ```
        ```terminal title="Example output"
        ID:                                    2330dbs0n8m3chkkr25gkkcd8pnj3lk2
        Username:                              test-user
        Expire at:                             Dec 28 2026 10:23:05 EDT
        Status:                                issued
        Revoked at:                            Dec 27 2026 15:30:33 EDT
        ```