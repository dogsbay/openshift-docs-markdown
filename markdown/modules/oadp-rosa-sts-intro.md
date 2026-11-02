{%- set _mod_docs_content_type = "CONCEPT" %}
# About backing up and restoring applications on ROSA with STS {id="oadp-rosa-sts-intro_{{ context }}"}

Use {{ oadp_first }} with {{ product_rosa }} (ROSA) clusters to back up and restore application data. {._abstract}

ROSA is a fully-managed, turnkey application platform that allows you to deliver value to your customers by building and deploying applications.

ROSA provides seamless integration with a wide range of {{ aws_first }} compute, database, analytics, machine learning, networking, mobile, and other services to speed up the building and delivery of differentiating experiences to your customers.

You can subscribe to the service directly from your {{ aws_short }} account.

After you create your clusters, you can operate your clusters with the {{ product_title }} web console or through {{ cluster_manager_first }}. You can also use ROSA with OpenShift APIs and command-line interface (CLI) tools.

Before installing {{ oadp_first }}, you must set up role and policy credentials for OADP so that it can use the {{ aws_full }} API.

This process is performed in the following two stages:

1.  Prepare {{ aws_short }} credentials
1.  Install the OADP Operator and give it an IAM role

**Additional resources**
{._additional-resources}

*   [Installing Red Hat OpenShift Service on AWS interactive walkthrough](https://www.redhat.com/en/products/interactive-walkthrough/install-rosa)