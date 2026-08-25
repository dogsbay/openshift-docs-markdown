{%- set _mod_docs_content_type = "SNIPPET" %}
{{ product_title }} in AWS GovCloud carries the following requirements: {._abstract}

*   {{ product_title }} in AWS GovCloud can only be deployed into an existing VPC. See [Create Amazon VPC architecture for the AWS PrivateLink](https://docs.aws.amazon.com/ROSA/latest/userguide/getting-started-private-link.html#getting-started-private-link-step-2) use case for instructions on setting up a VPC.
*   {{ product_title }} in AWS GovCloud only supports the use of the [AWS STS](https://www.redhat.com/en/blog/what-is-aws-sts-and-how-does-red-hat-openshift-service-on-aws-rosa-use-sts) credentials method.
*   {{ product_title }} in AWS GovCloud only uses Federal Information Processing Standards (FIPS) validated modules in process cryptographic libraries.
*   {{ product_title }} in AWS GovCloud requires a separate Red&#160;Hat account for use with FedRAMP, even if you already have an existing Red&#160;Hat account for {{ product_title }} clusters in commercial regions.
    *   Each person who needs to be able to create, modify, or delete clusters must have their own Red&#160;Hat FedRAMP account.
    *   Access to an existing cluster, to use that cluster, does not require a Red&#160;Hat FedRAMP account.
*   You can use your Red&#160;Hat FedRAMP account to deploy to multiple AWS GovCloud accounts.