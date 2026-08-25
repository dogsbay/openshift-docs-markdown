{%- set _mod_docs_content_type = "PROCEDURE" %}
# Select the AWS billing account {id="aws-account-billing-selection_{{ context }}"}

When deploying {{ product_title }} clusters, verify that end users select the AWS billing account that accepted the private offer. {._abstract}

**Procedure**

*   When using the web interface to deploy {{ product_title }}, verify that the **AWS billing account** drop-down is set to the AWS account that accepted the private offer if the purchased quota is intended for the cluster you are creating.
    *   The associated **AWS infrastructure account** is typically set to the AWS account ID used by the administrator of the cluster that is being created.
    *   This can be the same AWS account as the billing AWS account.
    *   AWS resources are deployed into this account and all the billing associated with those resources is processed accordingly.
    *   If different AWS accounts are selected as the infrastructure and billing accounts, an informative note is displayed.
        ![rosa-infrastructure-and-billing-aws-account-selection-during-rosa-with-hcp-cluster-deployment](/_assets/images/rosa-infrastructure-and-billing-aws-account-selection-during-rosa-with-hcp-cluster-deployment.png)