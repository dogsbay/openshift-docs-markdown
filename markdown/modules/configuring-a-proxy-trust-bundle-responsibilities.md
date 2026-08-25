{%- set _mod_docs_content_type = "CONCEPT" %}
# Responsibilities for additional trust bundles {id="configuring-a-proxy-trust-bundle-responsibilities_{{ context }}"}

If you supply an additional trust bundle, you are responsible for the following requirements: {._abstract}

*   Ensuring that the contents of the additional trust bundle are valid
*   Ensuring that the certificates, including intermediary certificates, contained in the additional trust bundle have not expired
*   Tracking the expiry and performing any necessary renewals for certificates contained in the additional trust bundle
*   Updating the cluster configuration with the updated additional trust bundle