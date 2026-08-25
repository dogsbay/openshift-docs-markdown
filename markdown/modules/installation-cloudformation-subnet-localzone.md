{% if context == "installing-aws-outposts" %}
{%- set outposts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# CloudFormation template for the VPC subnet {id="installation-cloudformation-subnet-localzone_{{ context }}"}

{% if not outposts %}
Use the CloudFormation template to deploy the private and public subnets in a zone on {{ zone_type }} infrastructure. The template provisions an `AWS::EC2::Subnet` and associates it with a specific {{ zone_type }} and VPC route table to reduce latency.
{% endif %}
{% if outposts %}
Use the CloudFormation template to deploy the private and public subnets in a zone on {{ zone_type }} infrastructure. The template provisions an `AWS::EC2::Subnet` and associates it with a specific {{ zone_type }} and VPC route table to reduce latency. {._abstract}
{% endif %}

```yaml title="CloudFormation template for VPC subnets" {minja}
AWSTemplateFormatVersion: 2010-09-09
Description: Template for Best Practice Subnets (Public and Private)

Parameters:
  VpcId:
    Description: VPC ID that comprises all the target subnets.
    Type: String
    AllowedPattern: ^(?:(?:vpc)(?:-[a-zA-Z0-9]+)?\b|(?:[0-9]{1,3}\.){{ 3 }}[0-9]{1,3})$
    ConstraintDescription: VPC ID must be with valid name, starting with vpc-.*.
  ClusterName:
    Description: Cluster name or prefix name to prepend the Name tag for each subnet.
    Type: String
    AllowedPattern: ".+"
    ConstraintDescription: ClusterName parameter must be specified.
  ZoneName:
    Description: Zone Name to create the subnets, such as us-west-2-lax-1a.
    Type: String
    AllowedPattern: ".+"
    ConstraintDescription: ZoneName parameter must be specified.
  PublicRouteTableId:
    Description: Public Route Table ID to associate the public subnet.
    Type: String
    AllowedPattern: ".+"
    ConstraintDescription: PublicRouteTableId parameter must be specified.
  PublicSubnetCidr:
    AllowedPattern: ^(([0-9]|[1-9][0-9]|1[0-9]{{ 2 }}|2[0-4][0-9]|25[0-5])\.){{ 3 }}([0-9]|[1-9][0-9]|1[0-9]{{ 2 }}|2[0-4][0-9]|25[0-5])(\/(1[6-9]|2[0-4]))$
    ConstraintDescription: CIDR block parameter must be in the form x.x.x.x/16-24.
    Default: 10.0.128.0/20
    Description: CIDR block for public subnet.
    Type: String
  PrivateRouteTableId:
    Description: Private Route Table ID to associate the private subnet.
    Type: String
    AllowedPattern: ".+"
    ConstraintDescription: PrivateRouteTableId parameter must be specified.
  PrivateSubnetCidr:
    AllowedPattern: ^(([0-9]|[1-9][0-9]|1[0-9]{{ 2 }}|2[0-4][0-9]|25[0-5])\.){{ 3 }}([0-9]|[1-9][0-9]|1[0-9]{{ 2 }}|2[0-4][0-9]|25[0-5])(\/(1[6-9]|2[0-4]))$
    ConstraintDescription: CIDR block parameter must be in the form x.x.x.x/16-24.
    Default: 10.0.128.0/20
    Description: CIDR block for private subnet.
    Type: String
{%- if outposts %}
  PrivateSubnetLabel:
    Default: "private"
    Description: Subnet label to be added when building the subnet name.
    Type: String
  PublicSubnetLabel:
    Default: "public"
    Description: Subnet label to be added when building the subnet name.
    Type: String
  OutpostArn:
    Default: ""
    Description: OutpostArn when creating subnets on AWS Outpost.
    Type: String

Conditions:
  OutpostEnabled: !Not [!Equals [!Ref "OutpostArn", ""]]
{%- endif %}

Resources:
  PublicSubnet:
    Type: "AWS::EC2::Subnet"
    Properties:
      VpcId: !Ref VpcId
      CidrBlock: !Ref PublicSubnetCidr
      AvailabilityZone: !Ref ZoneName
{%- if outposts %}
      OutpostArn: !If [ OutpostEnabled, !Ref OutpostArn, !Ref "AWS::NoValue"]
{%- endif %}
      Tags:
      - Key: Name
{%- if not outposts %}
        Value: !Join ['-', [!Ref ClusterName, "public", !Ref ZoneName]]
{%- endif %}
{%- if outposts %}
        Value: !Join ['-', [ !Ref ClusterName, !Ref PublicSubnetLabel, !Ref ZoneName]]
      - Key: kubernetes.io/cluster/unmanaged
        Value: true
{%- endif %}

  PublicSubnetRouteTableAssociation:
    Type: "AWS::EC2::SubnetRouteTableAssociation"
    Properties:
      SubnetId: !Ref PublicSubnet
      RouteTableId: !Ref PublicRouteTableId

  PrivateSubnet:
    Type: "AWS::EC2::Subnet"
    Properties:
      VpcId: !Ref VpcId
      CidrBlock: !Ref PrivateSubnetCidr
      AvailabilityZone: !Ref ZoneName
{%- if outposts %}
      OutpostArn: !If [ OutpostEnabled, !Ref OutpostArn, !Ref "AWS::NoValue"]
{%- endif %}
      Tags:
      - Key: Name
{%- if not outposts %}
        Value: !Join ['-', [!Ref ClusterName, "private", !Ref ZoneName]]
{%- endif %}
{%- if outposts %}
        Value: !Join ['-', [!Ref ClusterName, !Ref PrivateSubnetLabel, !Ref ZoneName]]
      - Key: kubernetes.io/cluster/unmanaged
        Value: true
{%- endif %}

  PrivateSubnetRouteTableAssociation:
    Type: "AWS::EC2::SubnetRouteTableAssociation"
    Properties:
      SubnetId: !Ref PrivateSubnet
      RouteTableId: !Ref PrivateRouteTableId

Outputs:
  PublicSubnetId:
    Description: Subnet ID of the public subnets.
    Value:
      !Join ["", [!Ref PublicSubnet]]

  PrivateSubnetId:
    Description: Subnet ID of the private subnets.
    Value:
      !Join ["", [!Ref PrivateSubnet]]
```

{% if outposts %}

where:


`kubernetes.io/cluster/unmanaged`
:   You must include the `kubernetes.io/cluster/unmanaged` tag in the public subnet configuration for AWS Outposts.

`kubernetes.io/cluster/unmanaged`
:   You must include the `kubernetes.io/cluster/unmanaged` tag in the private subnet configuration for AWS Outposts.
{% endif %}

{% if context == "installing-aws-outposts" %}
{%- set outposts = "" -%}
{% endif %}