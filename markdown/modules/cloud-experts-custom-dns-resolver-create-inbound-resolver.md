{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an Amazon Route 53 Inbound Resolver {id="cloud-experts-custom-dns-resolver-create-inbound-resolver_{{ context }}"}

Deploy an Amazon Route 53 Inbound Resolver in the Virtual Private Cloud (VPC) where you plan to deploy the cluster. With the inbound resolver, your DNS server can forward queries to Route 53. {._abstract}


:::warning

In this example, the [Amazon Route 53 Inbound Resolver](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html) is deployed into the same VPC the cluster uses. If you want to deploy it into a separate VPC, you must manually associate the private hosted zone(s) **once cluster creation is started**. You cannot associate the zone before the cluster creation process begins. Failure to associate the private hosted zone during the cluster creation process will result in cluster creation failures.

:::


**Procedure**

1.  Create a security group and allow access to ports `53/tcp` and `53/udp` from the VPC:
    ```terminal
    $ SG_ID=$(aws ec2 create-security-group --group-name rosa-inbound-resolver --description "Security group for ROSA inbound resolver" --vpc-id ${VPC_ID} --region ${REGION} --output text)
    $ aws ec2 authorize-security-group-ingress --group-id ${SG_ID} --protocol tcp --port 53 --cidr ${VPC_CIDR} --region ${REGION}
    $ aws ec2 authorize-security-group-ingress --group-id ${SG_ID} --protocol udp --port 53 --cidr ${VPC_CIDR} --region ${REGION}
    ```
1.  Create an Amazon Route 53 Inbound Resolver in your VPC:
    ```terminal
    $ RESOLVER_ID=$(aws route53resolver create-resolver-endpoint \
      --name rosa-inbound-resolver \
      --creator-request-id rosa-$(date '+%Y-%m-%d') \
      --security-group-ids ${SG_ID} \
      --direction INBOUND \
      --ip-addresses $(aws ec2 describe-subnets --filter Name=vpc-id,Values=${VPC_ID} --region ${REGION} | jq -jr '.Subnets | map("SubnetId=\(.SubnetId) ") | .[]') \
      --region ${REGION} \
      --output text \
      --query 'ResolverEndpoint.Id')
    ```

    :::note

    The above command attaches Amazon Route 53 Inbound Resolver endpoints to _all subnets_ in the provided VPC using dynamically allocated IP addresses. If you prefer to manually specify the subnets, the IP addresses, or both, run the following command instead:

    ```terminal
    $ RESOLVER_ID=$(aws route53resolver create-resolver-endpoint \
      --name rosa-inbound-resolver \
      --creator-request-id rosa-$(date '+%Y-%m-%d') \
      --security-group-ids ${SG_ID} \
      --direction INBOUND \
      --ip-addresses SubnetId=<subnet_ID>,Ip=<endpoint_IP> SubnetId=<subnet_ID>,Ip=<endpoint_IP> \
      --region ${REGION} \
      --output text \
      --query 'ResolverEndpoint.Id')
    ```
    +
    where:


    `<subnet_ID>`
    :   Specifies the subnet ID you want inbound resolver endpoints added to.

    `<endpoint_IP>`
    :   Specifies the static IP addresses you want inbound resolver endpoints added to.
    
    :::

1.  Get the IP addresses of your inbound resolver endpoints to configure in your DNS server configuration:
    ```terminal
    $ aws route53resolver list-resolver-endpoint-ip-addresses \
      --resolver-endpoint-id ${RESOLVER_ID} \
      --region=${REGION} \
      --query 'IpAddresses[*].Ip'
    ```
    ```text title="Example output"
    [
        "10.0.45.253",
        "10.0.23.131",
        "10.0.148.159"
    ]
    ```