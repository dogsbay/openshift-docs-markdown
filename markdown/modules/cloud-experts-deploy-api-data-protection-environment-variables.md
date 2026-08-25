{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up your environment {id="cloud-experts-deploy-api-data-protection-environment-variables_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Prerequisites**

{%- if not openshift_rosa_hcp %}
*   You have created a [{{ product_title }} cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-creating-a-cluster-quickly).
{% endif %}
{% if openshift_rosa_hcp %}
*   You have created a [{{ product_title }} cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-sts-creating-a-cluster-quickly).
{% endif %}

**Procedure**

*   Prepare the environment variables:

    :::note

    Change the cluster name to match your {{ product_title }} cluster and ensure you are logged into the cluster as an Administrator.
    Ensure all fields are output correctly before moving on.
    
    :::

    ```terminal
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    $ export ROSA_CLUSTER_ID=$(rosa describe cluster -c ${CLUSTER_NAME} --output json | jq -r .id)
    $ export REGION=$(rosa describe cluster -c ${CLUSTER_NAME} --output json | jq -r .region.id)
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o jsonpath='{.spec.serviceAccountIssuer}' | sed  's|^https://||')
    $ export AWS_ACCOUNT_ID=`aws sts get-caller-identity --query Account --output text`
    $ export CLUSTER_VERSION=`rosa describe cluster -c ${CLUSTER_NAME} -o json | jq -r .version.raw_id | cut -f -2 -d '.'`
    $ export ROLE_NAME="${CLUSTER_NAME}-openshift-oadp-aws-cloud-credentials"
    $ export AWS_PAGER=""
    $ export SCRATCH="/tmp/${CLUSTER_NAME}/oadp"
    $ mkdir -p ${SCRATCH}
    $ echo "Cluster ID: ${ROSA_CLUSTER_ID}, Region: ${REGION}, OIDC Endpoint: ${OIDC_ENDPOINT}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```