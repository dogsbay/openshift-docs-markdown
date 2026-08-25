{% if context == "key-rotation-aws" %}
{%- set rotate_aws = true -%}
{% endif %}
{% if context == "key-rotation-gcp" %}
{%- set rotate_gcp = true -%}
{% endif %}
{% if context == "key-rotation-azure" %}
{%- set rotate_azure = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{% if rotate_aws %}
# Rotating {{ aws_short }} OIDC bound service account signer keys {id="rotating-bound-service-keys_{{ context }}"}
{% endif %}
{% if rotate_gcp %}
# Rotating {{ gcp_short }} OIDC bound service account signer keys {id="_rotating_gcp_short_oidc_bound_service_account_signer_keys"}
{% endif %}
{% if rotate_azure %}
# Rotating {{ azure_short }} OIDC bound service account signer keys {id="_rotating_azure_short_oidc_bound_service_account_signer_keys"}
{% endif %}

You can rotate the bound service account signer key for an {{ product_title }} cluster
{% if rotate_aws %}
on {{ aws_first }}
{% endif %}
{% if rotate_gcp %}
on {{ gcp_first }}
{% endif %}
{% if rotate_azure %}
on {{ azure_first }}
{% endif %}
that uses the Cloud Credential Operator (CCO) in manual mode with
{% if rotate_aws %}
{{ sts_short }}.
{% endif %}
{% if rotate_gcp %}
{{ gcp_wid_short }}.
{% endif %}
{% if rotate_azure %}
{{ entra_first }}.
{% endif %} {._abstract}

To rotate the key, you delete the existing key on your cluster, which causes the Kubernetes API server to create a new key.
To reduce authentication failures during this process, you must immediately add the new public key to the existing issuer file.
After the cluster is using the new key for authentication, you can remove any remaining keys.


:::important

The process to rotate OIDC bound service account signer keys is disruptive and takes a significant amount of time.
Some steps are time-sensitive.
Before proceeding, observe the following considerations:

*   Read the following steps and ensure that you understand and accept the time requirement.
The exact time requirement varies depending on the individual cluster, but it is likely to require at least one hour.
*   To reduce the risk of authentication failures, ensure that you understand and prepare for the time-sensitive steps.
*   During this process, you must refresh all service accounts and restart all pods on the cluster.
These actions are disruptive to workloads.
To mitigate this impact, you can temporarily halt these services and then redeploy them when the cluster is ready.

:::


**Prerequisites**

*   You have access to the {{ oc_first }} as a user with the `cluster-admin` role.

{% include "./snippets/ccoctl-provider-permissions-requirements.md" %}

*   You have configured the `ccoctl` utility.
*   Your cluster is in a stable state.
You can confirm that the cluster is stable by running the following command:
    ```terminal
    $ oc adm wait-for-stable-cluster --minimum-stable-period=5s
    ```

**Procedure**

1.  Configure the following environment variables:
    ```text
{%- if rotate_aws %}
    INFRA_ID=$(oc get infrastructures cluster -o jsonpath='{.status.infrastructureName}')
    CLUSTER_NAME=${INFRA_ID%-*}
{% endif %}
{% if rotate_gcp %}
    CURRENT_ISSUER=$(oc get authentication cluster -o jsonpath='{.spec.serviceAccountIssuer}')
    GCP_BUCKET=$(echo ${CURRENT_ISSUER} | cut -d "/" -f4)
    CLUSTER_NAME=${GCP_BUCKET%-*}
{% endif %}
{% if rotate_azure %}
    CURRENT_ISSUER=$(oc get authentication cluster -o jsonpath='{.spec.serviceAccountIssuer}')
    AZURE_STORAGE_ACCOUNT=$(echo ${CURRENT_ISSUER} | cut -d "/" -f3 | cut -d "." -f1)
    AZURE_STORAGE_CONTAINER=$(echo ${CURRENT_ISSUER} | cut -d "/" -f4)
{%- endif %}
    ```
{%- if rotate_aws %}

    where:

    `CLUSTER_NAME`
    :   This value should match the name of the cluster that was specified in the `metadata.name` field of the `install-config.yaml` file during installation.
{%- endif %}

    :::note

    Your cluster might differ from this example, and the resource names might not be derived identically from the cluster name.
    Ensure that you specify the correct corresponding resource names for your cluster.
    
    :::

{%- if rotate_aws %}
*   For {{ aws_short }} clusters that store the OIDC configuration in a public S3 bucket, configure the following environment variable:
    ```text
    AWS_BUCKET=$(oc get authentication cluster -o jsonpath={'.spec.serviceAccountIssuer'} | awk -F'://' '{print$2}' |awk -F'.' '{print$1}')
    ```
*   For {{ aws_short }} clusters that store the OIDC configuration in a private S3 bucket that is accessed by the IAM identity provider through a public CloudFront distribution URL, complete the following steps:
    1.  Extract the public CloudFront distribution URL by running the following command:
        ```terminal
        $ basename $(oc get authentication cluster -o jsonpath={'.spec.serviceAccountIssuer'} )
        ```
        ```text title="Example output"
        <subdomain>.cloudfront.net
        ```

        where `<subdomain>` is an alphanumeric string.
    1.  Determine the private S3 bucket name by running the following command:
        ```terminal
        $ aws cloudfront list-distributions --query "DistributionList.Items[].{DomainName: DomainName, OriginDomainName: Origins.Items[0].DomainName}[?contains(DomainName, '<subdomain>.cloudfront.net')]"
        ```
        ```text title="Example output"
        [
            {
                "DomainName": "<subdomain>.cloudfront.net",
                "OriginDomainName": "<s3_bucket>.s3.us-east-2.amazonaws.com"
            }
        ]
        ```

        where `<s3_bucket>` is the private S3 bucket name for your cluster.
    1.  Configure the following environment variable:
        ```text
        AWS_BUCKET=$<s3_bucket>
        ```

        where `<s3_bucket>` is the private S3 bucket name for your cluster.
{% endif %}
1.  Create a temporary directory to use and assign it an environment variable by running the following command:
    ```terminal
    $ TEMPDIR=$(mktemp -d)
    ```
1.  To cause the Kubernetes API server to create a new bound service account signing key, you delete the next bound service account signing key.

    :::important

    After you complete this step, the Kubernetes API server starts to roll out a new key.
    To reduce the risk of authentication failures, complete the remaining steps as quickly as possible.
    The remaining steps might be disruptive to workloads.
    
    :::


    When you are ready, delete the next bound service account signing key by running the following command:
    ```terminal
    $ oc delete secrets/next-bound-service-account-signing-key \
      -n openshift-kube-apiserver-operator
    ```
1.  Download the public key from the service account signing key secret that the Kubernetes API server created by running the following command:
    ```terminal
    $ oc get secret/next-bound-service-account-signing-key \
      -n openshift-kube-apiserver-operator \
      -ojsonpath='{ .data.service-account\.pub }' | base64 \
      -d > ${TEMPDIR}/serviceaccount-signer.public
    ```
1.  Use the public key to create a `keys.json` file by running the following command:
    {%- if rotate_aws %}
    ```terminal
    $ ccoctl aws create-identity-provider \
      --dry-run \
      --output-dir ${TEMPDIR} \
      --public-key-file=${TEMPDIR}/serviceaccount-signer.public \
      --name fake \
      --region us-east-1
    ```

    where:

    `--dry-run`
    :   The dry run mode outputs files, including the new `keys.json` file, to the disk without making API calls.

    `--public-key-file`
    :   The path to the public key that you downloaded in the previous step.

    `--name`
    :   Some parameters do not require real values because the `--dry-run` option does not make any API calls.

    `--region`
    :   Any valid {{ aws_short }} region, such as `us-east-1`.
        This value does not need to match the region the cluster is in.
{% endif %}
{% if rotate_gcp %}
    ```terminal
    $ ccoctl gcp create-workload-identity-provider \
      --dry-run \
      --output-dir=${TEMPDIR} \
      --public-key-file=${TEMPDIR}/serviceaccount-signer.public \
      --name fake \
      --project fake \
      --workload-identity-pool fake
    ```
    where:
    `--dry-run`:: The dry run mode outputs files, including the new `keys.json` file, to the disk without making API calls.
    `--public-key-file`:: The path to the public key that you downloaded in the previous step.
    `--name`:: Some parameters do not require real values because the `--dry-run` option does not make any API calls.
{% endif %}
{% if rotate_azure %}
    ```terminal
    $ ccoctl aws create-identity-provider \
      --dry-run \
      --output-dir ${TEMPDIR} \
      --public-key-file=${TEMPDIR}/serviceaccount-signer.public \
      --name fake \
      --region us-east-1
    ```
    where:
    `ccoctl aws`:: The command does not include a `--dry-run` option.
    To use the `--dry-run` option, you must specify `aws` for an {{ azure_short }} cluster.
    `--dry-run`:: The dry run mode outputs files, including the new `keys.json` file, to the disk without making API calls.
    `--public-key-file`:: The path to the public key that you downloaded in the previous step.
    `--name`:: Some parameters do not require real values because the `--dry-run` option does not make any API calls.
    `--region`:: Any valid {{ aws_short }} region, such as `us-east-1`.
    This value does not need to match the region the cluster is in.
{% endif %}

1.  Rename the `keys.json` file by running the following command:
    ```terminal
    $ cp ${TEMPDIR}/<number>-keys.json ${TEMPDIR}/jwks.new.json
    ```

    where `<number>` is a two-digit numerical value that varies depending on your environment.
1.  Download the existing `keys.json` file from the cloud provider by running the following command:
    {%- if rotate_aws %}
    ```terminal
    $ aws s3api get-object \
      --bucket ${AWS_BUCKET} \
      --key keys.json ${TEMPDIR}/jwks.current.json
    ```
{% endif %}
{% if rotate_gcp %}
    *   For {{ gcp_short }} clusters that store OIDC keys in a public bucket, run the following command:
        ```terminal
        $ gcloud storage cp gs://${GCP_BUCKET}/keys.json ${TEMPDIR}/jwks.current.json
        ```
    *   For {{ gcp_short }} clusters that attach OIDC keys directly to the workload identity pool, run the following command:
        ```terminal
        $ gcloud iam workload-identity-pools providers describe \
          --format json \
          --location global \
          --workload-identity-pool ${CLUSTER_NAME} ${CLUSTER_NAME} \
          | jq -r ".oidc.jwksJson" > ${TEMPDIR}/jwks.current.json
        ```
{% endif %}
{% if rotate_azure %}
        ```terminal
        $ az storage blob download \
          --container-name ${AZURE_STORAGE_CONTAINER} \
          --account-name ${AZURE_STORAGE_ACCOUNT} \
          --name 'openid/v1/jwks' \
          -f ${TEMPDIR}/jwks.current.json
        ```
{% endif %}
1.  Combine the two `keys.json` files by running the following command:
    ```terminal
    $ jq -s '{ keys: map(.keys[])}' ${TEMPDIR}/jwks.current.json ${TEMPDIR}/jwks.new.json > ${TEMPDIR}/jwks.combined.json
    ```
1.  To enable authentication for the old and new keys during the rotation, upload the combined `keys.json` file to the cloud provider by running the following command:
    {%- if rotate_aws %}
    ```terminal
    $ aws s3api put-object \
      --bucket ${AWS_BUCKET} \
      --tagging "openshift.io/cloud-credential-operator/${CLUSTER_NAME}=owned" \
      --key keys.json \
      --body ${TEMPDIR}/jwks.combined.json
    ```
{% endif %}
{% if rotate_gcp %}
    *   For {{ gcp_short }} clusters that store OIDC keys in a public bucket, run the following command:
        ```terminal
        $ gcloud storage cp ${TEMPDIR}/jwks.combined.json gs://${GCP_BUCKET}/keys.json
        ```
    *   For {{ gcp_short }} clusters that attach OIDC keys directly to the workload identity pool, run the following command:
        ```terminal
        $ gcloud iam workload-identity-pools providers update-oidc ${CLUSTER_NAME} \
          --location=global \
          --workload-identity-pool=${CLUSTER_NAME} \
          --jwk-json-path=${TEMPDIR}/jwks.combined.json
        ```
{% endif %}
{% if rotate_azure %}
        ```terminal
        $ az storage blob upload \
          --overwrite \
          --account-name ${AZURE_STORAGE_ACCOUNT} \
          --container-name ${AZURE_STORAGE_CONTAINER} \
          --name 'openid/v1/jwks' \
          -f ${TEMPDIR}/jwks.combined.json
        ```
{% endif %}
1.  Wait for the Kubernetes API server to update and use the new key.
You can monitor the update progress by running the following command:
    ```terminal
    $ oc adm wait-for-stable-cluster
    ```

    This process might take 15 minutes or longer.
    The following output indicates that the process is complete:
    ```text
    All clusteroperators are stable
    ```
1.  To ensure that all pods on the cluster use the new key, you must restart them.

    :::important

    This step maintains uptime for services that are configured for high availability across multiple nodes, but might cause downtime for any services that are not.
    
    :::


    Restart all of the pods in the cluster by running the following command:
    ```terminal
    $ oc adm reboot-machine-config-pool mcp/worker mcp/master
    ```
1.  Monitor the restart and update process by running the following command:
    ```terminal
    $ oc adm wait-for-node-reboot nodes --all
    ```

    This process might take 15 minutes or longer.
    The following output indicates that the process is complete:
    ```text
    All nodes rebooted
    ```
1.  Monitor the update progress by running the following command:
    ```terminal
    $ oc adm wait-for-stable-cluster
    ```

    This process might take 15 minutes or longer.
    The following output indicates that the process is complete:
    ```text
    All clusteroperators are stable
    ```
1.  Replace the combined `keys.json` file with the updated `keys.json` file on the cloud provider by running the following command:
    {%- if rotate_aws %}
    ```terminal
    $ aws s3api put-object \
      --bucket ${AWS_BUCKET} \
      --tagging "openshift.io/cloud-credential-operator/${CLUSTER_NAME}=owned" \
      --key keys.json \
      --body ${TEMPDIR}/jwks.new.json
    ```
{% endif %}
{% if rotate_gcp %}
    *   For {{ gcp_short }} clusters that store OIDC keys in a public bucket, run the following command:
        ```terminal
        $ gcloud storage cp ${TEMPDIR}/jwks.new.json gs://${GCP_BUCKET}/keys.json
        ```
    *   For {{ gcp_short }} clusters that attach OIDC keys directly to the workload identity pool, run the following command:
        ```terminal
        $ gcloud iam workload-identity-pools providers update-oidc ${CLUSTER_NAME} \
          --location=global \
          --workload-identity-pool=${CLUSTER_NAME} \
          --jwk-json-path=${TEMPDIR}/jwks.new.json
        ```
{% endif %}
{% if rotate_azure %}
        ```terminal
        $ az storage blob upload \
          --overwrite \
          --account-name ${AZURE_STORAGE_ACCOUNT} \
          --container-name ${AZURE_STORAGE_CONTAINER} \
          --name 'openid/v1/jwks' \
          -f ${TEMPDIR}/jwks.new.json
        ```
{% endif %}

{% if context == "key-rotation-aws" %}
{%- set rotate_aws = false -%}
{% endif %}
{% if context == "key-rotation-gcp" %}
{%- set rotate_gcp = false -%}
{% endif %}
{% if context == "key-rotation-azure" %}
{%- set rotate_azure = false -%}
{% endif %}