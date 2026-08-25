{%- set _mod_docs_content_type = "CONCEPT" %}
# Alternatives to storing administrator-level secrets in the kube-system project {id="installing-azure-manual-modes_{{ context }}"}

To avoid storing administrator-level secrets in the `kube-system` project, you can configure your cluster to use manually managed long-term cloud credentials or short-term credentials that are managed outside the cluster. {._abstract}

By default, administrator-level secrets are stored in the `kube-system` project. If you set the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, choose one of the following credential management options:

*   To manage long-term cloud credentials manually, follow the procedure in "Manually creating long-term credentials".
*   To use short-term credentials that are managed outside the cluster for individual components, follow the procedures in "Configuring an Azure cluster to use short-term credentials".

**Additional resources**
{._additional-resources}

*   [Manually creating long-term credentials](/installing/installing_azure/ipi/installing-restricted-networks-azure-installer-provisioned#manually-create-iam_installing-restricted-networks-azure-installer-provisioned)
*   [Configuring an Azure cluster to use short-term credentials](/installing/installing_azure/ipi/installing-restricted-networks-azure-installer-provisioned#installing-azure-with-short-term-creds_installing-restricted-networks-azure-installer-provisioned)