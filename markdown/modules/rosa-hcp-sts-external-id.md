{%- set _mod_docs_content_type = "CONCEPT" %}
# About external ID {id="rosa-hcp-sts-external-id_{{ context }}"}

An external ID functions as a unique, separate, identifier embedded within your {{ product_title }} account-wide roles, blocking unauthorized third-party access. {._abstract}

During cluster creation, you might be asked to supply an external ID. This serves as an additional safeguard that prevents cross-account identity spoofing, ensuring that no one else can trigger automation against your AWS infrastructure.

When Red&#160;Hat’s automation plane issues an `sts:AssumeRole` API call to your account to manage cluster resources, it must present this exact identifier. If the string does not match the condition block defined in your AWS IAM trust relationship, AWS automatically blocks the request. This ensures Red&#160;Hat’s automation can only access your environment when explicitly acting on behalf of your organization.

When you assign an external ID, it is applied to both the Support IAM role and the Installer IAM role, through their associated trust policies:

*   Support role: when Red&#160;Hat Site Reliability Engineers (SREs) need to perform diagnostic, maintenance or any other support function, they assume this role.
    ```json title="Example support trust policy with an external ID sts_hcp_support_trust_policy.json"
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "AWS": "arn:aws:iam::710019948333:role/RH-Technical-Support-15234082"
                },
                "Action": "sts:AssumeRole",
                "Condition": {
                  "StringEquals": {
                    "sts:ExternalID": "<external_id>"
                  }
               }
            }
        ]
    }
    ```
*   Installer role: when {{ cluster_manager_first }} (OCM) automation needs to provision, scale or delete core cluster infrastructure, it assumes this role.
    ```json title="Example installer trust policy with an external ID sts_hcp_installer_trust_policy.json"
    {
        "Version": "2012-10-17",
        "Statement": [
            {
               "Effect": "Allow",
               "Principal": {
                   "AWS": "arn:aws:iam::710019948333:role/RH-Managed-OpenShift-Installer"
               },
               "Action": "sts:AssumeRole",
               "Condition": {
                 "StringEquals": {
                   "sts:ExternalID": "<external_id>"
                 }
              }
            }
        ]
    }
    ```

**Additional resources**

*   [Example scenario using an external ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_example)
*   [Securely using external ID for accessing AWS accounts owned by others](https://aws.amazon.com/blogs/apn/securely-using-external-id-for-accessing-aws-accounts-owned-by-others/)