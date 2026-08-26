{%- set _mod_docs_content_type = "PROCEDURE" %}
# Determining the Direct Connect Virtual Interface type {id="dedicated-aws-dc-hvif-determine-type_{{ context }}"}

Determine whether your Direct Connect Virtual Interface (VIF) is private or public. This determines whether you create a Virtual Private Gateway or a Direct Connect Gateway. {._abstract}

**Prerequisites**

*   Gather {{ product_title }} AWS Account ID.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  Select **Direct Connect** from the **Services** menu.
1.  There will be one or more Virtual Interfaces waiting to be accepted, select one of them to view the **Summary**.
1.  View the Virtual Interface type: private or public.
1.  Record the **Amazon side ASN** value.

**Next steps**

If the Virtual Interface type is private, create a Virtual Private Gateway. If the Virtual Interface type is public, create a Direct Connect Gateway.