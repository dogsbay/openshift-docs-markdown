{%- set _mod_docs_content_type = "CONCEPT" %}
# Service Account authentication overview {id="service-account-auth-overview_{{ context }}"}

The Service Account authentication type allows you to authenticate your {{ product_title }} cluster on {{ GCP }} using a private key for authentication purposes. {._abstract}

Service accounts use RSA key pairs, which consist of a public and private key, with the private key being the service account key. The public portion of the key pair is stored on {{ gcp_full }}, while the private key is kept by the user. The private key allows users to authenticate as a service account and gain access to assets and resources associated with that service account.

Service account keys are a security risk if not managed carefully. Users should routinely rotate their service account keys to reduce the risk of leaked or stolen keys.


:::important

Because of the potential security risk when using the Service Account authentication type, Red Hat recommends using {{ gcp_short }} Workload Identity Federation (WIF) as the authentication type for installing and interacting with the OpenShift Dedicated cluster deployed on {{ gcp_first }} because it provides enhanced security. For more information, see _Creating a cluster on {{ gcp_short }} with Workload Identity Federation authentication_ in the _Additional resources_ section.

:::