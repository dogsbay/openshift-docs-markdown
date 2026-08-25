{%- set _mod_docs_content_type = "CONCEPT" %}
# Certificate authority bundle configuration {id="microshift-ca-adding-bundle_{{ context }}"}

{{ microshift_short }} uses the host trust bundle when clients evaluate server certificates. {._abstract}

You can also use a customized security certificate chain to improve the compatibility of your endpoint certificates with clients specific to your deployments. To do this, you can add a certificate authority (CA) bundle with root and intermediate certificates to the {{ op_system_ostree_first }} system-wide truststore.