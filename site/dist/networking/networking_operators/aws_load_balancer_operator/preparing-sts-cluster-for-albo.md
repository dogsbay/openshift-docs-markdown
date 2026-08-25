---
title: Preparing an AWS STS cluster for the AWS Load Balancer Operator
---

# Preparing an AWS STS cluster for the AWS Load Balancer Operator {#albo-sts-cluster}

To install the {{ aws_first }} Load Balancer Operator on a cluster that uses the {{ sts_first }}, prepare the cluster by configuring the `CredentialsRequest` object. This ensures the Operator can bootstrap the {{ aws_short }} Load Balancer Controller and access the required secrets.

The {{ aws_short }} Load Balancer Operator waits until the required secrets are created and available.

Before you start any {{ sts_first }} procedures, ensure that you meet the following prerequisites:

- You installed the {{ oc_first }}.
- You know the infrastructure ID of your cluster. To show this ID, run the following command in your CLI:

  ```terminal
  $ oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"
  ```
- You know the OpenID Connect (OIDC) DNS information for your cluster. To show this information, enter the following command in your CLI:

  ```terminal
  $ oc get authentication.config cluster -o=jsonpath="{.spec.serviceAccountIssuer}"
  ```

  where:

  `{.spec.serviceAccountIssuer}`
  :   Specifies an OIDC DNS URL. An example URL is `https://rh-oidc.s3.us-east-1.amazonaws.com/28292va7ad7mr9r4he1fb09b14t59t4f`.
- You logged into the {{ aws_short }} management console, navigated to **IAM** -> **Access management** -> **Identity providers**, and located the OIDC Amazon Resource Name (ARN) information. An OIDC ARN example is `arn:aws:iam::777777777777:oidc-provider/<oidc_dns_url>`.

**Additional resources**

- [the Cloud Credential Operator utility (`ccoctl`)](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)

**Additional resources**

- [the Cloud Credential Operator utility (`ccoctl`)](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)

## Additional resources {#additional-resources-albo-sts-cluster_albo-sts-cluster}

- [Configuring the Cloud Credential Operator utility](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)
