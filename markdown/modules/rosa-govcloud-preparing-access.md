{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing to access {{ product_title }} in AWS GovCloud {id="rosa-govcloud-preparing-access_{{ context }}"}

To access {{ product_title }} in AWS GovCloud you must prepare your accounts and list of users.

**Prerequisites**

*   You must have one of the following:
    *   FIPS 140-2 compliant hardware token if you use Red&#160;Hat authorization for access to console.openshiftusgov.com.
    *   Integrated IDP if you are an existing customer with a managed hardware token and authorization infrastructure.
*   You must already have an AWS GovCloud account.
*   You must already have a commercial Red&#160;Hat account.
    *   If you need a commercial Red&#160;Hat account, visit the [console](https://console.redhat.com) to sign up.
*   You have configured your AWS CLI to use GovCloud.
*   You already have the latest version of the {{ rosa_cli_first }} installed.
*   You must have enabled {{ product_title }} on the paired commercial account.
*   You must attest that users:
    *   Are US-based, a US citizen, and using a US IP address based on GovCloud and US government requirements.
    *   Have a successful background check from an approved entity conducted by their organization or sponsoring agency.
    *   Should be subject to initial and annual refresher security training.