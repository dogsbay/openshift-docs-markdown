{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS IAM role {id="cloud-experts-deploying-application-integrating-aws-create-iam-role_{{ context }}"}

You can use the `aws` CLI to create your AWS IAM role. {._abstract}

**Procedure**

1.  Get your AWS account ID by running the following command:
    ```terminal
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    ```
1.  Get the OIDC provider by running the following command, replacing `<cluster-name>` with the name of your cluster:
    ```terminal
    $ export OIDC_PROVIDER=$(rosa describe cluster -c <cluster-name> -o yaml | awk '/oidc_endpoint_url/ {print $2}' | cut -d '/' -f 3,4)
    ```
1.  Create the trust policy file by running the following command:
    ```terminal
    $ cat <<EOF > ./ostoy-sa-trust.json
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
              "${OIDC_PROVIDER}:sub": "system:serviceaccount:${OSTOY_NAMESPACE}:ostoy-sa"
            }
          }
        }
      ]
    }
    EOF
    ```
1.  Create the AWS IAM role to be used with your service account by running the following command:
    ```terminal
    $ aws iam create-role --role-name "ostoy-sa-role" --assume-role-policy-document file://ostoy-sa-trust.json
    ```