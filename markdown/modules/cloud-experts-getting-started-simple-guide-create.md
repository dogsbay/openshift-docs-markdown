{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating required cluster creation roles {id="cloud-experts-getting-started-simple-guide-create_{{ context }}"}

You create your required cluster creation roles using {{ rosa_cli_first }}. {._abstract}

**Procedure**

1.  Run the following command _once_ for each AWS account and y-stream OpenShift version:
    ```terminal
    rosa create account-roles --mode auto --yes
    ```
1.  Create one {{ cluster_manager }} role for each AWS account by running the following command:
    ```terminal
    rosa create ocm-role --mode auto --admin --yes
    ```
1.  Create one {{ cluster_manager }} user role for each AWS account by running the following command:
    ```terminal
    rosa create user-role --mode auto --yes
    ```
1.  Use the {{ cluster_manager_url }} to select your AWS account, cluster options, and begin deployment.
1.  {{ cluster_manager }} UI displays cluster status.

    ![cloud-experts-getting-started-deployment-ui-cluster-create](/images/cloud-experts-getting-started-deployment-ui-cluster-create.png)