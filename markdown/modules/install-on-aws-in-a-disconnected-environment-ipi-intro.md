{%- set _mod_docs_content_type = "CONCEPT" %}
# Install on AWS in a disconnected environment with installer-provisioned infrastructure {id="install-on-aws-in-a-disconnected-environment-ipi-intro_{{ context }}"}

You can install a cluster on {{ aws_first }} in a restricted network by creating an internal mirror of the installation release content on an existing {{ aws_short }} Virtual Private Cloud (VPC). By using this configuration, you can deploy a cluster in an environment with limited internet connectivity to help ensure compliance with security policies.