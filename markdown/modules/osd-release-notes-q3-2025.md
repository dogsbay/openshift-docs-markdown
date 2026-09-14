{%- set _mod_docs_content_type = "REFERENCE" %}
# Q3 2025 {id="osd-q3-2025_{{ context }}"}

The following items were added during the third quarter of 2025. {._abstract}


Updates to Workload Identity Federation (WIF) permissions and roles
:   The default IAM permissions for WIF in the [managed-cluster-config](https://github.com/openshift/managed-cluster-config/blob/master/resources/wif/4.19/vanilla.yaml) template have been updated. This means newly created WIF configurations will have fewer, less overly permissive permissions by default.

    *   The `sd-sre-platform-gcp-access@redhat.com` principal no longer needs the `compute.firewalls.create` permission. If Red&#160;Hat site reliability engineering (SRE) ever need this permission, they will reach out through a support case.
    *   The `osd-deployer` service account no longer requires the `resourcemanager.projects.setIamPolicy` permission, which has been removed.
    *   The `osd-deployer` service account no longer uses the `iam.serviceAccounts.signBlob` permission. This has been replaced with the `iam.serviceAccountTokenCreator` role, which is now specifically assigned to the service accounts that require it.
    *   The `osd-deployer` service account no longer uses the `iam.serviceAccounts.actAs` permission. This has been replaced with the `iam.serviceAccountUser` role, which is now specifically assigned to the service accounts that require it.


    If you have existing `wif-config` instances, you can get these new, less permissive permissions by running the `ocm gcp update wif-config` command. For more information, see [Updating a Workload Identify Federation configuration](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/openshift_dedicated_clusters_on_google_cloud/osd-creating-a-cluster-on-gcp-with-workload-identity-federation#wif-configuration-update_osd-creating-a-cluster-on-gcp-with-workload-identity-federation).

Workload Identify Federation (WIF) is now the default authentication type for {{ product_title }} clusters on {{ GCP }}
:   In alignment with the principle of least privilege as well as {{ gcp_full }}'s preferred method of credential authentication, WIF is now the default authentication type when creating an {{ product_title }} cluster on {{ GCP }}. WIF greatly improves an {{ product_title }} cluster’s resilience against unauthorized access by using short-lived, least-privilege credentials and eliminating the need for static service account keys. For more information, see [Creating a cluster on {{ gcp_short }} with Workload Identity Federation authentication](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/openshift_dedicated_clusters_on_google_cloud/osd-creating-a-cluster-on-gcp-with-workload-identity-federation).


Support for managing workload identity pools and providers in a dedicated {{ GCP }} project
:   {{ product_title }} on {{ GCP }} now supports the option of creating and managing workload identity pools and providers in a specified dedicated project during the creation of a WIF configuration. Red&#160;Hat plans on offering this option for existing WIF configurations in an upcoming release. For more information, see [Creating a Workload Identify Federation configuration](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/openshift_dedicated_clusters_on_google_cloud/osd-creating-a-cluster-on-gcp-with-workload-identity-federation#create-wif-configuration_osd-creating-a-cluster-on-gcp-with-workload-identity-federation).