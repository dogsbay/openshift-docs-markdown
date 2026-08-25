{%- set _mod_docs_content_type = "REFERENCE" %}
# Required AWS infrastructure components {id="installation-aws-user-infra-requirements_{{ context }}"}

To install {{ product_title }} on user-provisioned infrastructure in {{ aws_first }}, you must manually create both the machines and their supporting infrastructure. {._abstract}

For more information about the integration testing for different platforms, see the [OpenShift Container Platform 4.x Tested Integrations](https://access.redhat.com/articles/4128421) page.

By using the provided CloudFormation templates, you can create stacks of {{ aws_short }} resources that represent the following components:

*   An {{ aws_short }} Virtual Private Cloud (VPC)
*   Networking and load balancing components
*   Security groups and roles
*   An {{ product_title }} bootstrap node
*   {{ product_title }} control plane nodes
*   An {{ product_title }} compute node

Or, you can manually create the components or you can reuse existing infrastructure that meets the cluster requirements. Review the CloudFormation templates for more details about how the components interrelate.