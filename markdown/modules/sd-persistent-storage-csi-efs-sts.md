{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtain a role Amazon Resource Name for Security Token Service {id="efs-sts_{{ context }}"}

To configure the AWS Elastic File System (EFS) Container Storage Interface (CSI) Driver Operator on clusters using Security Token Service (STS), obtain a role Amazon Resource Name (ARN) using the Cloud Credential Operator utility before installation. {._abstract}


:::important

Perform this procedure before you install the AWS EFS CSI Driver Operator (see _Installing the AWS EFS CSI Driver Operator_ procedure).

:::


**Prerequisites**

*   You have access to the cluster as a user with the cluster-admin role.
*   You have AWS account credentials.

**Procedure**

1.  Create an IAM policy JSON file with the following content:
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "elasticfilesystem:DescribeAccessPoints",
            "elasticfilesystem:DescribeFileSystems",
            "elasticfilesystem:DescribeMountTargets",
            "ec2:DescribeAvailabilityZones",
            "elasticfilesystem:TagResource"
          ],
          "Resource": "*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "elasticfilesystem:CreateAccessPoint"
          ],
          "Resource": "*",
          "Condition": {
            "StringLike": {
              "aws:RequestTag/efs.csi.aws.com/cluster": "true"
            }
          }
        },
        {
          "Effect": "Allow",
          "Action": "elasticfilesystem:DeleteAccessPoint",
          "Resource": "*",
          "Condition": {
            "StringEquals": {
              "aws:ResourceTag/efs.csi.aws.com/cluster": "true"
            }
          }
        }
      ]
    }
    ```
1.  Create an IAM trust JSON file with the following content:
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Principal": {
            "Federated": "arn:aws:iam::<your_aws_account_ID>:oidc-provider/<openshift_oidc_provider>"
          },
          "Action": "sts:AssumeRoleWithWebIdentity",
          "Condition": {
            "StringEquals": {
              "<openshift_oidc_provider>:sub": [
                "system:serviceaccount:openshift-cluster-csi-drivers:aws-efs-csi-driver-operator",
                "system:serviceaccount:openshift-cluster-csi-drivers:aws-efs-csi-driver-controller-sa"
              ]
            }
          }
        }
      ]
    }
    ```
    where:


    `Statement.Principal.Federated`
    :   Specifies your AWS account ID and the {{ OCP_short }} OpenID Connect (OIDC) provider endpoint.

        Obtain your AWS account ID by running the following command:
        ```terminal
        $ aws sts get-caller-identity --query Account --output text
        ```
{%- if openshift_rosa %}

        Obtain the {{ OCP_short }} OIDC endpoint by running the following command:
        ```terminal
        $ rosa describe cluster \
          -c $(oc get clusterversion -o jsonpath='{.items[].spec.clusterID}{"\n"}') \
          -o yaml | awk '/oidc_endpoint_url/ {print $2}' | cut -d '/' -f 3,4
        ```
{% endif %}
{% if openshift_dedicated %}

        Obtain the {{ OCP_short }} OIDC endpoint by running the following command:
        ```terminal
        $ openshift_oidc_provider=`oc get authentication.config.openshift.io cluster \
          -o json | jq -r .spec.serviceAccountIssuer | sed -e "s/^https:\/\///"`; \
          echo $openshift_oidc_provider
        ```
{% endif %}


    `Statement.Condition.StringEquals[0]`
    :   Specify the {{ OCP_short }} OIDC endpoint again.
1.  Create the IAM role:
    ```terminal
    ROLE_ARN=$(aws iam create-role \
      --role-name "<your_cluster_name>-aws-efs-csi-operator" \
      --assume-role-policy-document file://<your_trust_file_name>.json \
      --query "Role.Arn" --output text); echo $ROLE_ARN
    ```

    Copy the role ARN. You will need it when you install the AWS EFS CSI Driver Operator.
1.  Create the IAM policy:
    ```terminal
    POLICY_ARN=$(aws iam create-policy \
      --policy-name "<your_cluster_name>-aws-efs-csi" \
      --policy-document file://<your_policy_file_name>.json \
      --query 'Policy.Arn' --output text); echo $POLICY_ARN
    ```
1.  Attach the IAM policy to the IAM role:
    ```terminal
    $ aws iam attach-role-policy \
      --role-name "<your_cluster_name>-aws-efs-csi-operator" \
      --policy-arn $POLICY_ARN
    ```