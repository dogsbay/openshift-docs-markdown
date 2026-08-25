{%- set _mod_docs_content_type = "PROCEDURE" %}

# Determining the next steps in the update {id="cco-determine-mode-next_{{ context }}"}

After you determine the Cloud Credential Operator mode, it is important to understand how to proceed with the update.  {._abstract}

**Procedure**

*   If you are updating a cluster that has the CCO operating in mint or passthrough mode and the root secret is present, you do not need to update any cloud provider resources and can continue to the next part of the update process.
*   If your cluster is using the CCO in mint mode with the root secret removed, you must reinstate the credential secret with the administrator-level credential before continuing to the next part of the update process.
*   If your cluster was configured using the CCO utility (`ccoctl`), you must take the following actions:
    1.  Extract and prepare the `CredentialsRequest` custom resources (CRs) for the new release.
    1.  Configure the `ccoctl` utility for the new release and use it to update the cloud provider resources.
    1.  Update the `upgradeable-to` annotation to indicate that the cluster is ready to update.
*   If your cluster is using the CCO in manual mode but was not configured using the `ccoctl` utility, you must take the following actions:
    1.  Extract and prepare the `CredentialsRequest` custom resources (CRs) for the new release.
    1.  Manually update the cloud provider resources for the new release.
    1.  Update the `upgradeable-to` annotation to indicate that the cluster is ready to update.