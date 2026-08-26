{%- set _mod_docs_content_type = "PROCEDURE" %}
# Associating the Direct Connect gateway with the virtual private gateway {id="dedicated-aws-dc-existing-associate-dxgw_{{ context }}"}

After you create a virtual private gateway, associate it with your existing Direct Connect gateway. {._abstract}

**Prerequisites**

*   You created a virtual private gateway in your {{ product_title }} AWS account.

**Procedure**

1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Click **virtual private gateways** and select the virtual private gateway.
1.  Click **View details**.
1.  Click the **Direct Connect gateway associations** tab.
1.  Click **Associate Direct Connect gateway**
1.  Under **Association account type**, for Account owner, click **Another account**.
1.  Under **Association settings**, for Direct Connect gateway ID, enter the ID of the Direct Connect gateway.
1.  For **Direct Connect gateway owner**, enter the ID of the AWS account that owns the Direct Connect gateway.
1.  Optional: Add prefixes to **Allowed prefixes**, separating them using commas or put them on separate lines.
1.  Click **Associate Direct Connect gateway**.

**Next steps**

After the Association Proposal has been sent, you must accept it. Follow the final steps you must perform are available in the [Associate a Direct Connect virtual private gateway across accounts](https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html) (AWS documentation).