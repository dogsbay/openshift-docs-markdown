{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up your environment {id="cloud-experts-using-aws-ack-environment-setup_{{ context }}"}

Set environment variables to ensure consistency across the commands within this tutorial. {._abstract}

**Prerequisites**

*   You have created a {{ product_title }} cluster.
*   You have access to a user account with `cluster-admin` privileges.
*   You have access to the {{ oc_first }}.
*   You have access to the AWS CLI (`aws`).

**Procedure**

1.  Configure the following environment variables, changing the cluster name to suit your cluster:
    ```terminal
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    $ export REGION=$(rosa describe cluster -c ${ROSA_CLUSTER_NAME} --output json | jq -r .region.id)
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o json | jq -r .spec.serviceAccountIssuer | sed  's|^https://||')
    $ export AWS_ACCOUNT_ID=`aws sts get-caller-identity --query Account --output text`
    $ export ACK_SERVICE=s3
    $ export ACK_SERVICE_ACCOUNT=ack-${ACK_SERVICE}-controller
    $ export POLICY_ARN=arn:aws:iam::aws:policy/AmazonS3FullAccess
    $ export AWS_PAGER=""
    $ export SCRATCH="/tmp/${ROSA_CLUSTER_NAME}/ack"
    $ mkdir -p ${SCRATCH}
    ```
1.  Ensure all fields output correctly:
    ```terminal
    $ echo "Cluster: ${ROSA_CLUSTER_NAME}, Region: ${REGION}, OIDC Endpoint: ${OIDC_ENDPOINT}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```