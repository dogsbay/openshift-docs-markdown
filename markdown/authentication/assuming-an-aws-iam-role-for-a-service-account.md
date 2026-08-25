{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Assume an AWS IAM role for a service account {id="assuming-an-aws-iam-role-for-a-service-account"}

{% include "./_attributes/common-attributes.md" %}
{%- if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "assuming-an-aws-iam-role-for-a-service-account" %}

{%- if openshift_rosa or openshift_rosa_hcp %}
In {{ product_title }} clusters that use the AWS Security Token Service (STS), you can enable the OpenShift API server to project signed service account tokens that can be used to assume an AWS Identity and Access Management (IAM) role in a pod. If the assumed IAM role has the required AWS permissions, the pods can authenticate against the AWS API using temporary STS credentials to perform AWS operations.
{% endif %} {._abstract}

You can use the pod identity webhook to project service account tokens to assume an AWS Identity and Access Management (IAM) role for your own workloads. If the assumed IAM role has the required AWS permissions, the pods can run AWS SDK operations by using temporary STS credentials.

{% leveloffset +1 %}{% include "./modules/how-service-accounts-assume-aws-iam-roles-in-sre-owned-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-pod-identity-webhook-workflow-in-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/assuming-an-aws-iam-role-in-your-own-pods.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/setting-up-an-aws-iam-role-a-service-account.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-a-service-account-in-your-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-an-example-aws-sdk-container-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deploying-a-pod-that-includes-an-aws-sdk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/verifying-the-assumed-iam-role-in-your-pod.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [AWS documentation on IAM roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html)
*   [AWS documentation on creating a role to delegate permissions to an AWS service](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html)
*   [AWS SDKs and Tools Reference Guide](https://docs.aws.amazon.com/sdkref/latest/guide/overview.html)
*   [AWS Boto3 documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)

{% if openshift_rosa or openshift_dedicated %}
*   [Webhook admission plugins](/architecture/admission-plug-ins#admission-webhooks-about_admission-plug-ins)
{%- endif %}