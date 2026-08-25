{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing your AWS account {id="cloud-experts-external-dns-prep-aws_{{ context }}"}

When cert-manager requests a certificate from Let’s Encrypt (or another ACME certificate issuer), Let’s Encrypt servers validate that you control the domain name in that certificate using _challenges_. For this tutorial, you are using a [DNS-01 challenge](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge) that proves that you control the DNS for your domain name by putting a specific value in a TXT record under that domain name. This is all done automatically by cert-manager. To allow cert-manager permission to modify the Amazon Route 53 public hosted zone for your domain, you need to create an Identity Access Management (IAM) role with specific policy permissions and a trust relationship to allow access to the pod. {._abstract}

The public hosted zone that is used in this tutorial is in the same AWS account as the {{ product_title }} cluster. If your public hosted zone is in a different account, a few additional steps for [Cross Account Access](https://cert-manager.io/docs/configuration/acme/dns01/route53/#cross-account-access) are required.

**Procedure**

1.  Retrieve the Amazon Route 53 public hosted zone ID:

    :::note

    This command looks for a public hosted zone that matches the custom domain you specified earlier as the `DOMAIN` environment variable. You can manually specify the Amazon Route 53 public hosted zone by running `export ZONE_ID=<zone_ID>`, replacing `<zone_ID>` with your specific Amazon Route 53 public hosted zone ID.
    
    :::

    ```terminal
    $ export ZONE_ID=$(aws route53 list-hosted-zones-by-name --output json \
      --dns-name "${DOMAIN}." --query 'HostedZones[0]'.Id --out text | sed 's/\/hostedzone\///')
    ```
1.  Create an AWS IAM policy document for the cert-manager Operator that provides the ability to update _only_ the specified public hosted zone:
    ```terminal
    $ cat <<EOF > "${SCRATCH}/cert-manager-policy.json"
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "route53:GetChange",
          "Resource": "arn:aws:route53:::change/*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "route53:ChangeResourceRecordSets",
            "route53:ListResourceRecordSets"
          ],
          "Resource": "arn:aws:route53:::hostedzone/${ZONE_ID}"
        },
        {
          "Effect": "Allow",
          "Action": "route53:ListHostedZonesByName",
          "Resource": "*"
        }
      ]
    }
    EOF
    ```
1.  Create the IAM policy using the file you created in the previous step:
    ```terminal
    $ POLICY_ARN=$(aws iam create-policy --policy-name "${CLUSTER}-cert-manager-policy" \
      --policy-document file://${SCRATCH}/cert-manager-policy.json \
      --query 'Policy.Arn' --output text)
    ```
1.  Create an AWS IAM trust policy for the cert-manager Operator:
    ```terminal
    $ cat <<EOF > "${SCRATCH}/trust-policy.json"
    {
     "Version": "2012-10-17",
     "Statement": [
     {
     "Effect": "Allow",
     "Condition": {
       "StringEquals" : {
         "${OIDC_ENDPOINT}:sub": "system:serviceaccount:cert-manager:cert-manager"
       }
     },
     "Principal": {
       "Federated": "arn:aws:iam::$AWS_ACCOUNT_ID:oidc-provider/${OIDC_ENDPOINT}"
     },
     "Action": "sts:AssumeRoleWithWebIdentity"
     }
     ]
    }
    EOF
    ```
1.  Create an IAM role for the cert-manager Operator using the trust policy you created in the previous step:
    ```terminal
    $ ROLE_ARN=$(aws iam create-role --role-name "${CLUSTER}-cert-manager-operator" \
       --assume-role-policy-document "file://${SCRATCH}/trust-policy.json" \
       --query Role.Arn --output text)
    ```
1.  Attach the permissions policy to the role:
    ```terminal
    $ aws iam attach-role-policy --role-name "${CLUSTER}-cert-manager-operator" \
      --policy-arn ${POLICY_ARN}
    ```