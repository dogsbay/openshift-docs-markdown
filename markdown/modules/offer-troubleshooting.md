{%- set _mod_docs_content_type = "REFERENCE" %}
# Private offer troubleshooting {id="offer-troubleshooting_{{ context }}"}

Review solutions for the most frequent issues associated with private offer acceptance and Red&#160;Hat account linking. {._abstract}

## Accessing a private offer using a different AWS account {id="accessing-private-offer-different-aws-account_{{ context }}"}

*   If you try accessing the private offer when logged in under an AWS account ID that is not defined in the offer, and see the "Page not found" message, then verify that you are logged in as the desired AWS billing account.
    ![rosa-http-404-error-when-using-the-private-offer-url](/_assets/images/rosa-http-404-error-when-using-the-private-offer-url.png)
    *   Contact the seller if you need the private offer to be extended to another AWS account.

## The private offer cannot be accepted because of an active subscription {id="private-offer-cannot-be-accepted_{{ context }}"}

*   If you try accessing a private offer that was created for the first-time {{ product_title }} activation, while you already have {{ product_title }} activated using another public or private offer, and see the following notice, then contact the seller who provided you with the offer.

    The seller can provide you with a new offer that will seamlessly replace your current agreement, without a need to cancel your previous subscription.
    ![rosa-existing-subscription-preventing-private-offer-acceptance](/_assets/images/rosa-existing-subscription-preventing-private-offer-acceptance.png)

## The AWS account is already linked to a different Red&#160;Hat account {id="aws-account-linked-to-different-rh-account_{{ context }}"}

*   If you see the error message "AWS account is already linked to a different Red&#160;Hat account" when you try to connect the AWS account that accepted the private offer with a presently logged-in Red&#160;Hat user, then the AWS account is already connected to another Red&#160;Hat user.
    ![rosa-aws-account-is-already-linked-to-a-different-red-hat-account](/_assets/images/rosa-aws-account-is-already-linked-to-a-different-red-hat-account.png)
*   You can either log in using another Red&#160;Hat account or another AWS account.
    *   However, since this guide pertains to private offers, the assumption is that you are logged in with the AWS account that was specified as the buyer and already accepted the private offer so it is intended to be used as the billing account. Logging in as another AWS account is not expected after a private offer was accepted.
*   You can still log in with another Red&#160;Hat user which is already connected to the AWS account that accepted the private offer. Other Red&#160;Hat users belonging to the same Red&#160;Hat organization are able to use the linked AWS account as the {{ product_title }} AWS billing account when creating clusters.
*   If you believe that the existing account linking might not be correct, see the "My team members belong to different Red&#160;Hat organizations" question for tips on how you can proceed.

## My team members belong to different Red&#160;Hat organizations {id="team-members-different-rh-organizations_{{ context }}"}

*   An AWS account can be connected to a single Red&#160;Hat account only. Any user that wants to create a cluster and benefit from the private offer granted to this AWS account needs to be in the same Red&#160;Hat account. This can be achieved by inviting the user to the same Red&#160;Hat account and creating a new Red&#160;Hat user.

## Incorrect AWS billing account was selected when creating a cluster {id="incorrect-aws-billing-account_{{ context }}"}

*   If the user selected an incorrect AWS billing account, the fastest way to fix this is to delete the cluster and create a new one, while selecting the correct AWS billing account.
*   If this is a production cluster that cannot be easily deleted, contact Red&#160;Hat support to change the billing account for an existing cluster. Expect some turnaround time for this to be resolved.