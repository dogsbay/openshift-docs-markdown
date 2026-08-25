{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare your environment for AWS Secrets Manager {id="cloud-experts-aws-secret-manager-preparing-environment_{{ context }}"}

Before creating your application, you need to gain access to your {{ product_title }} cluster and configure it with permissions and variables required by the AWS Secrets and Configuration Provider. {._abstract}

**Prerequisites**

*   You have created a {{ product_title }} cluster deployed with Security Token Service (STS).
*   You have installed Helm 3.
*   You have access to the AWS CLI (`aws`).
*   You have access to the {{ oc_first }}.
*   You have access to the `jq` CLI.

**Procedure**

1.  Log in to your {{ product_title }} cluster by running the following command:
    ```terminal
    $ oc login --token=<your-token> --server=<your-server-url>
    ```

    You can find your login token by accessing your cluster in {{ cluster_manager_url_pull }}.
1.  Validate that your cluster has STS by running the following command:
    ```terminal
    $ oc get authentication.config.openshift.io cluster -o json \
      | jq .spec.serviceAccountIssuer
    ```
    ```terminal title="Example output"
    "https://xxxxx.cloudfront.net/xxxxx"
    ```

    If your output is different, do not proceed.
    See
{%- if not openshift_rosa_hcp %}
    [Red&#160;Hat documentation on creating an STS cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-creating-a-cluster-quickly) before continuing this process.
{%- endif %}
{%- if openshift_rosa_hcp %}
    [Red&#160;Hat documentation on creating an STS cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-sts-creating-a-cluster-quickly) before continuing this process.
{%- endif %}
1.  Set the `SecurityContextConstraints` permission to allow the Container Storage Interface (CSI) driver to run by running the following command:
    ```terminal
    $ oc new-project csi-secrets-store
    $ oc adm policy add-scc-to-user privileged \
        system:serviceaccount:csi-secrets-store:secrets-store-csi-driver
    $ oc adm policy add-scc-to-user privileged \
        system:serviceaccount:csi-secrets-store:csi-secrets-store-provider-aws
    ```
1.  Create environment variables to use later in this process by running the following command:
    ```terminal
    $ export REGION=$(oc get infrastructure cluster -o=jsonpath="{.status.platformStatus.aws.region}")
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster \
       -o jsonpath='{.spec.serviceAccountIssuer}' | sed  's|^https://||')
    $ export AWS_ACCOUNT_ID=`aws sts get-caller-identity --query Account --output text`
    $ export AWS_PAGER=""
    ```