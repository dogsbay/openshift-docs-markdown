{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing AWS STS credentials for OADP {id="preparing-aws-sts-credentials-for-oadp_{{ context }}"}

Configure an {{ aws_full }} account to install the {{ oadp_first }}. Prepare the {{ aws_short }} credentials by using the following procedure. {._abstract}

**Procedure**

1.  Define the `cluster_name` environment variable by running the following command:
    ```terminal
    $ export CLUSTER_NAME= <AWS_cluster_name>
    ```

    Replace `<AWS_cluster_name>` with the name of the cluster.
1.  Retrieve all of the details of the `cluster` such as the `AWS_ACCOUNT_ID, OIDC_ENDPOINT` by running the following command:
    ```terminal
    $ export CLUSTER_VERSION=$(oc get clusterversion version -o jsonpath='{.status.desired.version}{"\n"}')
    ```
    ```terminal
    $ export AWS_CLUSTER_ID=$(oc get clusterversion version -o jsonpath='{.spec.clusterID}{"\n"}')
    ```
    ```terminal
    $ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o jsonpath='{.spec.serviceAccountIssuer}' | sed 's|^https://||')
    ```
    ```terminal
    $ export REGION=$(oc get infrastructures cluster -o jsonpath='{.status.platformStatus.aws.region}' --allow-missing-template-keys=false || echo us-east-2)
    ```
    ```terminal
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    ```
    ```terminal
    $ export ROLE_NAME="${CLUSTER_NAME}-openshift-oadp-aws-cloud-credentials"
    ```
1.  Create a temporary directory to store all of the files by running the following command:
    ```terminal
    $ export SCRATCH="/tmp/${CLUSTER_NAME}/oadp"
    mkdir -p ${SCRATCH}
    ```
1.  Display all of the gathered details by running the following command:
    ```terminal
    $ echo "Cluster ID: ${AWS_CLUSTER_ID}, Region: ${REGION}, OIDC Endpoint:
    ${OIDC_ENDPOINT}, AWS Account ID: ${AWS_ACCOUNT_ID}"
    ```
1.  On the {{ aws_short }} account, create an IAM policy to allow access to {{ aws_short }} S3:
    1.  Check to see if the policy exists by running the following commands:
        ```terminal
        $ export POLICY_NAME="OadpVer1"
        ```
        *   `POLICY_NAME`: The variable can be set to any value.
        ```terminal
        $ POLICY_ARN=$(aws iam list-policies --query "Policies[?PolicyName=='$POLICY_NAME'].{ARN:Arn}" --output text)
        ```
    1.  Enter the following command to create the policy JSON file and then create the policy:

        :::note

        If the policy ARN is not found, the command creates the policy. If the policy ARN already exists, the `if` statement intentionally skips the policy creation.
        
        :::

        ```terminal
        $ if [[ -z "${POLICY_ARN}" ]]; then
        cat << EOF > ${SCRATCH}/policy.json
        {
        "Version": "2012-10-17",
        "Statement": [
         {
           "Effect": "Allow",
           "Action": [
             "s3:CreateBucket",
             "s3:DeleteBucket",
             "s3:PutBucketTagging",
             "s3:GetBucketTagging",
             "s3:PutEncryptionConfiguration",
             "s3:GetEncryptionConfiguration",
             "s3:PutLifecycleConfiguration",
             "s3:GetLifecycleConfiguration",
             "s3:GetBucketLocation",
             "s3:ListBucket",
             "s3:GetObject",
             "s3:PutObject",
             "s3:DeleteObject",
             "s3:ListBucketMultipartUploads",
             "s3:AbortMultipartUpload",
             "s3:ListMultipartUploadParts",
             "ec2:DescribeSnapshots",
             "ec2:DescribeVolumes",
             "ec2:DescribeVolumeAttribute",
             "ec2:DescribeVolumesModifications",
             "ec2:DescribeVolumeStatus",
             "ec2:CreateTags",
             "ec2:CreateVolume",
             "ec2:CreateSnapshot",
             "ec2:DeleteSnapshot"
           ],
           "Resource": "*"
         }
        ]}
        EOF

        POLICY_ARN=$(aws iam create-policy --policy-name $POLICY_NAME \
        --policy-document file:///${SCRATCH}/policy.json --query Policy.Arn \
        --tags Key=openshift_version,Value=${CLUSTER_VERSION} Key=operator_namespace,Value=openshift-adp Key=operator_name,Value=oadp \
        --output text)
        fi
        ```
        *   `SCRATCH`: The name for a temporary directory created for storing the files.
    1.  View the policy ARN by running the following command:
        ```terminal
        $ echo ${POLICY_ARN}
        ```
1.  Create an IAM role trust policy for the cluster:
    1.  Create the trust policy file by running the following command:
        ```terminal
        $ cat <<EOF > ${SCRATCH}/trust-policy.json
        {
            "Version": "2012-10-17",
            "Statement": [{
              "Effect": "Allow",
              "Principal": {
                "Federated": "arn:aws:iam::${AWS_ACCOUNT_ID}:oidc-provider/${OIDC_ENDPOINT}"
              },
              "Action": "sts:AssumeRoleWithWebIdentity",
              "Condition": {
                "StringEquals": {
                  "${OIDC_ENDPOINT}:sub": [
                    "system:serviceaccount:openshift-adp:openshift-adp-controller-manager",
                    "system:serviceaccount:openshift-adp:velero"]
                }
              }
            }]
        }
        EOF
        ```
    1.  Create an IAM role trust policy for the cluster by running the following command:
        ```terminal
        $ ROLE_ARN=$(aws iam create-role --role-name \
          "${ROLE_NAME}" \
          --assume-role-policy-document file://${SCRATCH}/trust-policy.json \
          --tags Key=cluster_id,Value=${AWS_CLUSTER_ID}  Key=openshift_version,Value=${CLUSTER_VERSION} Key=operator_namespace,Value=openshift-adp Key=operator_name,Value=oadp --query Role.Arn --output text)
        ```
    1.  View the role ARN by running the following command:
        ```terminal
        $ echo ${ROLE_ARN}
        ```
1.  Attach the IAM policy to the IAM role by running the following command:
    ```terminal
    $ aws iam attach-role-policy --role-name "${ROLE_NAME}" --policy-arn ${POLICY_ARN}
    ```