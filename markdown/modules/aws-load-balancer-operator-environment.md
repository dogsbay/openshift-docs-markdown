{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up temporary environment variables {id="aws-load-balancer-operator-environment_{{ context }}"}

You have the option to set up temporary environment variables to hold resource identifiers and configuration details. Using temporary environment variables streamlines the process of running the installation commands for the AWS Load Balancer Operator. {._abstract}

If you do not want to use environment variables to store certain values, you can manually enter those values in the relevant installation commands.

**Prerequisites**

*   You have installed the AWS CLI (`aws`).
*   You have installed the {{ oc_first }}. 

**Procedure**

1.  Log in to your cluster as a cluster administrator using the {{ oc_first }}.
    ```terminal
    $ oc login --token=<token> --server=<cluster_url>
    ```
1.  Run the following commands to set up environment variables.
    ```terminal
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.apiServerURL}" | sed  's|^https://||' | awk -F . '{print $2}')
    ```
    ```terminal
    $ export REGION=$(oc get infrastructure cluster -o=jsonpath="{.status.platformStatus.aws.region}")
    ```
    ```terminal
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o jsonpath='{.spec.serviceAccountIssuer}' | sed  's|^https://||')
    ```
    ```terminal
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    ```
    ```terminal
    $ export SCRATCH="/tmp/${CLUSTER_NAME}/alb-operator"
    ```
    ```terminal
    $ mkdir -p ${SCRATCH}
    ```

    These commands create environment variables that you can use in this terminal session to pass their values to the command line interface.
1.  Verify that the environment variables have correct values by running the following command:
    ```terminal
    $ echo "Cluster name: ${CLUSTER_NAME}
    Region: ${REGION}
    OIDC Endpoint: ${OIDC_ENDPOINT}
    AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```
    ```terminal title="Example output"
    Cluster name: <cluster_id>
    Region: <region>
    OIDC Endpoint: oidc.op1.openshiftapps.com/<oidc_id>
    AWS Account ID: <aws_id>
    ```
1.  Use the same terminal session to continue with AWS Load Balancer Operator installation, to ensure that your environment variables are not lost.