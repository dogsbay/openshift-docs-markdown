{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up your environment {id="cloud-experts-using-cloudfront-and-waf-setup-environ_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Prerequisites**

*   You have created a {{ product_title }} cluster.
*   You have access to the {{ oc_first }}.
*   You have access to the AWS CLI (`aws`).

**Procedure**

1.  In your terminal, configure the following environment variables:
    ```terminal
    $ export DOMAIN=apps.example.com
    $ export AWS_PAGER=""
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    $ export REGION=$(oc get infrastructure cluster -o=jsonpath="{.status.platformStatus.aws.region}")
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    $ export SCRATCH="/tmp/${CLUSTER}/cloudfront-waf"
    $ mkdir -p ${SCRATCH}
    $ echo "Cluster: ${CLUSTER}, Region: ${REGION}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```
1.  Replace the `DOMAIN` value `apps.example.com` with the custom domain you want to use for the `IngressController`.

    :::note

    The "Cluster" output from the previous command might be the name of your cluster, the internal ID of your cluster, or the cluster’s domain prefix. If you prefer to use another identifier, you can manually set this value by running the following command:
    ```terminal
    $ export CLUSTER=my-custom-value
    ```
    
    :::