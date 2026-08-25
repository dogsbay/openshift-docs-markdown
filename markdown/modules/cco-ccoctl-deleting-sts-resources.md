{% if context == "uninstall-cluster-aws" %}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set cp_name = "aws" -%}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "uninstalling-cluster-gcp" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set cp_name = "gcp" -%}
{%- set gcp_workload_id = true -%}
{% endif %}
{% if context == "uninstall-cluster-azure" %}
{%- set cp_first = "Microsoft Azure" -%}
{%- set cp = "Azure" -%}
{%- set cp_name = "azure" -%}
{%- set azure_workload_id = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting {{ cp_first }} resources with the Cloud Credential Operator utility {id="cco-ccoctl-deleting-sts-resources_{{ context }}"}

After uninstalling an {{ product_title }} cluster that uses short-term credentials managed outside the cluster, you can use the Cloud Credential Operator (CCO) utility (`ccoctl`) to remove the {{ cp_first }} resources that `ccoctl` created during installation. {._abstract}

**Prerequisites**

*   Extract and prepare the `ccoctl` binary.
*   Uninstall an {{ product_title }} cluster on {{ cp }} that uses short-term credentials.

**Procedure**

{%- if gcp_workload_id %}
1.  Set a `$RELEASE_IMAGE` variable with the release image from your installation file by running the following command:
    ```terminal
    $ RELEASE_IMAGE=$(./openshift-install version | awk '/release image/ {print $3}')
    ```
1.  Extract the list of `CredentialsRequest` custom resources (CRs) from the {{ product_title }} release image by running the following command:
    ```terminal
    $ oc adm release extract \
      --from=$RELEASE_IMAGE \
      --credentials-requests \
      --included \
      --to=<path_to_directory_for_credentials_requests>
    ```

    where:

    `--included`
    :   The parameter includes only the manifests that your specific cluster configuration requires.

    `<path_to_directory_for_credentials_requests>`
    :   Specify the path to the directory where you want to store the `CredentialsRequest` objects. If the specified directory does not exist, this command creates it.

1.  Delete the {{ cp }} resources that `ccoctl` created by running the following command:
{%- endif %}
{%- if aws_sts or azure_workload_id %}
* Delete the {{ cp }} resources that `ccoctl` created by running the following command:
{%- endif %}

```terminal {minja}
$ ccoctl {{ cp_name }} delete \
  --name=<name> \
{%- if aws_sts %}
  --region=<{{ cp_name }}_region>
{%- endif %}
{%- if gcp_workload_id %}
  --project=<{{ cp_name }}_project_id> \
  --credentials-requests-dir=<path_to_credentials_requests_directory> \
  --force-delete-custom-roles
{%- endif %}
{%- if azure_workload_id %}
  --region=<{{ cp_name }}_region> \
  --subscription-id=<{{ cp_name }}_subscription_id> \
  --delete-oidc-resource-group
{%- endif %}
```

where:


`<name>`
:   Matches the name that was originally used to create and tag the cloud resources.
{%- if aws_sts or azure_workload_id %}

`<{{ cp_name }}_region>`{minja}
:   is the {{ cp }} region in which to delete cloud resources.
{%- endif %}
{%- if gcp_workload_id %}

`<{{ cp_name }}_project_id>`{minja}
:   The {{ cp }} project ID in which to delete cloud resources.

`force-delete-custom-roles`
:   Optional: This parameter deletes the custom roles that the `ccoctl` utility creates during installation. {{ gcp_short }} does not permanently delete custom roles immediately. For more information, see {{ gcp_short }} documentation about [deleting a custom role](https://cloud.google.com/iam/docs/creating-custom-roles#deleting-custom-role).
{%- endif %}
{%- if azure_workload_id %}

`<{{ cp_name }}_subscription_id>`{minja}
:   is the {{ cp }} subscription ID for which to delete cloud resources.
{%- endif %}
{%- if aws_sts %}
    ```text title="Example output"
    2021/04/08 17:50:41 Identity Provider object .well-known/openid-configuration deleted from the bucket <name>-oidc
    2021/04/08 17:50:42 Identity Provider object keys.json deleted from the bucket <name>-oidc
    2021/04/08 17:50:43 Identity Provider bucket <name>-oidc deleted
    2021/04/08 17:51:05 Policy <name>-openshift-cloud-credential-operator-cloud-credential-o associated with IAM Role <name>-openshift-cloud-credential-operator-cloud-credential-o deleted
    2021/04/08 17:51:05 IAM Role <name>-openshift-cloud-credential-operator-cloud-credential-o deleted
    2021/04/08 17:51:07 Policy <name>-openshift-cluster-csi-drivers-ebs-cloud-credentials associated with IAM Role <name>-openshift-cluster-csi-drivers-ebs-cloud-credentials deleted
    2021/04/08 17:51:07 IAM Role <name>-openshift-cluster-csi-drivers-ebs-cloud-credentials deleted
    2021/04/08 17:51:08 Policy <name>-openshift-image-registry-installer-cloud-credentials associated with IAM Role <name>-openshift-image-registry-installer-cloud-credentials deleted
    2021/04/08 17:51:08 IAM Role <name>-openshift-image-registry-installer-cloud-credentials deleted
    2021/04/08 17:51:09 Policy <name>-openshift-ingress-operator-cloud-credentials associated with IAM Role <name>-openshift-ingress-operator-cloud-credentials deleted
    2021/04/08 17:51:10 IAM Role <name>-openshift-ingress-operator-cloud-credentials deleted
    2021/04/08 17:51:11 Policy <name>-openshift-machine-api-aws-cloud-credentials associated with IAM Role <name>-openshift-machine-api-aws-cloud-credentials deleted
    2021/04/08 17:51:11 IAM Role <name>-openshift-machine-api-aws-cloud-credentials deleted
    2021/04/08 17:51:39 Identity Provider with ARN arn:aws:iam::<aws_account_id>:oidc-provider/<name>-oidc.s3.<aws_region>.amazonaws.com deleted
    ```
{%- endif %}

**Verification**

*   To verify that the resources are deleted, query {{ cp }}. For more information, refer to {{ cp }} documentation.

{% if context == "uninstall-cluster-aws" %}
{%- set aws_sts = "" -%}
{% endif %}
{% if context == "uninstalling-cluster-gcp" %}
{%- set gcp_workload_id = "" -%}
{% endif %}
{% if context == "uninstall-cluster-azure" %}
{%- set azure_workload_id = "" -%}
{% endif %}