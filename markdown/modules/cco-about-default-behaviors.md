{%- set _mod_docs_content_type = "CONCEPT" %}

# About the Cloud Credential Operator default behavior {id="cco-about-default-behaviors_{{ context }}"}

To better manage cloud credentials, you should familiarize yourself with the default behaviors of the Cloud Credential Operator. {._abstract}

For platforms on which multiple modes are supported (AWS, Azure, and {{ gcp_short }}), when the CCO operates in its default mode, it checks the provided credentials dynamically to determine for which mode they are sufficient to process `CredentialsRequest` CRs.

By default, the CCO determines whether the credentials are sufficient for mint mode, which is the preferred mode of operation, and uses those credentials to create appropriate credentials for components in the cluster. If the credentials are not sufficient for mint mode, it determines whether they are sufficient for passthrough mode. If the credentials are not sufficient for passthrough mode, the CCO cannot adequately process `CredentialsRequest` CRs.

If the provided credentials are determined to be insufficient during installation, the installation fails. For AWS, the installation program fails early in the process and indicates which required permissions are missing. Other providers might not provide specific information about the cause of the error until errors are encountered.

If the credentials are changed after a successful installation and the CCO determines that the new credentials are insufficient, the CCO puts conditions on any new `CredentialsRequest` CRs to indicate that it cannot process them because of the insufficient credentials.

To resolve insufficient credentials issues, provide a credential with sufficient permissions. If an error occurred during installation, try installing again. For issues with new `CredentialsRequest` CRs, wait for the CCO to try to process the CR again. As an alternative, you can configure your cluster to use a different CCO mode that is supported for your cloud provider.