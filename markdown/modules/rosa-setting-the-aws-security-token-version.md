{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the AWS security token version {id="rosa-setting-the-aws-security-token-version_{{ context }}"}

If you want to create a {{ product_title }} cluster with the AWS Security Token Service (STS) in an AWS opt-in region, you must set the security token version to version 2 in your AWS account. {._abstract}

**Prerequisites**

*   You have installed and configured the latest AWS CLI on your installation host.

**Procedure**

1.  List the ID of the AWS account that is defined in your AWS CLI configuration:
    ```terminal
    $ aws sts get-caller-identity --query Account --output json
    ```

    Ensure that the output matches the ID of the relevant AWS account.
1.  List the security token version that is set in your AWS account:
    ```terminal
    $ aws iam get-account-summary --query SummaryMap.GlobalEndpointTokenVersion --output json
    ```

    For example:
    ```terminal
    1
    ```
1.  To update the security token version to version 2 for all regions in your AWS account, run the following command:
    ```terminal
    $ aws iam set-security-token-service-preferences --global-endpoint-token-version v2Token
    ```

    :::important

    Updating to security token version 2 can impact the systems that store the tokens, due to the increased token length. For more information, see [the AWS documentation on setting STS preferences](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/set-security-token-service-preferences.html).
    
    :::