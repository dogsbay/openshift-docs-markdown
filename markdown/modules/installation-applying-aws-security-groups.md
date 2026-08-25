{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying existing {{ aws_first }} security groups to the cluster {id="installation-aws-vpc-security-groups_{{ context }}"}

Applying existing {{ aws_short }} security groups to your control plane and compute machines can help you meet the security needs of your organization, in such cases where you need to control the incoming or outgoing traffic of these machines. {._abstract}

**Prerequisites**

*   You have created the security groups in AWS. For more information, see the {{ aws_short }} documentation about working with [security groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html).
*   The security groups must be associated with the existing VPC that you are deploying the cluster to. The security groups cannot be associated with another VPC.
*   You have an existing `install-config.yaml` file.

**Procedure**

1.  In the `install-config.yaml` file, edit the `compute.platform.aws.additionalSecurityGroupIDs` parameter to specify one or more custom security groups for your compute machines.
1.  Edit the `controlPlane.platform.aws.additionalSecurityGroupIDs` parameter to specify one or more custom security groups for your control plane machines.
1.  Save the file and reference it when deploying the cluster.
    ```yaml title="Sample install-config.yaml file that specifies custom security groups"
    # ...
    compute:
    - hyperthreading: Enabled
      name: worker
      platform:
        aws:
          additionalSecurityGroupIDs:
            - sg-1
            - sg-2
      replicas: 3
    controlPlane:
      hyperthreading: Enabled
      name: master
      platform:
        aws:
          additionalSecurityGroupIDs:
            - sg-3
            - sg-4
      replicas: 3
    platform:
      aws:
        region: us-east-1
        subnets:
          - subnet-1
          - subnet-2
          - subnet-3
    ```

    where:

    `compute.platform.aws.additionalSecurityGroupIDs`
    :   Specifies the name of the security group as it appears in the Amazon EC2 console, including the `sg` prefix.

    `platform.aws.subnets`
    :   Specifies subnets for each availability zone that your cluster uses.