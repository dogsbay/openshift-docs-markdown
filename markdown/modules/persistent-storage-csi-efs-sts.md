{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining a role Amazon Resource Name for Security Token Service {id="efs-sts_{{ context }}"}

To configure the AWS Elastic File System (EFS) Container Storage Interface (CSI) Driver Operator on clusters using Security Token Service (STS), obtain a role Amazon Resource Name (ARN) using the Cloud Credential Operator utility before installation. {._abstract}


:::important

Perform this procedure before you install the AWS EFS CSI Driver Operator (see _Installing the AWS EFS CSI Driver Operator_ procedure).

:::


You can obtain the ARN role in multiple ways. The following procedure shows one method that uses the same concept and CCO utility (`ccoctl`) binary tool as cluster installation.


:::note

If you are using One Zone file system, you need to create two `CredentialRequests`, one for the controller and one for the driver node. For more information, see Section _Setting up One Zone file systems with STS_.

:::


**Prerequisites**

*   Access to the cluster as a user with the cluster-admin role.
*   AWS account credentials

**Procedure**

1.  Extract the `ccoctl` from the {{ product_title }} release image, which you used to install the cluster with STS. For more information, see "Configuring the Cloud Credential Operator utility".
1.  Create and save an EFS `CredentialsRequest` YAML file, such as shown in the following example, and then place it in the `credrequests` directory:
    ```yaml title="Example"
    apiVersion: cloudcredential.openshift.io/v1
    kind: CredentialsRequest
    metadata:
      name: openshift-aws-efs-csi-driver
      namespace: openshift-cloud-credential-operator
    spec:
      providerSpec:
        apiVersion: cloudcredential.openshift.io/v1
        kind: AWSProviderSpec
        statementEntries:
        - action:
          - elasticfilesystem:*
          effect: Allow
          resource: '*'
      secretRef:
        name: aws-efs-cloud-credentials
        namespace: openshift-cluster-csi-drivers
      serviceAccountNames:
      - aws-efs-csi-driver-operator
      - aws-efs-csi-driver-controller-sa
    ```
1.  Run the `ccoctl` tool to generate a new IAM role in AWS, and create a YAML file for it in the local file system (`<path_to_ccoctl_output_dir>/manifests/openshift-cluster-csi-drivers-aws-efs-cloud-credentials-credentials.yaml`).
    ```terminal
    $ ccoctl aws create-iam-roles --name=<name> --region=<aws_region> --credentials-requests-dir=<path_to_directory_with_list_of_credentials_requests>/credrequests --identity-provider-arn=arn:aws:iam::<aws_account_id>:oidc-provider/<name>-oidc.s3.<aws_region>.amazonaws.com
    ```
    *   `name=<name>` is the name used to tag any cloud resources that are created for tracking.
    *   `region=<aws_region>` is the AWS region where cloud resources are created.
    *   `dir=<path_to_directory_with_list_of_credentials_requests>/credrequests` is the directory containing the EFS CredentialsRequest file in previous step.
    *   `<aws_account_id>` is the AWS account ID.
        ```terminal title="Example"
        $ ccoctl aws create-iam-roles --name my-aws-efs --credentials-requests-dir credrequests --identity-provider-arn arn:aws:iam::123456789012:oidc-provider/my-aws-efs-oidc.s3.us-east-2.amazonaws.com
        ```
        ```terminal title="Example output"
        2022/03/21 06:24:44 Role arn:aws:iam::123456789012:role/my-aws-efs -openshift-cluster-csi-drivers-aws-efs-cloud- created
        2022/03/21 06:24:44 Saved credentials configuration to: /manifests/openshift-cluster-csi-drivers-aws-efs-cloud-credentials-credentials.yaml
        2022/03/21 06:24:45 Updated Role policy for Role my-aws-efs-openshift-cluster-csi-drivers-aws-efs-cloud-
        ```
1.  Copy the role ARN from the first line of the _Example output_ in the preceding step. The role ARN is between "Role" and "created". In this example, the role ARN is "arn:aws:iam::123456789012:role/my-aws-efs -openshift-cluster-csi-drivers-aws-efs-cloud".

    You will need the role ARN when you install the AWS EFS CSI Driver Operator.

**Next steps**

Install the AWS EFS CSI Driver Operator. For information, see Inst"alling the AWS EFS CSI Driver Operator".