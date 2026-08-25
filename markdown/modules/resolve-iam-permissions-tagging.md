{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolve IAM permissions for AWS resource tagging {id="resolve-iam-permissions-for-tagging_{{ context }}"}

The Karpenter controller requires permission to create tags on AWS security groups. When the control plane operator IAM role lacks the `ec2:CreateTags` permission, Karpenter cannot automatically tag security groups with the discovery tag. {._abstract}

**Procedure**

1.  Identify the IAM role used by the control plane operator:
    ```terminal
    $ aws iam list-roles | grep kube-system-control-plane-operator
    ```

    The role name follows the pattern `<cluster_prefix>-kube-system-control-plane-operator`.
1.  Optional: Verify the authorization error in AWS CloudTrail:
    1.  Navigate to the AWS CloudTrail console.
    1.  Search for events matching these criteria:
        *   Event name: `CreateTags`
        *   Error code: `Client.UnauthorizedOperation`
        *   User identity: Contains `control-plane-operator`

        If you find matching events, the error message confirms that the IAM role lacks `ec2:CreateTags` permission.
1.  Create an IAM policy document that allows creating tags:
    ```terminal
    $ cat > /tmp/create-tags-policy.json << 'POLICY_EOF'
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowCreateTags",
                "Effect": "Allow",
                "Action": [
                    "ec2:CreateTags"
                ],
                "Resource": "*"
            }
        ]
    }
    POLICY_EOF
    ```
1.  Attach the policy to the control plane operator IAM role:
    ```terminal
    $ aws iam put-role-policy \
      --role-name <cluster_prefix>-kube-system-control-plane-operator \
      --policy-name KarpenterCreateTags \
      --policy-document file:///tmp/create-tags-policy.json
    ```

    Replace `<cluster_prefix>` with your cluster’s prefix from step 1.
1.  Verify that the policy is attached to the role:
    ```terminal
    $ aws iam get-role-policy \
      --role-name <cluster_prefix>-kube-system-control-plane-operator \
      --policy-name KarpenterCreateTags
    ```

    The output shows the policy document you attached.

**Verification**

*   The IAM policy is successfully attached to the control plane operator role:
    ```terminal
    $ aws iam get-role-policy \
      --role-name <cluster_prefix>-kube-system-control-plane-operator \
      --policy-name KarpenterCreateTags
    ```

    This command returns the policy document without errors.
*   AWS CloudTrail no longer shows `Client.UnauthorizedOperation` errors for CreateTags operations performed by the control plane operator.
*   If your EC2NodeClass previously showed `SecurityGroupsReady = False`, you can now manually add the Karpenter discovery tag to the default security group.
After you add the tag, the authorization error will not recur because the IAM role now has the required permissions.