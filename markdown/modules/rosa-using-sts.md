# Using the AWS Security Token Service {id="rosa-using-sts_{{ context }}"}

The Amazon Web Services (AWS) Security Token Service (STS) is a global web service that provides short-term credentials for IAM or federated users. You can use AWS STS with {{ product_title }} (ROSA) to allocate temporary, limited-privilege credentials for component-specific IAM roles. The service enables cluster components to make AWS API calls using secure cloud resource management practices.

You can use the `rosa` CLI to create the IAM role, policy and identity provider resources that are required for ROSA clusters that use STS.