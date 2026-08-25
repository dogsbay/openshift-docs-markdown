{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding or updating {{ aws_short }} tags for a hosted cluster {id="hcp-aws-tags_{{ context }}"}

As a cluster instance administrator, you can add or update {{ aws_first }} tags without needing to re-create your hosted cluster. _Tags_ are key-value pairs that are attached to {{ aws_short }} resources for management and automation. {._abstract}

You might want to use tags for the following purposes:

*   Managing access controls.
*   Tracking chargeback or showback.
*   Managing cloud Identity and Access Management (IAM) conditional permissions.
*   Aggregating resources based on tags. For example, you can query tags to calculate resource usage and billing costs.

You can add or update tags for several different types of resources, including Amazon Elastic File System (EFS) access points, load balancer resources, Amazon Elastic Block Storage (EBS) volumes, IAM users, and {{ aws_short }} S3.


:::important

On network load balancers, tags cannot be added or updated. The {{ aws_short }} load balancer reconciles whatever tags are in the `HostedCluster` resource. If you try to add or update a tag, the load balancer overwrites the tag.

In addition, tags cannot be updated on the default security group resource that is created directly by {{ hcp }}.

:::


**Prerequisites**

*   You must have cluster administrator permissions for your hosted cluster on {{ aws_short }}.

**Procedure**

1.  If you want to add or update tags for EFS access points, complete steps 1 and 2. If you are adding or updating tags for other types of resources, complete only step 2.
    1.  In the `aws-efs-csi-driver-operator` service account, add two annotations, as shown in the following example. These annotations are required so that the Amazon Elastic Kubernetes Service (EKS) pod identity webhook that runs on the cluster can correctly assign {{ aws_short }} roles to the pods that the EFS Operator uses.
        ```yaml
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: <service_account_name>
          namespace: <project_name>
          annotations:
            eks.amazonaws.com/role-arn:<role_arn>
            eks.amazonaws.com/audience:sts.amazonaws.com
        ```
    1.  Delete the Operator pod or roll out a restart of the `aws-efs-csi-driver-operator` deployment.
1.  In the `HostedCluster` resource, enter information in the `resourceTags` fields, as shown in the following example:
    ```yaml title="Example HostedCluster resource"
    apiVersion: hypershift.openshift.io/v1beta1
    kind: HostedCluster
    metadata:
      #...
    spec:
      autoscaling: {}
      clusterID: <cluster_id>
      configuration: {}
      controllerAvailabilityPolicy: SingleReplica
      dns:
        #...
      etcd:
        #...
      fips: false
      infraID: <infra_id>
      infrastructureAvailabilityPolicy: SingleReplica
      issuerURL: https://<issuer_url>.s3.<region>.amazonaws.com
      networking:
        #...
      olmCatalogPlacement: management
      platform:
        aws:
          #...
          resourceTags:
          - key: kubernetes.io/cluster/<tag>
            value: owned
          rolesRef:
            #...
        type: AWS
    ```

    Replace `<tag>` with the tag that you want to add to your resource.