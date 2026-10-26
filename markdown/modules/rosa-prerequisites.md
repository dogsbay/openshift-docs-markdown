{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ product_title }} prerequisites {id="rosa-prerequisites_{{ context }}"}

{% if openshift_rosa_hcp %}
Before you can create a {{ product_title }} cluster, you must complete several prerequisites, such as configuring a virtual private cloud (VPC) and creating the required account-wide IAM roles and resources.
{% endif %}
{% if openshift_rosa %}
Before you can create a {{ product_title }} cluster, you must complete the following prerequisites. Use each link to find detailed instructions for completing that specific prerequisite:
{% endif %}

{% if openshift_rosa_hcp %}
*   [Configure a virtual private cloud (VPC)](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/prepare_your_environment/index#mos-checklist-vpc-post-install_rosa-cloud-expert-prereq-checklist)
{%- endif %}
*   [Create account-wide roles](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/prepare_your_environment/index#rosa-sts-creating-account-wide-sts-roles-and-policies_prepare-role-resources)
*   [Create the ocm-role IAM role](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/prepare_your_environment/index#rosa-sts-ocm-roles-and-permissions-iam-basic-role_prepare-role-resources)
{%- if openshift_rosa_hcp %}
*   [Create an OpenID Connect (OIDC) configuration](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/prepare_your_environment/index#rosa-sts-byo-oidc_prepare-role-resources)
{%- endif %}
{%- if openshift_rosa %}
*   [Create an OIDC configuration](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-sts-byo-oidc_rosa-sts-creating-a-cluster-quickly)
{%- endif %}
*   [Create Operator roles](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/prepare_your_environment/index#rosa-operator-config_prepare-role-resources)