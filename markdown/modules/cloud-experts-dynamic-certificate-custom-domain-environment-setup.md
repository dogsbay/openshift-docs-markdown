{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up your environment {id="cloud-experts-external-dns-environment-setup_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Procedure**

1.  In your terminal, configure the following environment variables:
    ```terminal
    $ export DOMAIN=apps.example.com
    $ export EMAIL=email@example.com
    $ export AWS_PAGER=""
    $ export CLUSTER=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o json | jq -r .spec.serviceAccountIssuer | sed  's|^https://||')
    $ export REGION=$(oc get infrastructure cluster -o=jsonpath="{.status.platformStatus.aws.region}")
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    $ export SCRATCH="/tmp/${CLUSTER}/dynamic-certs"
    $ mkdir -p ${SCRATCH}
    ```
    where:


    `DOMAIN=apps.example.com`
    :   replace with the custom domain you want to use for the `IngressController`.

    `EMAIL=email@example.com`
    :   replace with the e-mail you want Let’s Encrypt to use to send notifications about your certificates.
1.  Ensure all fields output correctly before moving to the next section:
    ```terminal
    $ echo "Cluster: ${CLUSTER}, Region: ${REGION}, OIDC Endpoint: ${OIDC_ENDPOINT}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```

    :::note

    The "Cluster" output from the previous command may be the name of your cluster, the internal ID of your cluster, or the cluster’s domain prefix. If you prefer to use another identifier, you can manually set this value by running the following command:

    ```terminal
    $ export CLUSTER=my-custom-value
    ```
    
    :::