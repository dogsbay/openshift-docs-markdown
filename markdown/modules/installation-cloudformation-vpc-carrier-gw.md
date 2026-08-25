{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}

{% if wavelength_zone %}
# CloudFormation template for the VPC Carrier Gateway {id="installation-cloudformation-vpc-carrier-gw_{{ context }}"}

{% endif %}
{% if post_aws_zones %}
# Wavelength Zones only: CloudFormation template for the VPC Carrier Gateway {id="_wavelength_zones_only_cloudformation_template_for_the_vpc_carrier_gateway"}

{% endif %}

Use the CloudFormation template to deploy the Carrier Gateway on {{ aws_first }} Wavelength infrastructure. The template automates the creation of an {{ aws_short }} Carrier Gateway for {{ product_title }}. The template provisions an `AWS::EC2::CarrierGateway` and associates it with the cluster VPC to enable traffic routing to provide direct internet connectivity for resources in Wavelength Zones that use carrier networks. {._abstract}

```yaml title="CloudFormation template for VPC Carrier Gateway" {minja}
AWSTemplateFormatVersion: 2010-09-09
Description: Template for Creating Wavelength Zone Gateway (Carrier Gateway).

Parameters:
  VpcId:
    Description: VPC ID to associate the Carrier Gateway.
    Type: String
    AllowedPattern: ^(?:(?:vpc)(?:-[a-zA-Z0-9]+)?\b|(?:[0-9]{1,3}\.){{ 3 }}[0-9]{1,3})$
    ConstraintDescription: VPC ID must be with valid name, starting with vpc-.*.
  ClusterName:
    Description: Cluster Name or Prefix name to prepend the tag Name for each subnet.
    Type: String
    AllowedPattern: ".+"
    ConstraintDescription: ClusterName parameter must be specified.

Resources:
  CarrierGateway:
    Type: "AWS::EC2::CarrierGateway"
    Properties:
      VpcId: !Ref VpcId
      Tags:
      - Key: Name
        Value: !Join ['-', [!Ref ClusterName, "cagw"]]

  PublicRouteTable:
    Type: "AWS::EC2::RouteTable"
    Properties:
      VpcId: !Ref VpcId
      Tags:
      - Key: Name
        Value: !Join ['-', [!Ref ClusterName, "public-carrier"]]

  PublicRoute:
    Type: "AWS::EC2::Route"
    DependsOn: CarrierGateway
    Properties:
      RouteTableId: !Ref PublicRouteTable
      DestinationCidrBlock: 0.0.0.0/0
      CarrierGatewayId: !Ref CarrierGateway

  S3Endpoint:
    Type: AWS::EC2::VPCEndpoint
    Properties:
      PolicyDocument:
        Version: 2012-10-17
        Statement:
        - Effect: Allow
          Principal: '*'
          Action:
          - '*'
          Resource:
          - '*'
      RouteTableIds:
      - !Ref PublicRouteTable
      ServiceName: !Join
      - ''
      - - com.amazonaws.
        - !Ref 'AWS::Region'
        - .s3
      VpcId: !Ref VpcId

Outputs:
  PublicRouteTableId:
    Description: Public Route table ID
    Value: !Ref PublicRouteTable
```

{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = "" -%}
{% endif %}