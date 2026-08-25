{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tag your AWS VPC and subnets {id="cloud-experts-aws-load-balancer-operator-aws-vpc-subnets_{{ context }}"}

Tag your Virtual Private Cloud (VPC) and subnets so the AWS Load Balancer Operator can identify your network resources and assign load balancers to the correct public or private subnets. {._abstract}


:::note

This section only applies to clusters that were deployed into existing VPCs. If you did not deploy your cluster into an existing VPC, skip this section and proceed to the installation section below.

:::


**Procedure**

1.  Set the below variables to the proper values for your cluster deployment:
    ```terminal
    $ export VPC_ID=<vpc-id>
    $ export PUBLIC_SUBNET_IDS=<public-subnets>
    $ export PRIVATE_SUBNET_IDS=<private-subnets>
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}")
    ```
1.  Add a tag to your cluster’s VPC with the cluster name:
    ```terminal
    $ aws ec2 create-tags --resources ${VPC_ID} --tags Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=owned --region ${REGION}
    ```
1.  Add a tag to your public subnets:
    ```terminal
    $ aws ec2 create-tags \
         --resources ${PUBLIC_SUBNET_IDS} \
         --tags Key=kubernetes.io/role/elb,Value='' \
         --region ${REGION}
    ```
1.  Add a tag to your private subnets:
    ```terminal
    $ aws ec2 create-tags \
         --resources "${PRIVATE_SUBNET_IDS}" \
         --tags Key=kubernetes.io/role/internal-elb,Value='' \
         --region ${REGION}
    ```