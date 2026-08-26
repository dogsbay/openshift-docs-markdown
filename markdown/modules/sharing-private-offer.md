{%- set _mod_docs_content_type = "PROCEDURE" %}
# Share a private offer {id="sharing-private-offer_{{ context }}"}

You can share a private offer with other team members within your Red&#160;Hat organization account. {._abstract}

{{ product_title }} entitlement is shared with other team members through your Red&#160;Hat organization account. All existing users in the same Red&#160;Hat organization can select the billing AWS account that accepted the private offer. You can [manage users in your Red&#160;Hat organization](https://www.redhat.com/wapps/ugc/protected/usermgt/userList.html), when logged in as the Red&#160;Hat organization administrator, and invite or create new users.

**Procedure**

1.  Click **Set up your account** to proceed to the AWS and Red&#160;Hat account linking step. At this time, you are already logged in with the AWS account that accepted the offer. Log in to a Red&#160;Hat account, if prompted.

    :::note

    A {{ product_title }} private offer cannot be shared with AWS linked accounts through the AWS License Manager.
    
    :::

1.  Add any users that you want to deploy {{ product_title }} clusters. Check [Common User Management Questions](https://access.redhat.com/customer-service-users) for more details about Red&#160;Hat account user management tasks.
1.  Verify that the already logged in Red&#160;Hat account includes all users that are meant to be {{ product_title }} cluster deployers benefiting from the accepted private offer.
1.  Verify that the Red&#160;Hat account number and the AWS account ID are the desired accounts that are to be linked. This linking is unique and a Red&#160;Hat account can be connected only with a single AWS (billing) account.
    ![rosa-aws-and-red-hat-accounts-connection](/images/rosa-aws-and-red-hat-accounts-connection.png)
1.  To link the AWS account with another Red&#160;Hat account, log out from the {{ hybrid_console }} before connecting the accounts. Repeat the step of setting the account by returning to the private offer URL that is already accepted.

    An AWS account can be connected with a single Red&#160;Hat account only. Once Red&#160;Hat and AWS accounts are connected, this cannot be changed by the user. If a change is needed, the user must create a support ticket.
1.  Agree to the terms and conditions and then click **Connect accounts**.