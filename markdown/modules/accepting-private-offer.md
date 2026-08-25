{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accept a private offer {id="accepting-private-offer_{{ context }}"}

Accept a private offer for {{ product_title }} by reviewing available offers and selecting a new offer or upgrading an existing one. {._abstract}

**Prerequisites**

*   You are logged in using the AWS account that was specified as the buyer. Attempting to access the offer using another AWS account produces a "Page not found" error message.

**Procedure**

1.  Open the private offer URL provided by the seller. You can only access the URL from the AWS account ID that was specified by the seller.
1.  On the **Offer selection** page, review **Available offers**. Options can include:
    1.  A regular private offer that is pre-selected. This type of offer can be accepted only if {{ product_title }} was not activated before using the public offer or another private offer.
        ![rosa-regular-private-offer](/_assets/images/rosa-regular-private-offer.png)
    1.  A private offer that was created for an AWS account that previously activated {{ product_title }} using the public offer. The selected private offer is labeled as **Upgrade** and accepting this offer replaces the currently running contract for {{ product_title }}.
        ![rosa-private-offer-selection-selection-screen](/_assets/images/rosa-private-offer-selection-selection-screen.png)
    1.  If multiple offers are available, the public offer activated earlier is shown together with the newly provided agreement-based offer that is labeled as "Upgrade".
        ![rosa-private-offer-selection-dropdown](/_assets/images/rosa-private-offer-selection-dropdown.png)
1.  Verify that your offer configuration is selected and review the offer details.

    :::note

    Review the contract end date, the number of units included with the offer, and the payment schedule. In this example, 1 cluster and up to 3 nodes utilizing 4 vCPUs are included.
    
    :::

    ![rosa-private-offer-details](/_assets/images/rosa-private-offer-details.png)
1.  Optional: [Add your own purchase order (PO) number](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-purchase-orders.html) to the subscription that is being purchased, so it is included on your subsequent AWS invoices. Also, check the "Additional usage fees" that are charged for any usage above the scope of the "New offer configuration details".

    :::note

    Private offers have several available configurations.

    *   It is possible that the private offer you are accepting is set up with a fixed future start date.
    *   If you do not have another active {{ product_title }} subscription at the time of accepting the private offer, a public offer or an older private offer entitlement, accept the private offer itself and continue with the account linking and cluster deployment steps after the specified service start date.

    You must have an active {{ product_title }} entitlement to complete these steps. Service start dates are always reported in the UTC time zone
    
    :::

1.  Create or upgrade your contract.
    1.  For private offers accepted by an AWS account that does not have {{ product_title }} activated yet and is creating the first contract for this service, click the **Create contract button**.
        ![rosa-create-contract-button](/_assets/images/rosa-create-contract-button.png)
    1.  For agreement-based offers, click the **Upgrade current contract** button shown in Figures 4 and 6.
        ![rosa-upgrade-contract-button](/_assets/images/rosa-upgrade-contract-button.png)
1.  Click **Confirm**.
    ![rosa-private-offer-acceptance-confirmation-window](/_assets/images/rosa-private-offer-acceptance-confirmation-window.png)
1.  If the accepted private offer service start date is set to be immediately following the offer acceptance, click the **Set up your account** button in the confirmation modal window.
    ![rosa-subscription-contfirmation](/_assets/images/rosa-subscription-contfirmation.png)
1.  If the accepted private offer has a future start date specified, return to the private offer page after the service start date, and click the **Setup your account** button to proceed with the Red&#160;Hat and AWS account linking.

    :::note

    With no agreement active, the account linking described below is not triggered, the "Account setup" process can be done only after the "Service start date".

    These are always in UTC time zone.
    
    :::