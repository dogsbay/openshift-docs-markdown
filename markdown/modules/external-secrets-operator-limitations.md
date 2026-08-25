{%- set _mod_docs_content_type = "REFERENCE" %}
# Limitations of {{ external_secrets_operator }} {id="external-secrets-operator-limitations_{{ context }}"}

There are specific operational constraints to consider when deploying or removing the {{ external_secrets_operator }}, that might require manual intervention or strict dependency ordering. {._abstract}

The following are the limitations of {{ external_secrets_operator }} during the installation and uninstallation of the `external-secrets` application.

*   Uninstalling the {{ external_secrets_operator }} does not delete the resources created for `external-secrets` application. you must clean up the resources manually.
*   When you add `cert-manager` Operator configurations in `externalsecrets.operator.openshift.io` object after creation, delete the `external-secrets-cert-controller` deployment resource manually to prevent degradation of the `external-secrets` application.
*   Enable the `BitwardenSecretManagerProvider` field in `externalsecrets.operator.openshift.io` object only when installed on OpenShift Cluster running on x86_64 and arm64 architectures .
*   Ensure `cert-manager` Operator is installed and operational before deploying the {{ external_secrets_operator }} for seamless functioning. If you install the `cert-manager` Operator later, manually restart the `external-secrets-operator` pod to apply cert-manager configurations in `externalsecrets.operator.openshift.io` object.