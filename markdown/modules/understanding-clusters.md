{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the {{ product_title }} cloud deployment options {id="overview-of-osd-cloud-deployment-options_{{ context }}"}

{{ product_title }} offers {{ OCP }} clusters as a managed service on {{ AWS }} or {{ GCP }}. {._abstract}

Through the Customer Cloud Subscription (CCS) model, you can deploy clusters in an existing AWS or {{ gcp_short }} cloud account that you own.

Alternatively, you can install {{ product_title }} in a cloud account that is owned by Red&#160;Hat.

## Deploying clusters using the Customer Cloud Subscription (CCS) model {id="osd-deployment-option-ccs_{{ context }}"}

With the Customer Cloud Subscription (CCS) model you can deploy Red&#160;Hat managed {{ product_title }} clusters in an existing {{ AWS }} or {{ GCP }} account that you own. Red&#160;Hat requires customers to meet several prerequisites to provide this service, and this service is supported by Red&#160;Hat Site Reliability Engineers (SRE).

In the CCS model, the customer pays the cloud infrastructure provider directly for cloud costs, and the cloud infrastructure account is part of an organization owned by the customer, with specific access granted to Red&#160;Hat. In this model, the customer pays Red&#160;Hat for the CCS subscription and pays the cloud provider for the cloud costs.

By using the CCS model, you can use the services that are provided by your cloud provider, in addition to the services provided by Red&#160;Hat.

## Deploying clusters in Red&#160;Hat cloud accounts {id="osd-deployment-option-red-hat-cloud-account_{{ context }}"}

As an alternative to the CCS model, you can deploy {{ product_title }} clusters in AWS or {{ gcp_short }} cloud accounts that are owned by Red&#160;Hat. With this model, Red&#160;Hat is responsible for the cloud account and the cloud infrastructure costs are paid directly by Red&#160;Hat. The customer only pays the Red&#160;Hat subscription costs.