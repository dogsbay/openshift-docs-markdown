{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using AWS IAM Analyzer to create policy templates {id="create-custom-permissions-for-iam-instance-profiles_{{ context }}"}

To reduce security risk, you can use AWS IAM Access Analyzer and CloudTrail to generate and apply minimal, fine-grained IAM policies for cluster control plane and compute instance profiles. {._abstract}

The minimal set of permissions that the control plane and compute instance profiles require depends on how the cluster is configured for its daily operation.

One way to determine which permissions the cluster instances require is to use the AWS Identity and Access Management Access Analyzer (IAM Access Analyzer) to create a policy template:

*   A policy template contains the permissions the cluster has used over a specified period of time.
*   You can then use the template to create policies with fine-grained permissions.

**Procedure**

1.  Ensure that CloudTrail is enabled. CloudTrail records all of the actions and events in your AWS account, including the API calls that are required to create a policy template. For more information, see the AWS documentation for [working with CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html).
1.  Create an instance profile for control plane instances and an instance profile for compute instances. Be sure to assign each role a permissive policy, such as PowerUserAccess. For more information, see the AWS documentation for
[creating instance profile roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html).
1.  Install the cluster in a development environment and configure it as required. Be sure to deploy all of applications the cluster will host in a production environment.
1.  Test the cluster thoroughly. Testing the cluster ensures that all of the required API calls are logged.
1.  Use the IAM Access Analyzer to create a policy template for each instance profile. For more information, see the AWS documentation for [generating policies based on the CloudTrail logs](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-generation.html).
1.  Create and add a fine-grained policy to each instance profile.
1.  Remove the permissive policy from each instance profile.
1.  Deploy a production cluster using the existing instance profiles with the new policies.

    :::note

    You can add [IAM Conditions](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html) to your policy to make it more restrictive and compliant with your organization security requirements.
    
    :::