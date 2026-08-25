{%- set _mod_docs_content_type = "CONCEPT" %}

# Environment and user access requirements {id="pod-short-term-auth-prereqs_{{ context }}"}

To configure short-term authentication for workloads, you must meet specific environment and user access requirements. {._abstract}

To configure this authentication method, you must meet the following requirements:

*   Your cluster must use short-term security credentials.
*   You must have access to the {{ oc_first }} as a user with the `cluster-admin` role.
*   In your cloud provider console, you must have access as a user with privileges to manage Identity and Access Management (IAM) and federated identity configurations.