{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolve EC2NodeClass not ready status {id="resolve-ec2nodeclass-not-ready-status_{{ context }}"}

Karpenter discovers AWS subnets and security groups by searching for resources tagged with a cluster-specific discovery tag. When the EC2NodeClass resource reports `SubnetsReady` or `SecurityGroupsReady` conditions as `False`, you need to add the required discovery tag to your AWS Virtual Private Cloud (VPC) resources. {._abstract}

**Procedure**

1.  Check the EC2NodeClass status:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq .status.conditions
    ```

    This command displays all status conditions for the default EC2NodeClass.
1.  Identify which conditions are not ready by looking for entries with `"status": "False"`.

    Common failures are `SubnetsReady` and `SecurityGroupsReady`.
1.  If `SubnetsReady` shows `False` with the message "SubnetSelector did not match any Subnets", private subnets in your VPC are missing the required discovery tag.
Continue to the next step.
1.  If `SecurityGroupsReady` shows `False` with message "SecurityGroupSelector did not match any SecurityGroups", security groups are missing the required discovery tag.
The same resolution process applies for both subnets and security groups.
1.  Get the Karpenter discovery tag value from the EC2NodeClass specification:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq -r '.spec.subnetSelectorTerms[0].tags["karpenter.sh/discovery"]'
    ```
    ```terminal title="Example output"
    <discovery_tag_value>
    ```

    This cluster-specific value must be added as a tag to AWS resources.
1.  List private subnets in your cluster VPC:
    ```terminal
    $ aws ec2 describe-subnets --filters "Name=vpc-id,Values=<vpc_id>" \
      --query 'Subnets[?MapPublicIpOnLaunch==`false`].[SubnetId,Tags]' --output table
    ```

    Replace `<vpc_id>` with your cluster’s VPC ID.
1.  For each private subnet, verify whether the Karpenter discovery tag is present:
    ```terminal
    $ aws ec2 describe-subnets --subnet-ids <subnet_id> \
      --query 'Subnets[0].Tags[?Key==`karpenter.sh/discovery`].Value' --output text
    ```

    Replace `<subnet_id>` with the subnet ID to check.
1.  If the discovery tag is missing, add it to the subnet:
    ```terminal
    $ aws ec2 create-tags --resources <subnet_id> \
      --tags Key=karpenter.sh/discovery,Value=<discovery_tag_value>
    ```

    Replace `<subnet_id>` with the subnet ID and `<discovery_tag_value>` with the value from step 5.
1.  Repeat steps 7 and 8 for all private subnets in your VPC.
1.  Verify that the default security group has the discovery tag:
    ```terminal
    $ aws ec2 describe-security-groups --group-ids <default_sg_id> \
      --query 'SecurityGroups[0].Tags[?Key==`karpenter.sh/discovery`].Value' --output text
    ```

    Replace `<default_sg_id>` with your cluster’s default security group ID.
1.  If the discovery tag is missing from the security group, add it:
    ```terminal
    $ aws ec2 create-tags --resources <default_sg_id> \
      --tags Key=karpenter.sh/discovery,Value=<discovery_tag_value>
    ```

    Replace `<default_sg_id>` with the security group ID and `<discovery_tag_value>` with the value from step 5.
1.  Wait 30 to 60 seconds for Karpenter to re-scan AWS resources.
1.  Verify that the EC2NodeClass Ready condition is now `True`:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq '.status.conditions[] | select(.type=="Ready")'
    ```

    The output should show `"status": "True"`.
1.  If the Ready condition is still `False`, check for other condition failures in the output and repeat the appropriate steps.

**Verification**

*   The EC2NodeClass Ready condition reports `True` status:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq '.status.conditions[] | select(.type=="Ready")'
    ```
*   The SubnetsReady and SecurityGroupsReady conditions report `True` status:
    ```terminal
    $ oc get ec2nodeclass/default -o json | jq '.status.conditions[] | select(.type=="SubnetsReady" or .type=="SecurityGroupsReady")'
    ```
*   All required AWS resources have the correct `karpenter.sh/discovery` tag:
    ```terminal
    $ aws ec2 describe-subnets --subnet-ids <subnet_id> \
      --query 'Subnets[0].Tags[?Key==`karpenter.sh/discovery`].Value' --output text
    ```


If adding tags fails with authorization errors
:   You need to update IAM permissions for the control plane operator.

**Troubleshooting**

    See "Resolve IAM permissions for AWS resource tagging".


If the EC2NodeClass remains not ready after adding tags
:   Verify that the tag value exactly matches the value in the EC2NodeClass specification.
    Tag values are case-sensitive and must match character-for-character.