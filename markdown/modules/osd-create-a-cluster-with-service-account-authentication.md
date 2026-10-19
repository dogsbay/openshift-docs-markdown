{%- set _mod_docs_content_type = "CONCEPT" %}
# Create an OSD cluster on {{ GCP }} with Service Account authentication {id="osd-create-a-cluster-with-service-account-authentication_{{ context }}"}

Create an {{ product_title }} cluster on {{ GCP }} that authenticates with a service account. {._abstract}

Service Account authentication lets an {{ product_title }} cluster access your {{ GCP }} resources by using a Google Cloud service account. Use this method when the processes of your organization rely on service account keys.