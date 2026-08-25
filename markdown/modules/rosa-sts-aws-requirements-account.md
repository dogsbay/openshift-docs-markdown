{%- set _mod_docs_content_type = "REFERENCE" %}
# AWS account {id="rosa-account_{{ context }}"}

You must have an AWS account with the following considerations to deploy a {{ product_title }} cluster. {._abstract}

*   Your AWS account must allow sufficient quota to deploy your cluster.
*   If your organization applies and enforces service control policies (SCPs), these policies must not be more restrictive than the roles and policies required by the cluster.
*   You can deploy native AWS services within the same AWS account.
*   Your account must have a service-linked role to allow the installation program to configure Elastic Load Balancing (ELB). See "Creating the Elastic Load Balancing (ELB) service-linked role" for more information.