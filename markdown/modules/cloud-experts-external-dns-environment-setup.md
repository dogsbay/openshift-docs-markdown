{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up your environment {id="cloud-experts-external-dns-environment-setup_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Procedure**

1.  In your terminal, configure the following environment variables:
    ```terminal
    $ export DOMAIN=<apps.example.com>
    $ export AWS_PAGER=""
    $ export CLUSTER=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    $ export REGION=$(oc get infrastructure cluster -o=jsonpath="{.status.platformStatus.aws.region}")
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    $ export SCRATCH="/tmp/${CLUSTER}/external-dns"
    $ mkdir -p ${SCRATCH}
    ```
    where:


    `apps.example.com`
    :   Replace with the custom domain you want to use for the `IngressController`.
1.  Ensure all fields output correctly before moving to the next section:
    ```terminal
    $ echo "Cluster: ${CLUSTER}, Region: ${REGION}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```

    :::note

    The "Cluster" output from the previous command may be the name of your cluster, the internal ID of your cluster, or the cluster’s domain prefix. If you prefer to use another identifier, you can manually set this value by running the following command:

    ```terminal
    $ export CLUSTER=my-custom-value
    ```
    
    :::