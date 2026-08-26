{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS Direct Connect methods {id="dedicated-aws-dc-methods"}

To access a remote VPC in the same or another account, a Direct Connect connection requires a hosted Virtual Interface (VIF) connected to a Direct Connect Gateway (DXGateway), which is in turn associated to a Virtual Gateway (VGW) or a Transit Gateway. {._abstract}

If you do not have an existing DXGateway, the typical process involves creating the hosted VIF, with the DXGateway and VGW being created in the {{ product_title }} AWS Account.

If you have an existing DXGateway connected to one or more existing VGWs, the process involves the {{ product_title }} AWS Account sending an Association Proposal to the DXGateway owner. The DXGateway owner must ensure that the proposed CIDR will not conflict with any other VGWs they have associated.


:::important

When connecting to an existing DXGateway, you are responsible for the costs. For more information, see _Additional resources_.

:::


There are two configuration options available:


Method 1
:   Create the hosted VIF and then the DXGateway and VGW.

Method 2
:   Request a connection by using an existing Direct Connect Gateway that you own.