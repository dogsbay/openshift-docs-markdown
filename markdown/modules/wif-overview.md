{%- set _mod_docs_content_type = "CONCEPT" %}
# Workload Identity Federation overview {id="workload-identity-federation-overview_{{ context }}"}

Workload Identity Federation (WIF) is a {{ GCP }} Identity and Access Management (IAM) feature that provides third parties a secure method to access resources on a customer’s cloud account. WIF eliminates the need for service account keys, and is {{ gcp_full }}'s preferred method of credential authentication. {._abstract}

While service account keys can provide powerful access to your {{ gcp_full }} resources, they must be maintained by the user and can be a security risk if they are not managed properly. WIF does not use service keys as an access method for your {{ gcp_full }} resources. Instead, WIF grants access by using credentials from external identity providers to generate short-lived credentials for workloads. The workloads can then use these credentials to temporarily impersonate service accounts and access {{ gcp_full }} resources. This removes the burden of having to properly maintain service account keys, and removes the risk of unauthorized users gaining access to service account keys.

The following bulleted items provides a basic overview of the Workload Identity Federation process:

*   The owner of the {{ GCP }} project configures a workload identity pool with an identity provider, allowing {{ product_title }} to  access the project’s associated service accounts using short-lived credentials.
*   This workload identity pool is configured to authenticate requests using an Identity Provider (IP) that the user defines.
*   For applications to get access to cloud resources, they first pass credentials to Google’s Security Token Service (STS). STS uses the specified identity provider to verify the credentials.
*   Once the credentials are verified, STS returns a temporary access token to the caller, giving the application the ability to impersonate the service account bound to that identity.

Operators also need access to cloud resources. By using WIF instead of service account keys to grant this access, cluster security is further strengthened, as service account keys are no longer stored in the cluster. Instead, operators are given temporary access tokens that impersonate the service accounts. These tokens are short-lived and regularly rotated.

For more information about Workload Identity Federation, see the [{{ gcp_full }} documentation](https://cloud.google.com/iam/docs/workload-identity-federation).


:::important

Workload Identity Federation (WIF) is only available on {{ product_title }} version 4.17 and later, and is only supported by the Customer Cloud Subscription (CCS) infrastructure type.

:::