{%- set _mod_docs_content_type = "REFERENCE" %}
# Installation workflow {id="olm-policy-workflow_{{ context }}"}

To troubleshoot installation or update issues, review the workflow Operator Lifecycle Manager (OLM) follows during the installation process. {._abstract}

When an Operator group specifies a service account, OLM completes the following steps:

1.  OLM picks up the `Subscription` object.
1.  OLM fetches the Operator group linked to the subscription.
1.  OLM checks if the Operator group specifies a service account.
1.  OLM creates a client scoped to the service account and uses it to install the Operator, ensuring permissions remain confined to that service account.
1.  OLM creates a new service account with the permissions specified in the CSV and assigns it to the Operator. The Operator then runs using this assigned service account.