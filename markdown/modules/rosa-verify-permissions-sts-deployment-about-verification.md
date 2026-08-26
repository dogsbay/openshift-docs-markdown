{%- set _mod_docs_content_type = "CONCEPT" %}
# Permission verification for STS deployments {id="rosa-verify-permissions-sts-deployment-about-verification_{{ context }}"}

You can verify the permissions required for {{ product_title }} by running a script without creating any AWS resources. The script uses the `rosa`, `aws`, and `jq` CLI commands to create files in the working directory that are used to verify permissions in the account connected to the current AWS configuration. {._abstract}

The AWS Policy Simulator is used to verify the permissions of each role policy against the API calls extracted by `jq`; results are then stored in a text file appended with `.results`.

This script is designed to verify the permissions for the current account and region.