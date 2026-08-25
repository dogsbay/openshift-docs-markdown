---
title: Authenticating the {{ cert_manager_operator }}
---

# Authenticating the {{ cert_manager_operator }} {#cert-manager-authenticate}

To enable the operator to manage components on your cloud provider, authenticate the {{ cert_manager_operator }} by configuring cloud credentials. You can grant the Operator access to external services required for certificate issuance, such as DNS providers.

<a name="additional-resources_cert-manager-authenticate-gcp"></a>**Additional resources**

- [Configuring the Cloud Credential Operator utility](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)

<a name="additional-resources_cert-manager-authenticate-gcp-workload-identity"></a>**Additional resources**

- [Configuring the Cloud Credential Operator utility](/installing/installing_gcp/installing-gcp-customizations#cco-ccoctl-configuring_installing-gcp-customizations)
- [Manual mode with short-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds)
- [Default behavior of the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-default_about-cloud-credential-operator)
