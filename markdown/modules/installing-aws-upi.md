{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing a cluster on user-provisioned infrastructure {id="choosing-an-method-to-install-ocp-on-aws-user-provisioned-provisioned_{{ context }}"}
{%- set context = "installing-upi-aws" %}

You can install a cluster on {{ aws_short }} in one of two ways: on infrastructure that you provide or infrastructure that you provide by using an internal mirror of the installation release content. {._abstract}

To install {{ product_title }} on {{ aws_short }} infrastructure that you provide, you can use the provided CloudFormation templates to create stacks of {{ aws_short }} resources that represent each of the components required for an {{ product_title }} installation.

To install a cluster that does not require an active internet connection to obtain the software components, install {{ product_title }} on {{ aws_short }} infrastructure that you provide by using an internal mirror of the installation release content. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content. While you can install {{ product_title }} by using the mirrored content, your cluster still requires internet access to use the {{ aws_short }} APIs.