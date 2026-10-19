{%- set _mod_docs_content_type = "REFERENCE" %}
# Example CLI output for policies attached to a role {id="rosa-classic-example-cli-output-for-policies-attached-to-a-role_{{ context }}"}

When a policy is attached to a role, the {{ rosa_cli }} displays a confirmation output. The output depends on the type of policy. {._abstract}

*   If the policy is a trust policy, the {{ rosa_cli }} outputs the role name and the content of the policy.
    *   For the target role with policy attached, {{ rosa_cli }} outputs the role name and the console URL of the target role.
        ```terminal title="Target role with policy attached example output"
        I: Attached trust policy to role 'testrole-Worker-Role(https://console.aws.amazon.com/iam/home?#/roles/testrole-Worker-Role)': ******************
        ```
    *   If the attached policy is a trust policy, the {{ rosa_cli }} outputs the content of this policy.
        ```terminal title="Trust policy example output"
        I: Attached trust policy to role 'test-Support-Role': {"Version": "2012-10-17", "Statement": [{"Action": ["sts:AssumeRole"], "Effect": "Allow", "Principal": {"AWS": ["arn:aws:iam::000000000000:role/RH-Technical-Support-00000000"]}}]}
        ```
*   If the policy is a permission policy, the {{ rosa_cli }} outputs the name and public link of this policy or the ARN depending on whether the policy is an AWS managed policy or customer-managed policy.
    *   If the attached policy is an AWS managed policy, the {{ rosa_cli }} outputs the name and public link of this policy and the role it is attached to.
        ```terminal title="AWS managed policy example output"
        I: Attached policy 'ROSASRESupportPolicy(https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSASRESupportPolicy)' to role 'test-HCP-ROSA-Support-Role(https://console.aws.amazon.com/iam/home?#/roles/test-HCP-ROSA-Support-Role)'
        ```
    *   If the attached policy is a customer-managed policy, the {{ rosa_cli }} outputs the name and public link of this policy and the role it is attached to.
        ```terminal title="Customer-managed policy example output"
        I: Attached policy 'arn:aws:iam::000000000000:policy/testrole-Worker-Role-Policy' to role 'testrole-Worker-Role(https://console.aws.amazon.com/iam/home?#/roles/testrole-Worker-Role)'
        ```