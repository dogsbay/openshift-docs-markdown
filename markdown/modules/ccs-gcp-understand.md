{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding Customer Cloud Subscriptions on {{ gcp_short }} {id="ccs-gcp-understand_{{ context }}"}

Red&#160;Hat {{ product_title }} provides a Customer Cloud Subscription (CCS) model that allows Red&#160;Hat to deploy and manage {{ product_title }} into a customer’s existing {{ GCP }} account. Red&#160;Hat requires several prerequisites be met in order to provide this service. {._abstract}

{{ product_title }} [cluster prerequisite integration](https://console.cloud.google.com/redhat-openshift/verify) is available within the {{ GCP }} console. This integration allows {{ GCP }} users to discover and validate cluster prerequisites directly from the {{ GCP }} interface. The prerequisites validation ensures your environment is ready before you transition to the {{ hybrid_console }} for cluster creation.

Red&#160;Hat recommends the usage of a {{ gcp_short }} project, managed by the customer, to organize all of your {{ gcp_short }} resources. A project consists of a set of users and APIs, as well as billing, authentication, and monitoring settings for those APIs.

It is recommended for the {{ product_title }} cluster using a CCS model to be hosted in a {{ gcp_short }} project within a {{ gcp_short }} organization. The organization resource is the root node of the {{ gcp_short }} resource hierarchy and all resources that belong to an organization are grouped under the organization node. Customers have the choice of using service account keys or Workload Identity Federation (WIF) when creating the roles and credentials necessary to access {{ gcp_full }} resources within a {{ gcp_short }} project.

Red&#160;Hat and {{ gcp_short }} recommend using WIF as the authentication type as it provides enhanced security through the use of short-lived credentials, whereas service account authentication uses long-lived credentials which are less secure.

For more information about creating and managing organization resources within {{ gcp_short }}, see [Creating and managing organization resources](https://cloud.google.com/resource-manager/docs/creating-managing-organization).