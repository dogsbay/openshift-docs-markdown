{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tag the AWS VPC and subnets {id="tagging-aws-vpc-subnets_{{ context }}"}

To prepare your environment for the AWS Load Balancer Operator, tag your AWS Virtual Private Cloud (VPC) resources. This configuration ensures that the Operator can correctly identify and manage your network resources. {._abstract}

**Prerequisites**

*   You have installed the AWS CLI (`aws`).
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Optional: Set up environment variables for AWS VPC resources.
    ```terminal
    $ export VPC_ID=<vpc_id>
    ```
    ```terminal
    $ export PUBLIC_SUBNET_IDS="<public_subnet_a_id> <public_subnet_b_id> <public_subnet_c_id>"
    ```
    ```terminal
    $ export PRIVATE_SUBNET_IDS="<private_subnet_a_id> <private_subnet_b_id> <private_subnet_c_id>"
    ```
1.  Tag your VPC to associate it with your cluster:
    ```terminal
    $ aws ec2 create-tags --resources ${VPC_ID} --tags Key=kubernetes.io/cluster/${CLUSTER_NAME},Value=owned --region ${REGION}
    ```
1.  Tag your public subnets to allow changes by elastic load balancing roles, and tag your private subnets to allow changes by internal elastic load balancing roles:
    ```bash
    cat <<EOF > "${SCRATCH}/tag-subnets.sh"
    #!/bin/bash

    aws ec2 create-tags \
         --resources ${PUBLIC_SUBNET_IDS} \
         --tags Key=kubernetes.io/role/elb,Value='' \
         --region ${REGION}

    aws ec2 create-tags \
         --resources ${PRIVATE_SUBNET_IDS} \
         --tags Key=kubernetes.io/role/internal-elb,Value='' \
         --region ${REGION}

    EOF
    ```
1.  Run the script: 
    ```bash
    bash ${SCRATCH}/tag-subnets.sh
    ```