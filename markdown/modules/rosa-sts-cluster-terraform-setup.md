{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing your environment for Terraform {id="rosa-sts-cluster-terraform-setup_{{ context }}"}

Before you can create your {{ product_title }} cluster by using Terraform, you must export your offline {{ cluster_manager_first }} token to grant Terraform permission to access your account. {._abstract}

**Procedure**

1.  Optional: Because the Terraform files get created in your current directory during this procedure, you can create a new directory to store these files and navigate into it by running the following command:
    ```terminal
    $ mkdir terraform-cluster && cd terraform-cluster
    ```
1.  Grant permissions to your account by using [an offline {{ cluster_manager_first }} token](https://console.redhat.com/openshift/token).
1.  Copy your offline token, and set the token as an environmental variable by running the following command:
    ```terminal
    $ export RHCS_TOKEN=<your_offline_token>
    ```

    :::note

    This environmental variable resets at the end of each session, such as restarting your machine or closing the terminal.
    
    :::


**Verification**

*   After you export your token, verify the value by running the following command:
    ```terminal
    $ echo $RHCS_TOKEN
    ```