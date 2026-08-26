{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable the subscription and set up your AWS account {id="subscription-enablement_{{ context }}"}

Activate {{ product_title }} on the AWS console page to enable billing and metering for the service. {._abstract}

**Prerequisites**

*   You are logged in to the Red&#160;Hat account that you want to associate with the AWS account that will activate the {{ product_title }} product subscription.

    The AWS account used for service billing can only be associated with a single Red&#160;Hat account. Typically, an AWS payer account is the one that is used to subscribe to {{ product_title }} and used for account linking and billing.

    All team members within the same Red&#160;Hat organization can use the linked AWS account for service billing while creating {{ product_title }} clusters.

**Procedure**

1.  Click the **Get started** button on [AWS console page](https://console.aws.amazon.com/rosa/home):
    ![rosa-get-started](/images/rosa-get-started.png)

    If you have activated {{ product_title }} before but did not complete the process, you can click the button and complete the account linking as described in the following steps.
1.  Confirm that you want your contact information to be shared with Red&#160;Hat and enable the service:
    ![rosa-enable-2](/images/rosa-enable-2.png)

    You are not charged by enabling the service in this step. The connection is made for billing and metering that takes place only after you deploy your first cluster. This could take a few minutes.
1.  Verify that the process completed successfully by reviewing the confirmation message:
    ![rosa-prereq-enable-3](/images/rosa-prereq-enable-3.png)
1.  Check the status of additional prerequisites on this verification page. If any prerequisites are not met, a corresponding message is shown. The following is an example of insufficient quotas in the selected region:
    ![rosa-service-quota-4](/images/rosa-service-quota-4.png)
    *   Click the **Increase service quotas** button or use the **Learn more** link to get more information about how to manage service quotas. In the case of insufficient quotas, note that quotas are region-specific. You can use the region switcher to re-run the quota check for any region you are interested in and then submit service quota increase requests as needed.
1.  Confirm that all the prerequisites are met:
    ![rosa-prereq-5](/images/rosa-prereq-5.png)

    The Elastic Load Balancing (ELB) service-linked role is created for you automatically. You can click any of the small **Info** blue links to get context-sensitive help and resources.