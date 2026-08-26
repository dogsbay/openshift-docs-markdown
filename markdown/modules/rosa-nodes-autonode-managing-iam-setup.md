{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare an AWS IAM role for the {{ autonode }} {id="rosa-nodes-autonode-managing-setup_{{ context }}"}

Create the IAM policy and role that the {{ autonode }} requires to provision Amazon Elastic Compute Cloud (Amazon EC2) instances. {._abstract}

**Procedure**

1.  Create the trust policy for the Karpenter service account:
    ```terminal
    $ cat > trust-policy.json <<EOF
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Federated": "arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):oidc-provider/$(rosa describe cluster -c $CLUSTER_NAME -o json | jq -r .aws.sts.oidc_endpoint_url | sed 's|https://||')"
                },
                "Action": "sts:AssumeRoleWithWebIdentity",
                "Condition": {
                    "StringEquals": {
                        "$(rosa describe cluster -c $CLUSTER_NAME -o json | jq -r .aws.sts.oidc_endpoint_url | sed 's|https://||'):sub": "system:serviceaccount:kube-system:karpenter"
                    }
                }
            }
        ]
    }
    EOF
    ```
1.  Create the IAM role:
    ```terminal
    $ aws iam create-role --role-name rosa-karpenter-controller-role-${CLUSTER_NAME} \
      --assume-role-policy-document file://trust-policy.json \
      --tags Key=red-hat-managed,Value=true
    ```
1.  Attach the AWS managed IAM policy:
    ```terminal
    $ aws iam attach-role-policy \
      --role-name rosa-karpenter-controller-role-${CLUSTER_NAME} \
      --policy-arn arn:aws:iam::aws:policy/service-role/ROSAKarpenterControllerPolicy
    ```

**Verification**

*   Verify that policies are present by running:
    ```terminal
    $ aws iam list-attached-role-policies --role-name rosa-karpenter-controller-role-${CLUSTER_NAME}
    ```