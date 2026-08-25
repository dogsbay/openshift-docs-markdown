{%- set _mod_docs_content_type = "REFERENCE" %}
# IAM roles for service accounts {id="cloud-experts-deploying-application-integrating-aws-iam-roles_{{ context }}"}

You can use IAM roles for service accounts to assign IAM roles directly to Kubernetes service accounts. You can use it to grant the ACK controller credentials to deploy services in your AWS account. Use [IAM roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) to automate the management and rotation of temporary credentials. {._abstract}

Pods receive a valid OpenID Connect (OIDC) JSON web token (JWT) and pass it to the AWS STS `AssumeRoleWithWebIdentity` API operation to receive IAM temporary role credentials. The process relies on the EKS pod identity mutating webhook which modifies pods that require AWS IAM access.

IAM roles for service accounts adheres to the following best practices:

*   **Principle of least privilege**: You can create IAM permissions for AWS roles that only allow limited access. These permissions are limited to the service account associated with the role and only the pods that use that service account have access.
*   **Credential isolation**: A pod can only retrieve credentials for the IAM role associated with the service account that the pod is using.
*   **Auditing**: All AWS resource access can be viewed in CloudTrail.