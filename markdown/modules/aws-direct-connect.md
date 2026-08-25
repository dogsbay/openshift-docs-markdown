{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure AWS Direct Connect {id="aws-direct-connect_{{ context }}"}

Configure AWS Direct Connect to establish a dedicated network connection between your remote network and your {{ product_title }} cluster Virtual Private Cloud (VPC). {._abstract}

{{ AWS }} Direct Connect requires a hosted Virtual Interface (VIF) connected to a Direct Connect Gateway (DXGateway), which is in turn associated to a Virtual Gateway (VGW) or a Transit Gateway. This allows you to access a remote VPC in the same or another account.

**Prerequisites**

*   The Classless Inter-Domain Routing (CIDR) range of the {{ product_title }} VPC does not conflict with any other associated VGWs.
*   Gather the following information:
    *   The Direct Connect Gateway ID.
    *   The AWS Account ID associated with the virtual interface.
    *   The Border Gateway Protocol (BGP) Autonomous System Number (ASN) assigned for the DXGateway. Optional: the Amazon default ASN may also be used.

**Procedure**

1.  [Create a VIF](https://docs.aws.amazon.com/directconnect/latest/UserGuide/create-vif.html) or [view your existing VIFs](https://docs.aws.amazon.com/directconnect/latest/UserGuide/viewvifdetails.html) to determine the type of direct connection you need to create.
1.  Create your gateway.
    1.  If the Direct Connect VIF type is **Private**, [create a virtual private gateway](https://docs.aws.amazon.com/directconnect/latest/UserGuide/virtualgateways.html#create-virtual-private-gateway).
    1.  If the Direct Connect VIF is **Public**, [create a Direct Connect gateway](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html#create-direct-connect-gateway).
1.  If you have an existing gateway you want to use, [create an association proposal](https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html) and send the proposal to the DXGateway owner for approval.

    :::warning

    When connecting to an existing DXGateway, you are responsible for the [costs](https://aws.amazon.com/directconnect/pricing/).
    
    :::