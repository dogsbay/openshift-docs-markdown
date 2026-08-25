{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing AWS credentials for OADP {id="preparing-aws-credentials-for-oadp_{{ context }}"}

Prepare and configure an {{ aws_full }} account to install {{ oadp_first }}. {._abstract}

**Procedure**

1.  Create the following environment variables by running the following commands:

    :::important

    Change the cluster name to match your cluster, and ensure you are logged into the cluster as an administrator. Ensure that all fields are outputted correctly before continuing.
    
    :::

    ```terminal
    $ export CLUSTER_NAME=<my_cluster>
    ```

Replace `<my_cluster>` with your cluster name.


```terminal
$ export ROSA_CLUSTER_ID=$(rosa describe cluster -c ${CLUSTER_NAME} --output json | jq -r .id)
```

```terminal
$ export REGION=$(rosa describe cluster -c ${CLUSTER_NAME} --output json | jq -r .region.id)
```

```terminal
$ export OIDC_ENDPOINT=$(oc get authentication.config.openshift.io cluster -o jsonpath='{.spec.serviceAccountIssuer}' | sed 's|^https://||')
```

```terminal
$ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
```

```terminal
$ export CLUSTER_VERSION=$(rosa describe cluster -c ${CLUSTER_NAME} -o json | jq -r .version.raw_id | cut -f -2 -d '.')
```

```terminal
$ export ROLE_NAME="${CLUSTER_NAME}-openshift-oadp-aws-cloud-credentials"
```

```terminal
$ export SCRATCH="/tmp/${CLUSTER_NAME}/oadp"
```

```terminal
$ mkdir -p ${SCRATCH}
```

```terminal
$ echo "Cluster ID: ${ROSA_CLUSTER_ID}, Region: ${REGION}, OIDC Endpoint:
  ${OIDC_ENDPOINT}, AWS Account ID: ${AWS_ACCOUNT_ID}"
```

1.  On the {{ aws_short }} account, create an IAM policy to allow access to {{ aws_short }} S3:
    1.  Check to see if the policy exists by running the following command:
        ```terminal
        $ POLICY_ARN=$(aws iam list-policies --query "Policies[?PolicyName=='RosaOadpVer1'].{ARN:Arn}" --output text)
        ```
        *   `RosaOadp`: Replace `RosaOadp` with your policy name.
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

          POLICY_ARN=$(aws iam create-policy --policy-name "RosaOadpVer1" \
          --policy-document file:///${SCRATCH}/policy.json --query Policy.Arn \
          --tags Key=rosa_openshift_version,Value=${CLUSTER_VERSION} Key=rosa_role_prefix,Value=ManagedOpenShift Key=operator_namespace,Value=openshift-oadp Key=operator_name,Value=openshift-oadp \
          --output text)
          fi
        ```
        *   `SCRATCH`: `SCRATCH` is a name for a temporary directory created for the environment variables.
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
    1.  Create the role by running the following command:
        ```terminal
        $ ROLE_ARN=$(aws iam create-role --role-name \
          "${ROLE_NAME}" \
          --assume-role-policy-document file://${SCRATCH}/trust-policy.json \
          --tags Key=rosa_cluster_id,Value=${ROSA_CLUSTER_ID} \
                 Key=rosa_openshift_version,Value=${CLUSTER_VERSION} \
                 Key=rosa_role_prefix,Value=ManagedOpenShift \
                 Key=operator_namespace,Value=openshift-adp \
                 Key=operator_name,Value=openshift-oadp \
          --query Role.Arn --output text)
        ```
    1.  View the role ARN by running the following command:
        ```terminal
        $ echo ${ROLE_ARN}
        ```
1.  Attach the IAM policy to the IAM role by running the following command:
    ```terminal
    $ aws iam attach-role-policy --role-name "${ROLE_NAME}" \
      --policy-arn ${POLICY_ARN}
    ```