{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS VPC using the ROSA CLI {id="rosa-hcp-create-network_{{ context }}"}

The `rosa create network` command is available in v.1.2.48 or later of the {{ rosa_cli }}. The command uses AWS CloudFormation to create a VPC and associated networking components necessary to install a {{ product_title }} cluster. CloudFormation is a native AWS infrastructure-as-code tool and is compatible with the AWS CLI. {._abstract}

If you do not specify a template, CloudFormation uses a default template that creates resources with the following parameters:

**Default VPC parameters**

<table>
<thead>
<tr>
  <th>VPC parameter</th>
  <th>Value</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Availability zones</td>
  <td>1</td>
</tr>
<tr>
  <td>Region</td>
  <td><code>us-east-1</code></td>
</tr>
<tr>
  <td>VPC CIDR</td>
  <td><code>10.0.0.0/16</code></td>
</tr>
</tbody>
</table>

You can create and customize CloudFormation templates to use with the `rosa create network` command. See the additional resources of this section for information on the default VPC template.

**Prerequisites**

*   You have configured your AWS account
*   You have configured your Red Hat accounts
*   You have installed the {{ rosa_cli }} and configured it to the latest version

**Procedure**

1.  Create an AWS VPC using the default CloudFormations template by running the following command:
    ```terminal
    $ rosa create network
    ```
1.  Optional: Customize your VPC by specifying additional parameters.

    You can use the `--param` flag to specify changes to the default VPC template. The following example command specifies custom values for `region`, `Name`, `AvailabilityZoneCount` and `VpcCidr`.
    ```terminal
    $ rosa create network --param Region=us-east-2 --param Name=quickstart-stack --param AvailabilityZoneCount=3 --param VpcCidr=10.0.0.0/16
    ```

    The command takes about 5 minutes to run and provides regular status updates from AWS as resources are created. If there is an issue with CloudFormation, a rollback is attempted. For all other errors that are encountered, please follow the error message instructions or contact AWS support.

**Verification**

*   When completed, you receive a summary of the created resources:
    ```terminal
    INFO[0140] Resources created in stack:
    INFO[0140] Resource: AttachGateway, Type: AWS::EC2::VPCGatewayAttachment, ID: <gateway_id>
    INFO[0140] Resource: EC2VPCEndpoint, Type: AWS::EC2::VPCEndpoint, ID: <vpce_id>
    INFO[0140] Resource: EcrApiVPCEndpoint, Type: AWS::EC2::VPCEndpoint, ID: <vpce_id>
    INFO[0140] Resource: EcrDkrVPCEndpoint, Type: AWS::EC2::VPCEndpoint, ID: <vpce_id>
    INFO[0140] Resource: ElasticIP1, Type: AWS::EC2::EIP, ID: <IP>
    INFO[0140] Resource: ElasticIP2, Type: AWS::EC2::EIP, ID: <IP>
    INFO[0140] Resource: InternetGateway, Type: AWS::EC2::InternetGateway, ID: igw-016e1a71b9812464e
    INFO[0140] Resource: KMSVPCEndpoint, Type: AWS::EC2::VPCEndpoint, ID: <vpce_id>
    INFO[0140] Resource: NATGateway1, Type: AWS::EC2::NatGateway, ID: <nat-gateway_id>
    INFO[0140] Resource: PrivateRoute, Type: AWS::EC2::Route, ID: <route_id>
    INFO[0140] Resource: PrivateRouteTable, Type: AWS::EC2::RouteTable, ID: <route_id>
    INFO[0140] Resource: PrivateSubnetRouteTableAssociation1, Type: AWS::EC2::SubnetRouteTableAssociation, ID: <route_id>
    INFO[0140] Resource: PublicRoute, Type: AWS::EC2::Route, ID: <route_id>
    INFO[0140] Resource: PublicRouteTable, Type: AWS::EC2::RouteTable, ID: <route_id>
    INFO[0140] Resource: PublicSubnetRouteTableAssociation1, Type: AWS::EC2::SubnetRouteTableAssociation, ID: <route_id>
    INFO[0140] Resource: S3VPCEndpoint, Type: AWS::EC2::VPCEndpoint, ID: <vpce_id>
    INFO[0140] Resource: STSVPCEndpoint, Type: AWS::EC2::VPCEndpoint, ID: <vpce_id>
    INFO[0140] Resource: SecurityGroup, Type: AWS::EC2::SecurityGroup, ID: <security-group_id>
    INFO[0140] Resource: SubnetPrivate1, Type: AWS::EC2::Subnet, ID: <private_subnet_id-1>
    INFO[0140] Resource: SubnetPublic1, Type: AWS::EC2::Subnet, ID: <public_subnet_id-1>
    INFO[0140] Resource: VPC, Type: AWS::EC2::VPC, ID: <vpc_id>
    INFO[0140] Stack rosa-network-stack-5555 created
    ```
    *   The `<private_subnet_id-1>` and `<public_subnet_id-1>` subnet IDs are used to create your cluster when using the `rosa create cluster` command.
    *   The network stack name (`rosa-network-stack-5555`) is used to delete the resource later.