{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up One Zone file systems with STS {id="efs-one-zone-procedure_{{ context }}"}

Configure separate credential requests and role ARNs for the controller and driver nodes to use AWS Elastic File System (EFS) One Zone file systems with Security Token Service (STS) authentication. {._abstract}

The following procedure explains how to set up AWS One Zone file systems with Security Token Service (STS).

**Prerequisites**

*   Access to the cluster as a user with the cluster-admin role.
*   AWS account credentials

**Procedure**

1.  Create **two** `CredentialsRequests` in the `credrequests` directory following the procedure under Section _Obtaining a role Amazon Resource Name for Security Token Service_:
    *   For the **controller** `CredentialsRequest`, follow the procedure without any changes.
    *   For the **driver node** `CredentialsRequest` use the following example file:
        ```yaml title="Example CredentialsRequest YAML file for driver node"
        apiVersion: cloudcredential.openshift.io/v1
        kind: CredentialsRequest
        metadata:
          annotations:
            credentials.openshift.io/role-arns-vars: NODE_ROLEARN
          name: openshift-aws-efs-csi-driver-node
          namespace: openshift-cloud-credential-operator
        spec:
          providerSpec:
            apiVersion: cloudcredential.openshift.io/v1
            kind: AWSProviderSpec
            statementEntries:
            - action:
              - elasticfilesystem:DescribeMountTargets
              - ec2:DescribeAvailabilityZones
              effect: Allow
              resource: '*'
          secretRef:
            name: node-aws-efs-cloud-credentials
            namespace: openshift-cluster-csi-drivers
          serviceAccountNames:
          - aws-efs-csi-driver-node-sa
        ```

        Set `metadata.annotations.credentials.openshift.io/role-arns-vars` to `NODE_ROLEARN`.
        ```terminal title="Example ccoctl output"
        2025/08/26 14:05:24 Role arn:aws:iam::269733383066:role/my-arn-1-blll6-openshift-cluster-csi-drivers-aws-efs-cloud-cre created
        2025/08/26 14:05:24 Saved credentials configuration to: /home/my-arn/project/go/src/github.com/openshift/myinst/aws-sts-compact-1/manifests/openshift-cluster-csi-drivers-aws-efs-cloud-credentials-credentials.yaml
        2025/08/26 14:05:24 Updated Role policy for Role my-arn-1-blll6-openshift-cluster-csi-drivers-aws-efs-cloud-cre
        2025/08/26 14:05:24 Role arn:aws:iam::269733383066:role/my-arn-1-blll6-openshift-cluster-csi-drivers-node-aws-efs-clou created
        2025/08/26 14:05:24 Saved credentials configuration to: manifests/openshift-cluster-csi-drivers-node-aws-efs-cloud-credentials-credentials.yaml
        2025/08/26 14:05:24 Updated Role policy for Role my-arn-1-blll6-openshift-cluster-csi-drivers-node-aws-efs-clou
        ```

        In this example:
    *   The first line shows the Controller Amazon Resource Name (ARN).
    *   The fifth line shows the  Driver node ARN.
1.  Install the AWS EFS CSI driver using the controller ARN created earlier in this procedure.
1.  Edit the operator’s subscription and add `NODE_ROLEARN` with the driver node’s ARN by running a command similar to the following:
    ```terminal
    $ oc -n openshift-cluster-csi-drivers edit subscription aws-efs-csi-driver-operator
    ...
      config:
        env:
        - name: ROLEARN
          value: arn:aws:iam::269733383066:role/my-arn-1-blll6-openshift-cluster-csi-drivers-aws-efs-cloud-cre
        - name: NODE_ROLEARN
          value: arn:aws:iam::269733383066:role/my-arn-1-blll6-openshift-cluster-csi-drivers-node-aws-efs-clou
    ...
    ```
    *   `ROLEARN` `value` is the Controller ARN, which already exists.
    *   `NODE_ROLEARN` `value` is the Driver node ARN.