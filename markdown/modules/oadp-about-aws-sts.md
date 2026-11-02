{%- set _mod_docs_content_type = "CONCEPT" %}
# About installing OADP on AWS STS clusters {id="oadp-about-aws-sts_{{ context }}"}

You can install {{ oadp_short }} on an AWS {{ sts_first }} (AWS STS) cluster manually. {._abstract}

Amazon {{ aws_short }} provides {{ aws_short }} STS as a web service that enables you to request temporary, limited-privilege credentials for users. You use STS to provide trusted users with temporary access to resources via API calls, your {{ aws_short }} console, or the {{ aws_short }} command-line interface (CLI).

Before installing {{ oadp_first }}, you must set up role and policy credentials for {{ oadp_short }} so that it can use the {{ aws_full }} API.

This process is performed in the following two stages:

1.  Prepare {{ aws_short }} credentials.
1.  Install the OADP Operator and give it an IAM role.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.