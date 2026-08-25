{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster machines {id="installation-aws-user-infra-cluster-machines_{{ context }}"}

Your {{ product_title }} cluster on user-provisioned infrastructure requires `AWS::EC2::Instance` objects for bootstrap, control plane, and compute machines. {._abstract}

You need `AWS::EC2::Instance` objects for the following machines:

*   A bootstrap machine. This machine is required during installation, but you can remove it after your cluster deploys.
*   Three control plane machines. A control plane machine set does not govern the control plane machines.
*   Compute machines. You must create at least two compute machines, which are also known as worker machines, during installation. A compute machine set does not govern these machines.