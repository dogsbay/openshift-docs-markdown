{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the AWS environment for BGP peering {id="nw-preparing-aws-bgp-peering_{{ context }}"}

Before you can configure BGP Cloud Connector on your cluster, you must prepare the supporting {{ aws_short }} infrastructure.
This preparation ensures the BGP Cloud Connector discovers and peers with an {{ aws_short }} Route Server that already exists. {._abstract}

**Prerequisites**

*   You have an {{ product_title }} cluster running on {{ aws_short }} with an existing VPC.
*   You have an {{ aws_short }} IAM user that you use to perform this setup.

**Procedure**

1.  Get the OpenID Connect (OIDC) provider and {{ aws_short }} account ID for the cluster by entering the following commands:
    ```terminal
    $ OIDC_PROVIDER=$(oc get authentication cluster -o jsonpath='{.spec.serviceAccountIssuer}' | sed 's|https://||')
    ```
    ```terminal
    $ AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
    ```
1.  Create an AWS IAM permission policy for the BGP Cloud Connector Operator.
    1.  Create the permission policy document file by entering the following command:
        ```terminal
        $ cat <<EOF > operator-permission-policy.json
        {
          "Version": "2012-10-17",
          "Statement": [{
            "Effect": "Allow",
            "Action": [
              "sts:GetCallerIdentity",
              "ec2:DescribeRouteServers",
              "ec2:DescribeRouteServerEndpoints",
              "ec2:DescribeSubnets",
              "ec2:DescribeRouteServerPeers",
              "ec2:CreateRouteServerPeer",
              "ec2:DeleteRouteServerPeer",
              "ec2:CreateTags",
              "ec2:DescribeInstances",
              "ec2:ModifyNetworkInterfaceAttribute"
            ],
            "Resource": "*"
          }]
        }
        EOF
        ```
    1.  Create the IAM permission policy by entering the following command:
        ```terminal
        $ POLICY_ARN=$(aws iam create-policy \
            --policy-name bgp-cloud-connector-operator-policy \
            --policy-document file://operator-permission-policy.json \
            --query 'Policy.Arn' --output text)
        ```
1.  Create an {{ aws_short }} IAM role for the BGP Cloud Connector Operator:
    1.  Create the trust policy document for the Operator role by entering the following command:
        ```terminal
        $ cat <<EOF > operator-trust-policy.json
        {
          "Version": "2012-10-17",
          "Statement": [{
            "Effect": "Allow",
            "Principal": {
              "Federated": "arn:aws:iam::${AWS_ACCOUNT_ID}:oidc-provider/${OIDC_PROVIDER}"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
              "StringEquals": {
                "${OIDC_PROVIDER}:sub": "system:serviceaccount:bgp-cloud-connector:openshift-bgp-cloud-connector-controller-manager"
              }
            }
          }]
        }
        EOF
        ```
    1.  Create the IAM role by using the trust policy by entering the following command:
        ```terminal
        $ aws iam create-role --role-name bgp-cloud-connector-operator \
            --assume-role-policy-document file://operator-trust-policy.json
        ```
    1.  Attach the permission policy to the IAM role by entering the following command:
        ```terminal
        $ aws iam attach-role-policy \
            --role-name bgp-cloud-connector-operator \
            --policy-arn ${POLICY_ARN}
        ```
1.  Create a dedicated security group for BGP traffic in your cluster’s VPC by entering the following command:
    ```terminal
    $ BGP_SG_ID=$(aws ec2 create-security-group \
        --group-name "bgp-peering-sg" \
        --description "Security group for BGP Cloud Connector peering traffic" \
        --vpc-id ${vpc_id} \
        --query 'GroupId' --output text)
    ```

    Replace `vpc_id` with the ID of the VPC of the cluster.
1.  Add rules to the security group to allow the following BGP traffic and workload traffic patterns. You can add any ports to the security group that your VMs or pods on the CUDN need for traffic. You can edit this security group at a later stage.

    :::note

    If you plan to use Bidirectional Forwarding Detection (BFD), repeat the commands to allow the appropriate UDP control traffic ports,such as UDP port `3784`. Restrict the `--cidr` range to your specific Route Server endpoint subnets if required by the security policies of your organization.
    
    :::

    *   Allow TCP Ingress/Egress on port `179` for bidirectional BGP traffic by running the following command:
        ```terminal
        $ aws ec2 authorize-security-group-egress --group-id ${BGP_SG_ID} --ip-permissions '[
          {"IpProtocol": "tcp", "FromPort": 179, "ToPort": 179, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "BGP"}]}
        ]'
        ```
    *   Allow TCP/UDP Ingress traffic on ports `32768-60999`, because bidirectional traffic originating from a VM might enter the cluster through a different compute node than the bidirectional traffic exits. Run the following command:
        ```terminal
        $ aws ec2 authorize-security-group-ingress --group-id ${BGP_SG_ID} --ip-permissions '[
          {"IpProtocol": "tcp", "FromPort": 179, "ToPort": 179, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "BGP"}]},
          {"IpProtocol": "tcp", "FromPort": 32768, "ToPort": 60999, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Ephemeral"}]},
          {"IpProtocol": "udp", "FromPort": 32768, "ToPort": 60999, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Ephemeral"}]}
        ]'
        ```
1.  Create one or more new {{ product_rosa }} machine pools that include the BGP security group and the required BGP router label by running the following command:
    ```terminal
    $ rosa create machinepool \
        --cluster <cluster_name> \
        --name bgp-workers \
        --availability-zone <availability_zone> \
        --additional-security-group-ids ${BGP_SG_ID} \
        --labels "bgp_router=true" \
        --instance-type <instance_type> \
        --replicas 2
    ```

    where:

    `<cluster_name>`
    :   Specifies the name of the cluster.

    `bgp-workers`
    :   Specifies the name of the new machine pool dedicated to BGP workloads.

    `<availability_zone>`
    :   Specifies the {{ aws_short }} availability zone where the machine pool gets created.

    `--additional-security-group-ids`
    :   Attaches the BGP security group created in an earlier step to all compute nodes provisioned in the machine pool.

    `--labels "bgp_router=true"`
    :   Automatically labels all compute nodes in this machine pool to participate in BGP.

    `<instance_type>`
    :   Specifies the {{ aws_short }} instance type of the compute nodes.

    `--replicas 2`
    :   Specifies the number of compute nodes the machine pool should have.
1.  Verify that the new machine pool was created with the additional security group and label by entering the following command:
    ```terminal
    $ rosa describe machinepool --cluster <cluster_name> bgp-workers
    ```

    Replace `<cluster_name>` with the name of your cluster.
1.  Confirm that the compute nodes provisioned by the machine pool inherit the `bgp_router=true` label by running the following command:
    ```terminal
    $ oc get nodes -l bgp_router=true
    ```
1.  Create an {{ aws_short }} Route Server by entering the following command:
    ```terminal
    $ aws ec2 create-route-server --amazon-side-asn <asn>
    ```

    Replace `<asn>` with the Border Gateway Protocol (BGP) Autonomous System Number (ASN) that you want the Route Server to use.
    Note the `RouteServerId` value in the command output that is required in a later step.
    In the example that follows, the ID is `rs-0abc123456789abcd`.
    ```terminal
    {
       "RouteServer": {
           "RouteServerId": "rs-0abc123456789abcd",
           "AmazonSideAsn": 65100,
           "State": "pending",
           "PersistRoutes": "disable",
           "SnsNotificationsEnabled": false
       }
    }
    ```
1.  Associate the Route Server with the VPC of the cluster by entering the following command:
    ```terminal
    $ aws ec2 associate-route-server --route-server-id <route_server_id> \
       --vpc-id <vpc_id>
    ```

    where:

    `<route_server_id>`
    :   Specifies the Route Server ID from an earlier step.

    `<vpc_id>`
    :   Specifies the ID of the VPC of the cluster.

1.  Find the private subnets used by the compute nodes of the cluster by entering the following command:
    ```terminal
    $ rosa list machinepools --cluster <cluster_name>
    ```

    Replace `<cluster_name>` with the name of the cluster.

    :::note

    From the output of the command, ignore any duplicate subnet IDs in the `SUBNET` column
    
    :::

1.  For each private subnet that contains BGP-enabled compute nodes, create Route Server endpoints, two per subnet:
    ```terminal
    $ aws ec2 create-route-server-endpoint --route-server-id <route_server_id> \
       --subnet-id <subnet_id> && \
       aws ec2 create-route-server-endpoint --route-server-id <route_server_id> \
       --subnet-id <subnet_id>
    ```

    Replace `<route_server_id>` with the ID of your Route Server.

    Replace `<subnet_id>` with the ID of the subnet. Repeat this command for each private subnet that contains BGP-enabled compute nodes.

    :::note

    {{ aws_short }} allows a maximum of two Route Server endpoints per subnet.
    
    :::

1.  Enable route propagation from the Route Server to the relevant VPC route tables.
    1.  Identify the route tables associated with your VPC by entering the following command:
        ```terminal
        $ aws ec2 describe-route-tables \
          --filters "Name=vpc-id,Values=<vpc_id>" \
          --query "RouteTables[*].{RouteTableId: RouteTableId, Name: Tags[?Key=='Name'].Value | [0], Subnets: Associations[*].SubnetId}" \
          --output table
        ```

        Replace `<vpc_id>` with the ID of the VPC for your cluster.
    1.  Enable route propagation for each route table by entering the following command:
        ```terminal
        $ aws ec2 enable-route-server-propagation --route-server-id <route_server_id> \
          --route-table-id <route_table_id>
        ```

        Replace `<route_server_id>` with the ID of your Route Server, and replace `<route_table_id>` with the ID of a route table identified in an earlier step.

        Repeat this command for all of the following route tables:
        *   Compute node subnets (Minimum): Every route table associated with the private subnets containing your compute nodes.
        *   External connectivity subnets (If applicable): Any route table associated with subnets that host network interfaces for external connectivity mechanisms into the VPC, such as Transit Gateway ENIs.

**Verification**

*   Confirm that the network ACLs for both the compute node subnet and the Route Server endpoint subnet allow this traffic. To do this task, enter the following the command.
This configuration is required because network ACLs are stateless and apply in addition to security groups.
    ```terminal
    $ aws ec2 describe-network-acls --filters \
       "Name=association.subnet-id,Values=<subnet_id>" --query \
       "NetworkAcls[].Entries"
    ```

    Replace `<subnet_id>` with the ID of the compute node subnet. Repeat the command for the Route Server endpoint subnet.

    In the output, confirm that both the inbound and outbound rule sets include an `Allow` entry for TCP port `179` between the CIDR blocks in the two subnets.

    :::important

    Network ACL rules are evaluated in ascending order by rule number, and the first matching rule wins.
    A `Deny` rule with a lower rule number than your `Allow` rule blocks the traffic even though an `Allow` rule exists further down the list.
    If your VPC uses the default network ACL, all traffic is allowed by default and no further action is needed.
    
    :::