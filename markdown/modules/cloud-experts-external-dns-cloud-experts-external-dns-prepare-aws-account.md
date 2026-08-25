{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing your AWS account {id="cloud-experts-external-dns-cloud-experts-external-dns-prepare-aws-account_{{ context }}"}

You need to use the `aws` CLI to prepare your environment to deploy the External DNS Operator. {._abstract}

**Procedure**

1.  Retrieve the Amazon Route 53 public hosted zone ID:
    ```terminal
    $ export ZONE_ID=$(aws route53 list-hosted-zones-by-name --output json \
      --dns-name "${DOMAIN}." --query 'HostedZones[0]'.Id --out text | sed 's/\/hostedzone\///')
    ```
1.  Prepare a document with the necessary DNS changes to enable DNS resolution for the canonical domain of the Ingress Controller:
    ```terminal
    $ NLB_HOST=$(oc -n openshift-ingress get service/router-external-dns-ingress -ojsonpath="{.status.loadBalancer.ingress[0].hostname}")
    $ cat << EOF > "${SCRATCH}/create-cname.json"
    {
      "Comment":"Add CNAME to ingress controller canonical domain",
      "Changes":[{
          "Action":"CREATE",
          "ResourceRecordSet":{
            "Name": "router-external-dns-ingress.${DOMAIN}",
          "Type":"CNAME",
          "TTL":30,
          "ResourceRecords":[{
            "Value": "${NLB_HOST}"
          }]
        }
      }]
    }
    EOF
    ```

    The External DNS Operator uses this canonical domain as the target for CNAME records. 
1.  Submit your changes to Amazon Route 53 for propagation:
    ```terminal
    aws route53 change-resource-record-sets \
      --hosted-zone-id ${ZONE_ID} \
      --change-batch file://${SCRATCH}/create-cname.json
    ```
1.  Create an AWS IAM Policy document that allows the `External DNS` Operator to update _only_ the custom domain public hosted zone:
    ```terminal
    $ cat << EOF > "${SCRATCH}/external-dns-policy.json"
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "route53:ChangeResourceRecordSets"
          ],
          "Resource": [
            "arn:aws:route53:::hostedzone/${ZONE_ID}"
          ]
        },
        {
          "Effect": "Allow",
          "Action": [
            "route53:ListHostedZones",
            "route53:ListResourceRecordSets"
          ],
          "Resource": [
            "*"
          ]
        }
      ]
    }
    EOF
    ```
1.  Create an AWS IAM user:
    ```terminal
    $ aws iam create-user --user-name "${CLUSTER}-external-dns-operator"
    ```
1.  Attach the policy:
    ```terminal
    $ aws iam attach-user-policy --user-name "${CLUSTER}-external-dns-operator" --policy-arn $POLICY_ARN
    ```

    :::note

    This will be changed to STS using IRSA in the future.
    
    :::

1.  Create AWS keys for the IAM user:
    ```terminal
    $ SECRET_ACCESS_KEY=$(aws iam create-access-key --user-name "${CLUSTER}-external-dns-operator")
    ```
1.  Create static credentials:
    ```terminal
    $ cat << EOF > "${SCRATCH}/credentials"
    [default]
    aws_access_key_id = $(echo $SECRET_ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')
    aws_secret_access_key = $(echo $SECRET_ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')
    EOF
    ```