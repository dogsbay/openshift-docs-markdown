{%- set _mod_docs_content_type = "PROCEDURE" %}
# Link AWS and Red&#160;Hat accounts and subscriptions {id="aws-rh-linking_{{ context }}"}

Link your AWS and Red&#160;Hat accounts to associate your {{ product_title }} subscription with a billing account. {._abstract}

**Procedure**

1.  Click the **Continue to Red&#160;Hat** button to proceed with account linking:
    ![rosa-continue-rh-6](/images/rosa-continue-rh-6.png)
1.  Log in to your Red&#160;Hat account, if prompted.
    ![rosa-login-rh-account-7](/images/rosa-login-rh-account-7.png)

    :::note

    Your AWS account must be linked to a single Red&#160;Hat organization.
    
    :::

    *   You can also register for a new Red&#160;Hat account or reset your password on this page.
    *   Log in to the Red&#160;Hat account that you want to associate with the AWS account that has activated the {{ product_title }} product subscription.
    *   The AWS account used for service billing can only be associated with a single Red&#160;Hat account. Typically, an AWS payer account is the one that is used to subscribe to {{ product_title }} and used for account linking and billing.
    *   All team members within the same Red&#160;Hat organization can use the linked AWS account for service billing while creating {{ product_title }} clusters.
1.  Complete the Red&#160;Hat account linking after reviewing the terms and conditions.

    :::note

    This step is available only if the AWS account was not linked to any Red&#160;Hat account before.

    This step is skipped if the AWS account is already linked to the user’s logged in Red&#160;Hat account.

    If the AWS account is linked to a different Red&#160;Hat account, an error is displayed. See [Correcting Billing Account Information for HCP clusters](https://access.redhat.com/articles/7066995) for troubleshooting.
    
    :::

1.  On the **Complete your account connection** page, verify that the Red&#160;Hat and AWS account numbers are correct.
    ![rosa-rh-account-connection-8](/images/rosa-rh-account-connection-8.png)
1.  Click the **Connect accounts** button if you agree with the service terms.

    If this is the first time you are using the {{ hybrid_console }}, you must agree with the general managed services terms and conditions before creating the first cluster:
    ![rosa-terms-conditions-9](/images/rosa-terms-conditions-9.png)

    Additional terms that need to be reviewed and accepted are shown after clicking the **View Terms and Conditions** button:
    ![rosa-terms-conditions-9-5](/images/rosa-terms-conditions-9-5.png)

    Submit your agreement once you have reviewed any additional terms when prompted at this time.
1.  The {{ hybrid_console_second }} provides a confirmation that AWS account setup was completed and lists the prerequisites for cluster deployment:
    ![rosa-cluster-create-10](/images/rosa-cluster-create-10.png)

    The last section of this page shows cluster deployment options, either using the {{ rosa_cli_first }} or through the web console:
    ![rosa-cli-ui-12](/images/rosa-cli-ui-12.png)