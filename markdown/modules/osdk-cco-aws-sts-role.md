{%- set _mod_docs_content_type = "REFERENCE" %}
# Role specification {id="osdk-cco-aws-sts-role_{{ context }}"}

To install an Operator that uses AWS Security Token Service (STS), you must specify the IAM role that the Operator requires, ideally as a script that an administrator can run. {._abstract}

The following example shows a script that creates the required AWS IAM role and attaches the trust policy:

```bash title="Example role creation script"
#!/bin/bash
set -x

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
OIDC_PROVIDER=$(oc get authentication cluster -ojson | jq -r .spec.serviceAccountIssuer | sed -e "s/^https:\/\///")
NAMESPACE=my-namespace
SERVICE_ACCOUNT_NAME="my-service-account"
POLICY_ARN_STRINGS="arn:aws:iam::aws:policy/AmazonS3FullAccess"


read -r -d '' TRUST_RELATIONSHIP <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Effect": "Allow",
     "Principal": {
       "Federated": "arn:aws:iam::${AWS_ACCOUNT_ID}:oidc-provider/${OIDC_PROVIDER}"
     },
     "Action": "sts:AssumeRoleWithWebIdentity",
     "Condition": {
       "StringEquals": {
         "${OIDC_PROVIDER}:sub": "system:serviceaccount:${NAMESPACE}:${SERVICE_ACCOUNT_NAME}"
       }
     }
   }
 ]
}
EOF

echo "${TRUST_RELATIONSHIP}" > trust.json

aws iam create-role --role-name "$SERVICE_ACCOUNT_NAME" --assume-role-policy-document file://trust.json --description "role for demo"

while IFS= read -r POLICY_ARN; do
   echo -n "Attaching $POLICY_ARN ... "
   aws iam attach-role-policy \
       --role-name "$SERVICE_ACCOUNT_NAME" \
       --policy-arn "${POLICY_ARN}"
   echo "ok."
done <<< "$POLICY_ARN_STRINGS"
```