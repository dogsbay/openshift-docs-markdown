{%- set _mod_docs_content_type = "CONCEPT" %}
# Create an OSD cluster on {{ GCP }} with WIF authentication {id="osd-create-a-cluster-with-wif-authentication_{{ context }}"}

Create an {{ product_title }} cluster on {{ GCP }} that authenticates with Workload Identity Federation (WIF). {._abstract}

WIF lets an {{ product_title }} cluster authenticate to {{ GCP }} by using short-lived credentials instead of long-lived service account keys. WIF is the recommended authentication method on {{ GCP }} because it reduces the risks associated with managing and storing static credentials.