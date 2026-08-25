{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up your environment {id="cloud-experts-using-alb-and-waf-environment-setup_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Prerequisites**

*   You have created a multiple availability zone (AZ) {{ product_title }} cluster.

    :::note

    AWS ALBs require at least two _public_ subnets across AZs, [per the AWS documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#availability-zones). For this reason, only multiple AZ {{ product_title }} clusters can be used with ALBs.
    
    :::

*   You have access to the {{ oc_first }}.
*   You have access to the AWS CLI (`aws`).

**Procedure**

*   Configure the following environment variables:
    ```terminal
    $ export AWS_PAGER=""
    $ export CLUSTER=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}")
    $ export REGION=$(oc get infrastructure cluster -o=jsonpath="{.status.platformStatus.aws.region}")
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o jsonpath='{.spec.serviceAccountIssuer}' | sed  's|^https://||')
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    $ export SCRATCH="/tmp/${CLUSTER}/alb-waf"
    $ mkdir -p ${SCRATCH}
    $ echo "Cluster: $(echo ${CLUSTER} | sed 's/-[a-z0-9]\{5\}$//'), Region: ${REGION}, OIDC Endpoint: ${OIDC_ENDPOINT}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```